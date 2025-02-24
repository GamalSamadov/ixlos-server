import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'

import { Role, type User } from '@/prisma/generated'

registerEnumType(Role, {
	name: 'Role'
})

@ObjectType()
export class UserModel implements User {
	@Field(() => ID)
	public id: string

	@Field(() => String)
	public email: string

	@Field(() => String)
	public password: string

	@Field(() => String)
	public username: string

	@Field(() => String)
	public displayName: string

	@Field(() => String, { nullable: true })
	public avatar: string | null

	@Field(() => String, { nullable: true })
	public bio: string | null

	@Field(() => Boolean)
	public isActive: boolean

	@Field(() => [Role])
	public rights: Role[]

	@Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}
