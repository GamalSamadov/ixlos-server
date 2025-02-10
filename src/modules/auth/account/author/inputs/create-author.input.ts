import { Field, InputType } from '@nestjs/graphql'
import {
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'

import { CreateUserInput } from '@/src/modules/auth/account/inputs/create-user.input'

@InputType()
export class CreateAuthorInput extends CreateUserInput {
	@Field()
	@IsString()
	@IsNotEmpty({ message: "Foydalavunchi haqida bio ma'lumotini kiriting!" })
	@MinLength(1, {
		message:
			"Foydalavunchi haqida bio ma'lumot kamida 1 belgi bo'lishi kerak"
	})
	@MaxLength(255, {
		message:
			"Foydalavunchi haqida bio ma'lumot ko'pi bilan 255 belgi bo'lishi kerak"
	})
	public bio: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public country?: string
}
