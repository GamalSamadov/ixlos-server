import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

@Injectable()
export class SurahService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getAll() {
		return this.prismaService.surah.findMany()
	}

	public async getById(id: string) {
		return this.prismaService.surah.findUnique({
			where: {
				id
			}
		})
	}

	// public async create(input: )
}
