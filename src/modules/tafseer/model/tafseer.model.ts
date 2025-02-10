import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'

import { type Tafseer, TafseerLanguage } from '@/prisma/generated'

import { AuthorModel } from '../../auth/account/author/models/author.model'
import { SurahModel } from '../surah/model/surah.model'

registerEnumType(TafseerLanguage, {
	name: 'TafseerLanguage'
})

@ObjectType()
export class TafseerModel implements Tafseer {
	@Field(() => ID)
	public id: string

	@Field(() => String)
	public name: string

	@Field(() => String)
	public arabicName: string

	@Field(() => String)
	public text: string

	@Field(() => String)
	public filePath: string

	@Field(() => TafseerLanguage)
	public language: TafseerLanguage

	@Field(() => AuthorModel)
	public author: AuthorModel

	@Field(() => [SurahModel])
	public surahs: SurahModel[]

	@Field(() => String)
	public authorId: string

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
