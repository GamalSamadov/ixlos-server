import { ConflictException, Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'
import { PaginationService } from '@/src/shared/pagination/pagination.service'

import { CreateUserInput } from './inputs/create-user.input'

@Injectable()
export class AccountService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly paginationService: PaginationService
	) {}

	public async getAll(input: PaginationInput) {
		const { take, skip } = this.paginationService.getPagination(input)

		const users = await this.prismaService.user.findMany({
			take,
			skip
		})

		return users
	}

	public async getById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

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
