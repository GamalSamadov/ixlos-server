import { Injectable } from '@nestjs/common'

import { Prisma } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'
import { PaginationService } from '@/src/shared/pagination/pagination.service'
import { hasMorePagination } from '@/src/shared/utils/pagination/has-more'

import { CreateTafseerInput } from './inputs/create-tafseer.input'
import { UpdateTafseerInput } from './inputs/update-tafseer.input'

@Injectable()
export class TafseerService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly paginationService: PaginationService
	) {}

	public async getAll(searchTerm: string, input: PaginationInput) {
		const { take } = this.paginationService.getPagination(input)
		const searchTermFilter = this.getTafseerSearchTermFilter(searchTerm)

		const tafseers = await this.prismaService.tafseer.findMany({
			where: searchTermFilter,
			take,
			orderBy: {
				name: 'asc'
			},
			include: {
				ayahs: {
					include: {
						tafseer: true
					}
				},
				author: true
			}
		})

		const total = await this.prismaService.tafseer.count({
			where: searchTermFilter
		})

		const hasMore = hasMorePagination(total, take)

		return { tafseers, hasMore }
	}

	public async getById(id: string) {
		return this.prismaService.tafseer.findUnique({
			where: {
				id
			},
			include: {
				ayahs: true,
				author: true
			}
		})
	}

	public async create(authorId: string, input: CreateTafseerInput) {
		const author = await this.prismaService.author.findUnique({
			where: { id: authorId }
		})
		if (!author) {
			throw new Error('Author not found.')
		}

		await this.prismaService.tafseer.create({
			data: {
				...input,
				author: {
					connect: {
						id: authorId
					}
				}
			}
		})

		return true
	}

	public async update(
		id: string,
		authorId: string,
		input: UpdateTafseerInput
	) {
		const tafseer = await this.prismaService.tafseer.findUnique({
			where: {
				id
			}
		})

		if (!tafseer) {
			throw new Error('Tafsir topilmadi.')
		}

		const author = await this.prismaService.author.findUnique({
			where: {
				id: authorId
			}
		})

		if (!author) {
			throw new Error('Aftor topilmadi.')
		}

		await this.prismaService.tafseer.update({
			where: {
				id
			},
			data: {
				...input,
				author: {
					connect: {
						id: authorId
					}
				}
			}
		})

		return true
	}

	public async delete(id: string) {
		const tafseer = await this.prismaService.tafseer.findUnique({
			where: {
				id
			}
		})

		if (!tafseer) {
			throw new Error('Tafsir topilmadi.')
		}

		await this.prismaService.tafseer.delete({
			where: {
				id
			}
		})

		return true
	}

	private getTafseerSearchTermFilter(
		searchTerm: string
	): Prisma.TafseerWhereInput {
		return {
			OR: [
				{
					name: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					arabicName: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			]
		}
	}
}
