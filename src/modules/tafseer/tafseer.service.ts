import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateTafseerInput } from './inputs/create-tafseer.input'
import { UpdateTafseerInput } from './inputs/update-tafseer.input'

@Injectable()
export class TafseerService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getAll() {
		return this.prismaService.tafseer.findMany({
			orderBy: {
				name: 'asc'
			},
			include: {
				ayahs: true,
				author: true
			}
		})
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
}
