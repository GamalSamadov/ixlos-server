import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateTafseerAyahInput } from './inputs/create-tafseer-ayah.input'
import { UpdateTafseerAyahInput } from './inputs/update-tafseer-ayah.input'

@Injectable()
export class TafseerAyahsService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getById(id: string) {
		return this.prismaService.tafseerAyah.findUnique({
			where: {
				id
			},
			include: {
				ayah: true,
				tafseer: true
			}
		})
	}

	public async create(
		ayahId: string,
		tafseerId: string,
		input: CreateTafseerAyahInput
	) {
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

		for (const tafseerAyah of ayah.tafseers) {
			if (tafseerAyah.tafseer.id === tafseerId) {
				throw new Error('Oyatda bunday \"ID\"lik tafsir mavjud.')
			}
		}

		const tafseer = await this.prismaService.tafseer.findUnique({
			where: {
				id: tafseerId
			},
			include: {
				ayahs: {
					include: {
						tafseer: true
					}
				}
			}
		})

		if (!tafseer) {
			throw new Error('Tafsir topilmadi.')
		}

		await this.prismaService.tafseerAyah.create({
			data: {
				...input,
				ayah: {
					connect: {
						id: ayahId
					}
				},
				tafseer: {
					connect: {
						id: tafseerId
					}
				}
			}
		})

		return true
	}

	public async update(
		id: string,
		ayahId: string,
		tafseerId: string,
		input: UpdateTafseerAyahInput
	) {
		const tafseerAyah = await this.getById(id)

		if (!tafseerAyah) {
			throw new Error('Oyat tafsiri topilmadi.')
		}

		const ayah = await this.prismaService.ayah.findUnique({
			where: {
				id: ayahId
			}
		})

		if (!ayah) {
			throw new Error('Oyat topilmadi.')
		}

		const tafseer = await this.prismaService.tafseer.findUnique({
			where: {
				id: tafseerId
			}
		})

		if (!tafseer) {
			throw new Error('Tafsir topilmadi.')
		}

		await this.prismaService.tafseerAyah.update({
			where: {
				id
			},
			data: {
				...input,
				ayah: {
					connect: {
						id: ayahId
					}
				},
				tafseer: {
					connect: {
						id: tafseerId
					}
				}
			}
		})

		return true
	}

	public async delete(id: string) {
		const tafseerAyah = await this.getById(id)

		if (!tafseerAyah) {
			throw new Error('Oyat tafsiri topilmadi.')
		}

		await this.prismaService.tafseerAyah.delete({
			where: {
				id
			}
		})

		return true
	}
}
