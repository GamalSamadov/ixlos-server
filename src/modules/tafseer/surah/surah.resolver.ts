import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'

import { CreateSurahInput } from './input/create-surah.input'
import { UpdateSurahInput } from './input/update-surah.input'
import { SurahModel } from './model/surah.model'
import { SurahService } from './surah.service'

@Resolver('Surah')
export class SurahResolver {
	constructor(private readonly surahService: SurahService) {}

	@Query(() => [SurahModel], { name: 'getAllSurahs' })
	public async getAll() {
		return this.surahService.getAll()
	}

	@Query(() => SurahModel, { name: 'getSurahById' })
	public async getById(@Args('id') id: string) {
		return this.surahService.getById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'createSurah' })
	public async create(@Args('data') input: CreateSurahInput) {
		return this.surahService.create(input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'updateSurah' })
	public async update(
		@Args('id') id: string,
		@Args('data') input: UpdateSurahInput
	) {
		return this.surahService.update(id, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'deleteSurah' })
	public async delete(@Args('id') id: string) {
		return this.surahService.delete(id)
	}
}
