import { Field, InputType } from '@nestjs/graphql'
import { registerEnumType } from '@nestjs/graphql'
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

import { SurahRevelationType } from '@/prisma/generated'

registerEnumType(SurahRevelationType, {
	name: 'SurahRevelationType'
})

@InputType()
export class UpdateSurahInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public name?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public arabicName?: string

	@Field(() => Number, { nullable: true })
	@IsNumber()
	@IsOptional()
	public number?: number

	@Field(() => Number, { nullable: true })
	@IsNumber()
	@IsOptional()
	public totalAyahs?: number

	@Field(() => SurahRevelationType, { nullable: true })
	@IsEnum(SurahRevelationType)
	@IsOptional()
	public revelationType?: SurahRevelationType
}
