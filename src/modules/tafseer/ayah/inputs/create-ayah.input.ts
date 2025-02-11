import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class CreateAyahInput {
	@Field(() => Number)
	@IsNumber()
	@IsNotEmpty()
	public number: number

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public arabicText: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public uzbekText: string
}
