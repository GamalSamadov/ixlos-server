import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateTafseerAyahInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public text: string
}
