import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { TafseerLanguage } from '@/prisma/generated'

registerEnumType(TafseerLanguage, {
	name: 'TafseerLanguage'
})

@InputType()
export class CreateTafseerInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public name: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public arabicName: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public text: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public filePath: string

	@Field(() => TafseerLanguage, { nullable: true })
	@IsEnum(TafseerLanguage)
	@IsOptional()
	public language: TafseerLanguage
}
