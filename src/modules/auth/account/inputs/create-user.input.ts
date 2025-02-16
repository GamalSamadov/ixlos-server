import { Field, InputType } from '@nestjs/graphql'
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength
} from 'class-validator'

import { USERNAME_PATTERN } from '@/src/shared/libs/constans/patterns.constants'

@InputType()
export class CreateUserInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Username required!' })
	@Matches(USERNAME_PATTERN)
	@MinLength(3, {
		message: 'Username must be at least 3 characters'
	})
	public username: string

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
	@IsNotEmpty({ message: 'Password required!' })
	@MinLength(8, {
		message: 'Password must be at least 8 characters'
	})
	public password: string

	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	@MinLength(10, {
		message: 'Bio must be at least 10 characters'
	})
	@MaxLength(255, {
		message: 'Bio must be at most 255 characters'
	})
	public bio?: string
}
