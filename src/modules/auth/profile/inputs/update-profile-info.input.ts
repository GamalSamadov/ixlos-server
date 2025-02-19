import { Field, InputType } from '@nestjs/graphql'
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	MinLength
} from 'class-validator'

import { USERNAME_PATTERN } from '@/src/shared/libs/constans/patterns.constants'

@InputType()
export class UpdateProfileInfoInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public displayName?: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Email required!' })
	@IsEmail()
	public email: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Username required!' })
	@Matches(USERNAME_PATTERN)
	@MinLength(3, {
		message: 'Username must be at least 3 characters'
	})
	public username: string
}
