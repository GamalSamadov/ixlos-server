import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateAyahInput {
	@Field(() => Number, { nullable: true })
	@IsNumber()
	@IsOptional()
	public number?: number

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public arabicText?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public uzbekText?: string
}
