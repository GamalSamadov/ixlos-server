import { Field, InputType } from '@nestjs/graphql'
import { registerEnumType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'

import { SurahRevelationType } from '@/prisma/generated'

registerEnumType(SurahRevelationType, {
	name: 'SurahRevelationType'
})

@InputType()
export class CreateSurahInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public name: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public uzbekName: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public uzbekNameTranslation: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	public arabicName: string

	@Field(() => Number)
	@IsNumber()
	@IsNotEmpty()
	public number: number

	@Field(() => Number)
	@IsNumber()
	@IsNotEmpty()
	public totalAyahs: number

	@Field(() => SurahRevelationType)
	@IsEnum(SurahRevelationType)
	@IsNotEmpty()
	public revelationType: SurahRevelationType
}
