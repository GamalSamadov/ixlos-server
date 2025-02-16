import { Field, ID, ObjectType } from '@nestjs/graphql'

import { type Author } from '@/prisma/generated'

import { UserModel } from '../../models/user.model'

@ObjectType()
export class AuthorModel implements Author {
	@Field(() => ID)
	public id: string

	@Field(() => String, { nullable: true })
	public country: string

	@Field(() => UserModel)
	public user: UserModel

	@Field(() => String)
	public userId: string

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
