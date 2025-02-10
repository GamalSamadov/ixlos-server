import { Query, Resolver } from '@nestjs/graphql'

import { SurahModel } from './model/surah.model'
import { SurahService } from './surah.service'

@Resolver('Surah')
export class SurahResolver {
	constructor(private readonly surahService: SurahService) {}

	@Query(() => [SurahModel], { name: 'findAllSurahs' })
	public async getAll() {
		return this.surahService.getAll()
	}

	@Query(() => SurahModel, { name: 'findSurahById' })
	public async getById(id: string) {
		return this.surahService.getById(id)
	}
}
