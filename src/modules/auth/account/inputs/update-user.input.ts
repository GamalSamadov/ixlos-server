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

	@Field(() => String, { nullable: true })
	@IsString()
	@MaxLength(255, {
		message: "Bio juda ham uzun ekan. Ko'pi bilan 255 belgi bo'lishi shart."
	})
	@MinLength(1, {
		message: "Bio juda ham kalta ekan. Kami bilan 1 belgi bo'lishi shart."
	})
	@IsOptional()
	public bio?: string
}
