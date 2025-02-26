import { Field, ObjectType } from '@nestjs/graphql'

import { AyahModel } from './ayah.model'

@ObjectType()
export class AyahsPaginatedModel {
	@Field(() => [AyahModel], { nullable: true })
	public ayahs: AyahModel[]

	@Field(() => Boolean, { nullable: true })
	public hasMore: boolean
}
