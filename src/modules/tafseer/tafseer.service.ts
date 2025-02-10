import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateTafseerInput } from './inputs/create-tafseer.input'
import { UpdateTafseerInput } from './inputs/update-tafseer.input'

@Injectable()
export class TafseerService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getAll() {
		return this.prismaService.tafseer.findMany()
	}

	public async getById(id: string) {
		return this.prismaService.tafseer.findUnique({
			where: {
				id
			}
		})
	}

	public async create(input: CreateTafseerInput) {
		const { name, arabicName, text, filePath, language, authorId } = input

		const author = await this.prismaService.author.findUnique({
			where: { id: authorId }
		})
		if (!author) {
			throw new Error('Author not found.')
		}

		await this.prismaService.tafseer.create({
			data: {
				name,
				arabicName,
				text,
				filePath,
				language,
				author: {
					connect: {
						id: authorId
					}
				}
			}
		})

		return true
	}

	public async update(id: string, input: UpdateTafseerInput) {
		const tafseer = await this.prismaService.tafseer.findUnique({
			where: {
				id
			}
		})

		if (!tafseer) {
			throw new Error('Tafsir topilmadi.')
		}

		const { name, arabicName, text, filePath, language, authorId } = input

		// Only update author relation if authorId is provided
		let authorUpdate = {}
		if (authorId) {
			const author = await this.prismaService.author.findUnique({
				where: {
					id: authorId
				}
			})

			if (!author) {
				throw new Error('Aftor topilmadi.')
			}

			authorUpdate = {
				author: {
					connect: {
						id: authorId
					}
				}
			}
		}

		await this.prismaService.tafseer.update({
			where: {
				id
			},
			data: {
				name: name || tafseer.name,
				arabicName: arabicName || tafseer.arabicName,
				text: text || tafseer.text,
				filePath: filePath || tafseer.filePath,
				language: language || tafseer.language,
				...authorUpdate
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
