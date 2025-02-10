import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { IsEnum, IsOptional, IsString } from 'class-validator'

import { TafseerLanguage } from '@/prisma/generated'

registerEnumType(TafseerLanguage, {
	name: 'TafseerLanguage'
})

@InputType()
export class UpdateTafseerInput {
	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public name?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public arabicName?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public text?: string

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public filePath?: string

	@Field(() => TafseerLanguage, { nullable: true })
	@IsEnum(TafseerLanguage)
	@IsOptional()
	public language?: TafseerLanguage

	@Field(() => String, { nullable: true })
	@IsString()
	@IsOptional()
	public authorId?: string
}
