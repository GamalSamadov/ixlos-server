import { ConflictException, Injectable } from '@nestjs/common'

import { Role } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'
import { PaginationService } from '@/src/shared/pagination/pagination.service'
import { hasMorePagination } from '@/src/shared/utils/pagination/has-more'
import { getAuthorSearchTermFilter } from '@/src/shared/utils/search-term/getAuthorSearchTermFilter'

import { AccountService } from '../account.service'

import { CreateAuthorInput } from './inputs/create-author.input'
import { UpdateAuthorInput } from './inputs/update-author.input'

@Injectable()
export class AuthorService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly accountService: AccountService,
		private readonly paginationService: PaginationService
	) {}

	public async getAll(searchTerm: string, input: PaginationInput) {
		const { take, skip } = this.paginationService.getPagination(input)

		const searchTermFilter = getAuthorSearchTermFilter(searchTerm)

		const authors = await this.prismaService.author.findMany({
			where: searchTermFilter,
			take,
			skip,
			include: {
				user: true
			}
		})

		const total = await this.prismaService.author.count({
			where: searchTermFilter
		})

		const hasMore = hasMorePagination(total, skip, take)

		return { authors, hasMore }
	}

	public async getById(id: string) {
		const author = await this.prismaService.author.findUnique({
			where: {
				id
			},
			include: {
				user: true
			}
		})

		if (!author) {
			throw new Error('Aftor topilmadi.')
		}

		return author
	}

	public async create(input: CreateAuthorInput) {
		const { username, email, password, displayName, bio, country } = input

		await this.accountService.throwIfUserExist(username, email)

		const user = await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await this.accountService.hashPassword(password),
				displayName,
				rights: [Role.USER, Role.AUTHOR],
				bio
			}
		})

		await this.prismaService.author.create({
			data: {
				country,
				user: {
					connect: {
						id: user.id
					}
				}
			}
		})

		return true
	}

	public async update(id: string, input: UpdateAuthorInput) {
		const author = await this.prismaService.author.findUnique({
			where: {
				id
			},
			include: {
				user: true
			}
		})

		if (!author) {
			throw new Error('Aftor topilmadi.')
		}

		const { username, email, displayName, bio, country } = input

		const isUsernameExist =
			(await this.prismaService.user.findFirst({
				where: {
					username
				}
			})) && username === author.user.username

		if (isUsernameExist) {
			throw new ConflictException('Foydalanuvchi nomi mavjud')
		}

		const isEmailExist =
			(await this.prismaService.user.findFirst({
				where: {
					email
				}
			})) && email === author.user.email

		if (isEmailExist) {
			throw new ConflictException('E-pochta mavjud')
		}

		await this.prismaService.user.update({
			where: {
				id: author.user.id
			},
			data: {
				username,
				email,
				displayName,
				bio
			}
		})

		await this.prismaService.author.update({
			where: {
				id
			},
			data: {
				country
			}
		})

		return true
	}

	public async delete(id: string) {
		const author = await this.prismaService.author.findUnique({
			where: {
				id
			}
		})

		if (!author) {
			throw new Error('Aftor topilmadi.')
		}

		await this.prismaService.user.delete({
			where: {
				id: author.userId
			}
		})

		return true
	}
}
