import { ConflictException, Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateUserInput } from './inputs/create-user.input'

@Injectable()
export class AccountService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			}
		})

		return user
	}

	public async create(input: CreateUserInput) {
		const { email, username, password, displayName, bio } = input

		await this.throwIfUserExist(username, email)

		await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await this.hashPassword(password),
				displayName: displayName ? displayName : username,
				bio: bio ? bio : ''
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
			throw new ConflictException('Username already exist')
		}

		const isEmailExist = await this.prismaService.user.findUnique({
			where: {
				email
			}
		})

		if (isEmailExist) {
			throw new ConflictException('Email already exist')
		}
	}

	public async hashPassword(password: string) {
		return await hash(password)
	}
}
