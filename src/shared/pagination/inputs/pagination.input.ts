import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsOptional } from 'class-validator'

@InputType()
export class PaginationInput {
	@Field(() => Number, { nullable: true })
	@IsNumber()
	@IsOptional()
	take?: number
}
