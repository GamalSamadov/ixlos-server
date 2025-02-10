import { Field, ID, ObjectType } from '@nestjs/graphql'

import { TafseerAyah } from '@/prisma/generated'

import { AyahModel } from '../../ayah/models/ayah.model'

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

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
