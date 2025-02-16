import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

import { CreateUserInput } from '@/src/modules/auth/account/inputs/create-user.input'

@InputType()
export class CreateAuthorInput extends CreateUserInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public country?: string
}
