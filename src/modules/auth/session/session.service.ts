import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { hash, verify } from 'argon2'
import type { Request } from 'express'

import { Role } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import { RedisService } from '@/src/core/redis/redis.service'
import { getSessionMetadata } from '@/src/shared/utils/session-metadata.util'

import { CreateUserInput } from '../account/inputs/create-user.input'

import { LoginInput } from './inputs/login.input'

@Injectable()
export class SessionService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly redisService: RedisService,
		private readonly configService: ConfigService
	) {}

	public async findByUser(req: Request) {
		const userId = req.session.userId

		if (!userId) {
			throw new NotFoundException('User not found in the sessions')
		}

		const keys = await this.redisService.keys('*')
		const userSessions = []

		for (const key of keys) {
			const sessionData = await this.redisService.get(key)

			if (sessionData) {
				const session = JSON.parse(sessionData)

				if (session.userId === userId) {
					userSessions.push({
						...session,
						id: key.split(':')[1]
					})
				}
			}
		}
		userSessions.sort((a, b) => b.createdAt - a.createdAt)
		return userSessions.filter(session => session.id !== req.session.id)
	}

	public async findCurrent(req: Request) {
		const sessionId = req.session.id
		const sessionData = await this.redisService.get(
			`${this.configService.getOrThrow<string>('SESSION_FOLDER')}${sessionId}`
		)

		const userId = req.session.userId

		const user = await this.prismaService.user.findUnique({
			where: { id: userId }
		})

		const session = JSON.parse(sessionData)

		return {
			...session,
			id: sessionId,
			rights: user.rights
		}
	}

	public async login(req: Request, input: LoginInput, userAgent: string) {
		const { login, password } = input

		const user = await this.prismaService.user.findFirst({
			where: {
				OR: [
					{
						username: login
					},
					{
						email: login
					}
				]
			}
		})

		if (!user) {
			throw new UnauthorizedException('Malumotlar xato.')
		}

		const isPasswordMatch = await verify(user.password, password)

		if (!isPasswordMatch) {
			throw new UnauthorizedException('Malumotlar xato.')
		}

		const metadata = getSessionMetadata(req, userAgent)

		return new Promise((resolve, reject) => {
			req.session.createdAt = new Date()
			req.session.userId = user.id
			req.session.role = user.rights
			req.session.metadata = metadata

			req.session.save(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Sessia yaratishda xatolik'
						)
					)
				}
				resolve(user)
			})
		})
	}

	public async register(
		req: Request,
		input: CreateUserInput,
		userAgent: string
	) {
		const { username, email, password, displayName } = input

		const isUsernameExist = await this.prismaService.user.findUnique({
			where: {
				username
			}
		})

		if (isUsernameExist) {
			throw new ConflictException('Foydalanuvchi nomi mavjud.')
		}

		const isEmailExist = await this.prismaService.user.findUnique({
			where: {
				email
			}
		})

		if (isEmailExist) {
			throw new ConflictException('E-pochta mavjud.')
		}

		const adminEmails = this.configService
			.getOrThrow<string>('ADMIN_EMAILS')
			.split(',')

		const user = await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await hash(password),
				displayName: displayName ? displayName : username,
				rights: adminEmails.includes(email)
					? [Role.ADMIN, Role.USER]
					: [Role.USER]
			}
		})

		const metadata = getSessionMetadata(req, userAgent)

		return new Promise((resolve, reject) => {
			req.session.createdAt = new Date()
			req.session.userId = user.id
			req.session.role = user.rights
			req.session.metadata = metadata

			req.session.save(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Sessia yaratishda xatolik'
						)
					)
				}
				resolve(user)
			})
		})
	}

	public async logout(req: Request) {
		return new Promise((resolve, reject) => {
			req.session.destroy(err => {
				if (err) {
					return reject(
						new InternalServerErrorException('Xatolik yuz berdi')
					)
				}
				req.res.clearCookie(
					this.configService.getOrThrow<string>('SESSION_NAME')
				)
				resolve(true)
			})
		})
	}

	public async deleteUserAndLogout(req: Request) {
		const userId = req.session.userId

		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new NotFoundException('Foaidalanuvchi topilmadi')
		}

		await this.prismaService.user.delete({
			where: {
				id: userId
			}
		})

		return new Promise((resolve, reject) => {
			req.session.destroy(err => {
				if (err) {
					return reject(
						new InternalServerErrorException('Xatolik yuz berdi')
					)
				}
				req.res.clearCookie(
					this.configService.getOrThrow<string>('SESSION_NAME')
				)
				resolve(true)
			})
		})
	}

	public async clearSession(req: Request) {
		req.res.clearCookie(
			this.configService.getOrThrow<string>('SESSION_NAME')
		)

		return true
	}

	public async remove(req: Request, id: string) {
		if (req.session.id === id) {
			throw new ConflictException('Cannot remove current session')
		}

		await this.redisService.del(
			`${this.configService.getOrThrow<string>('SESSION_FOLDER')}${id}`
		)

		return true
	}
}
