import { Field, ObjectType } from '@nestjs/graphql'

import { SurahModel } from './surah.model'

@ObjectType()
export class SurahsPaginatedModel {
	@Field(() => [SurahModel])
	public surahs: SurahModel[]

	@Field(() => Boolean)
	public hasMore: boolean
}
