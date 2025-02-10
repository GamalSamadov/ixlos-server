import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { Ayah } from '@/prisma/generated'

import { SurahModel } from '../../surah/model/surah.model'
import { TafseerAyahModel } from '../../tafseer-ayahs/models/tafseer-ayahs.model'

@ObjectType()
export class AyahModel implements Ayah {
	@Field(() => ID)
	public id: string

	@Field(() => Number)
	public number: number

	@Field(() => String)
	public arabicText: string

	@Field(() => String)
	public uzbekText: string

	@Field(() => SurahModel)
	public surah: SurahModel

	@Field(() => String)
	public surahId: string

	@Field(() => [TafseerAyahModel])
	public tafseerAyahs: TafseerAyahModel[]

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
