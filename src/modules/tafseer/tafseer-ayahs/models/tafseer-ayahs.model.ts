import { Field, ID, ObjectType } from '@nestjs/graphql'

import { TafseerAyah } from '@/prisma/generated'

import { AyahModel } from '../../ayah/models/ayah.model'
import { TafseerModel } from '../../model/tafseer.model'

@ObjectType()
export class TafseerAyahModel implements TafseerAyah {
	@Field(() => ID)
	public id: string

	@Field(() => String)
	public text: string

	@Field(() => AyahModel)
	public ayah: AyahModel

	@Field(() => String)
	public ayahId: string

	@Field(() => TafseerModel)
	public tafseer: TafseerModel

	@Field(() => String)
	public tafseerId: string

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
