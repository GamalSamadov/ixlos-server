import { Field, ObjectType } from '@nestjs/graphql'

import { AuthorModel } from './author.model'

@ObjectType()
export class AuthorsPaginatedModel {
	@Field(() => [AuthorModel])
	public authors: AuthorModel[]

	@Field(() => Boolean)
	public hasMore: boolean
}
