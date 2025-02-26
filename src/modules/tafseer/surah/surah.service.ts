import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'
import { PaginationService } from '@/src/shared/pagination/pagination.service'
import { hasMorePagination } from '@/src/shared/utils/pagination/has-more'

import { CreateSurahInput } from './input/create-surah.input'
import { UpdateSurahInput } from './input/update-surah.input'

@Injectable()
export class SurahService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly paginationService: PaginationService
	) {}

	public async getAll(input: PaginationInput) {
		const { take } = this.paginationService.getPagination(input)

		const surahs = await this.prismaService.surah.findMany({
			take,
			orderBy: {
				number: 'asc'
			}
		})

		const total = surahs.length

		const hasMore = hasMorePagination(total, take)

		return { surahs, hasMore }
	}

	public async getById(id: string) {
		const surah = await this.prismaService.surah.findUnique({
			where: {
				id
			}
		})

		if (!surah) {
			throw new Error('Sura topilmadi.')
		}

		return surah
	}

	public async create(input: CreateSurahInput) {
		await this.prismaService.surah.create({
			data: {
				...input
			}
		})

		return true
	}

	public async update(id: string, input: UpdateSurahInput) {
		const surah = await this.getById(id)

		if (!surah) {
			throw new Error('Surah topilmadi.')
		}

		await this.prismaService.surah.update({
			where: {
				id
			},
			data: {
				...input
			}
		})

		return true
	}

	public async delete(id: string) {
		const surah = await this.getById(id)

		if (!surah) {
			throw new Error('Sura topilmadi.')
		}

		await this.prismaService.surah.delete({
			where: {
				id
			}
		})

		return true
	}
}
