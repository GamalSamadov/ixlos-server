import { Field, InputType } from '@nestjs/graphql'
import {
	IsEmail,
	IsOptional,
	IsString,
	Matches,
	MaxLength,
	MinLength
} from 'class-validator'

@InputType()
export class UpdateUserInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	@Matches(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
	public username?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public displayName?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	@IsEmail()
	public email?: string

	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	@MinLength(1, {
		message:
			"Foydalavunchi haqida bio ma'lumot kami bilan 1 belgi bo'lishi kerak"
	})
	@MaxLength(255, {
		message:
			"Foydalavunchi haqida bio ma'lumot ko'pi bilan 255 belgi bo'lishi kerak"
	})
	public bio?: string
}
