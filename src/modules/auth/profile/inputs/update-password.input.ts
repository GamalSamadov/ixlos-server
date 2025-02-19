import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

@InputType()
export class UpdatePasswordInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Email required!' })
	@MinLength(8, { message: 'Password must be at least 8 characters long!' })
	public oldPassword: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Email required!' })
	@MinLength(8, { message: 'Password must be at least 8 characters long!' })
	public newPassword: string

	@Field(() => String)
	@IsString()
	@IsNotEmpty({ message: 'Email required!' })
	@MinLength(8, { message: 'Password must be at least 8 characters long!' })
	public newPasswordRepeat: string
}
