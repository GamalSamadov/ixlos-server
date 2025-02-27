import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'

import { type Surah, SurahRevelationType } from '@/prisma/generated'

import { AyahModel } from '../../ayah/models/ayah.model'

registerEnumType(SurahRevelationType, {
	name: 'SurahRevelationType'
})

@ObjectType()
export class SurahModel implements Surah {
	@Field(() => ID)
	public id: string

	@Field(() => String)
	public name: string

	@Field(() => String)
	public arabicName: string

	@Field(() => String)
	public uzbekName: string

	@Field(() => String)
	public uzbekNameTranslation: string

	@Field(() => Number)
	public number: number

	@Field(() => Number)
	public totalAyahs: number

	@Field(() => SurahRevelationType)
	public revelationType: SurahRevelationType

	@Field(() => [AyahModel])
	public ayahs: AyahModel[]

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
