import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

@InputType()
export class LoginInput {
	@Field()
	@IsString({ message: "Xato ma'lumot" })
	@IsNotEmpty({ message: "Bo'sh bo'lish imkonsiz" })
	public login: string

	@Field()
	@IsString({ message: "Xato ma'lumot" })
	@IsNotEmpty({ message: "Bo'sh bo'lish imkonsiz" })
	@MinLength(8, { message: "Parol kamida 8 belgidan iborat bo'lishi kerak" })
	public password: string
}
