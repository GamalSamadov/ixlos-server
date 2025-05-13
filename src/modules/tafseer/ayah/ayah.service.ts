import { Injectable } from '@nestjs/common'

import { Prisma } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'
import { PaginationService } from '@/src/shared/pagination/pagination.service'
import { hasMorePagination } from '@/src/shared/utils/pagination/has-more'

import { SurahService } from '../surah/surah.service'

import { CreateAyahInput } from './inputs/create-ayah.input'
import { GetPageAyahsInput } from './inputs/get-page-ayahs.input'
import { UpdateAyahInput } from './inputs/update-ayah.input'
import { getPageDetailsByNumber } from './utils/get-page-details-by-number.util'

@Injectable()
export class AyahService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly paginationService: PaginationService,
		private readonly surahService: SurahService
	) {}

	public async getAll(surahId: string, input: PaginationInput) {
		const { take } = this.paginationService.getPagination(input)
		const ayahs = await this.prismaService.ayah.findMany({
			where: {
				surahId
			},
			orderBy: {
				number: 'asc'
			},
			take
		})

		return ayahs
	}

	public async getById(ayahId: string) {
		const ayah = await this.prismaService.ayah.findUnique({
			where: {
				id: ayahId
			},
			include: {
				tafseers: {
					include: {
						tafseer: true
					}
				}
			}
		})

		if (!ayah) {
			throw new Error('Oyat topilmadi.')
		}

		return ayah
	}

	public async getByPageNumber(input: GetPageAyahsInput) {
		const { pageNumber } = input

		if (!pageNumber) {
			throw new Error('Sahifa raqamini kiriting.')
		}

		if (pageNumber < 1 || pageNumber > 604) {
			throw new Error("Sahifa raqami 1 dan 604 gacha bo'lishi kerak.")
		}

		const pageDetails = getPageDetailsByNumber(pageNumber)

		const data = []

		for (const detail of pageDetails) {
			const surahNumber = detail.surah
			const surah = await this.surahService.getByNumber(surahNumber)
			const ayahs = await this.prismaService.ayah.findMany({
				where: {
					surahId: surah.id,
					number: {
						gte: detail.start,
						lte: detail.end
					}
				},
				orderBy: {
					number: 'asc'
				}
			})

			data.push({
				surah,
				ayahs
			})
		}

		return data
	}

	public async searchByText(searchTerm: string, input: PaginationInput) {
		const { take } = this.paginationService.getPagination(input)

		if (!searchTerm || searchTerm.length < 5) {
			return []
		}

		const searchTermFilter = this.getAyahsSearchTerm(searchTerm)

		const ayahs = await this.prismaService.ayah.findMany({
			where: searchTermFilter,
			take,
			include: {
				tafseers: {
					include: {
						tafseer: true
					}
				},
				surah: true
			}
		})

		const total = await this.prismaService.ayah.count({
			where: searchTermFilter
		})

		const hasMore = hasMorePagination(total, take)

		return { ayahs, hasMore, total }
	}

	public async create(surahId: string, input: CreateAyahInput) {
		const surah = await this.prismaService.surah.findUnique({
			where: {
				id: surahId
			}
		})

		if (!surah) {
			throw new Error('Sura topilmadi.')
		}

		await this.prismaService.ayah.create({
			data: {
				...input,
				surah: {
					connect: {
						id: surahId
					}
				}
			}
		})

		return true
	}

	public async update(id: string, surahId: string, input: UpdateAyahInput) {
		const ayah = await this.getById(id)

		if (!ayah) {
			throw new Error('Oyat topilmadi.')
		}

		const surah = await this.prismaService.surah.findUnique({
			where: {
				id: surahId
			}
		})

		if (!surah) {
			throw new Error('Sura topilmadi.')
		}

		await this.prismaService.ayah.update({
			where: {
				id: id
			},
			data: {
				...input,
				surah: {
					connect: {
						id: surahId
					}
				}
			}
		})

		return true
	}

	public async delete(id: string) {
		const ayah = await this.getById(id)

		if (!ayah) {
			throw new Error('Oyat topilmadi.')
		}

		await this.prismaService.ayah.delete({
			where: {
				id
			}
		})

		return true
	}

	public getAyahsSearchTerm(searchTerm: string): Prisma.AyahWhereInput {
		return {
			OR: [
				{
					uzbekTextInLatin: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					uzbekTextInCyrillic: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					arabicText: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			]
		}
	}
}
