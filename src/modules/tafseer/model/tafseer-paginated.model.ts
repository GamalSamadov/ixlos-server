import { Field, ObjectType } from '@nestjs/graphql'

import { TafseerModel } from './tafseer.model'

@ObjectType()
export class TafseersPaginatedModel {
	@Field(() => [TafseerModel])
	public tafseers: TafseerModel[]

	@Field(() => Boolean)
	public hasMore: boolean
}
