import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

import { UpdateUserInput } from '@/src/modules/auth/account/inputs/update-user.input'

@InputType()
export class UpdateAuthorInput extends UpdateUserInput {
	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	public country?: string
}
