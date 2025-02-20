import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { Role, type User } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'
import { FileValidationPipe } from '@/src/shared/pipes/file-validation.pipe'

import { UserModel } from '../account/models/user.model'

import { UpdatePasswordInput } from './inputs/update-password.input'
import { UpdateProfileInfoInput } from './inputs/update-profile-info.input'
import { ProfileService } from './profile.service'

@Resolver('Profile')
export class ProfileResolver {
	public constructor(private readonly profileService: ProfileService) {}

	@Auth()
	@Mutation(() => Boolean, { name: 'changeProfileAvatar' })
	public async changeAvatar(
		@Authorized() user: User,
		@Args('avatar', { type: () => GraphQLUpload }, FileValidationPipe)
		avatar: Upload
	) {
		return this.profileService.changeAvatar(user, avatar)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'removeProfileAvatar' })
	public async removeAvatar(@Authorized() user: User) {
		return this.profileService.removeAvatar(user)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'changeProfileAvatarByUserId' })
	public async changeAvatarByUserId(
		@Args('userId') userId: string,
		@Args('avatar', { type: () => GraphQLUpload }) avatar: Upload
	) {
		return this.profileService.changeAvatarByUserId(userId, avatar)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'removeProfileAvatarByUserId' })
	public async removeAvatarByUserId(@Args('userId') userId: string) {
		return this.profileService.removeAvatarByUserId(userId)
	}

	@Auth()
	@Query(() => String, { name: 'getBioByUserId' })
	public async getBioByUserId(@Args('userId') userId: string) {
		return this.profileService.getBioByUserId(userId)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'updateBioByUserId' })
	public async updateBioByUserId(
		@Args('userId') userId: string,
		@Args('bio') bio: string
	) {
		return this.profileService.updateBioByUserId(userId, bio)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'updateProfileInfoByUserId' })
	public async updateInfoByUserId(
		@Args('userId') userId: string,
		@Args('data') input: UpdateProfileInfoInput
	) {
		return this.profileService.updateInfoByUserId(userId, input)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'updatePasswordByUserId' })
	public async updatePasswordByUserId(
		@Args('userId') userId: string,
		@Args('data') input: UpdatePasswordInput
	) {
		return this.profileService.updatePasswordByUserId(userId, input)
	}

	@Auth()
	@Mutation(() => UserModel, { name: 'deleteUserById' })
	public async deleteUserById(@Args('userId') userId: string) {
		return this.profileService.deleteUserById(userId)
	}
}
