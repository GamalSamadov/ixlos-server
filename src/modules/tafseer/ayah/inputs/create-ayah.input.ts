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
	public uzbekTextInLatin: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public uzbekTextInCyrillic: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public qcfText: string
}
