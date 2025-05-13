import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsOptional } from 'class-validator'

@InputType()
export class GetPageAyahsInput {
	@Field(() => Number, { nullable: true })
	@IsNumber()
	@IsOptional()
	public pageNumber?: number
}
