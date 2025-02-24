import { ConflictException, Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationService } from '@/src/shared/pagination/pagination.service'

import { CreateUserInput } from './inputs/create-user.input'

@Injectable()
export class AccountService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly paginationService: PaginationService
	) {}

	public async getUsernameByUsername(username: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				username,
				isActive: true
			}
		})

		if (!user) {
			return ''
		}

		return user.username
	}

	public async getEmailByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				email,
				isActive: true
			}
		})

		if (!user) {
			return ''
		}

		return user.email
	}

	public async getById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id,
				isActive: true
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		return user
	}

	public async create(input: CreateUserInput) {
		const { email, username, password, displayName } = input

		await this.throwIfUserExist(username, email)

		await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await this.hashPassword(password),
				displayName: displayName ? displayName : username
			}
		})

		return true
	}

	public async throwIfUserExist(username: string, email: string) {
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
	}

	public async hashPassword(password: string) {
		return await hash(password)
	}
}
