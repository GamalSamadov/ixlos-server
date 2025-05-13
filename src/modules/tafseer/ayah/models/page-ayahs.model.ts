import { Field, ObjectType } from '@nestjs/graphql'

import { SurahModel } from '../../surah/model/surah.model'

import { AyahModel } from './ayah.model'

@ObjectType()
export class PageAyahsModel {
	@Field(() => SurahModel, { nullable: true })
	public surah: SurahModel

	@Field(() => [AyahModel], { nullable: true })
	public ayahs: AyahModel[]
}
