import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateTafseerAyahInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public text?: string
}
