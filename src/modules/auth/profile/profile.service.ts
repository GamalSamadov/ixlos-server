import { Injectable } from '@nestjs/common'
import { hash, verify } from 'argon2'
import * as Upload from 'graphql-upload/Upload.js'
import * as sharp from 'sharp'

import { type User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { StorageService } from '../../libs/storage/storage.service'

import { UpdatePasswordInput } from './inputs/update-password.input'
import { UpdateProfileInfoInput } from './inputs/update-profile-info.input'

@Injectable()
export class ProfileService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly storageService: StorageService
	) {}

	public async changeAvatar(user: User, file: Upload) {
		if (user.avatar) {
			await this.storageService.remove(user.avatar)
		}

		const chunks: Buffer[] = []

		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk)
		}

		const buffer = Buffer.concat(chunks)

		const fileName = `users/profile-picture/${user.username}.webp`

		if (file.filename && file.filename.endsWith('.gif')) {
			const processedBuffer = await sharp(buffer, {
				animated: true
			})
				.resize(512, 512)
				.webp()
				.toBuffer()

			await this.storageService.upload(
				processedBuffer,
				fileName,
				'image/webp'
			)
		} else {
			const processedBuffer = await sharp(buffer)
				.resize(512, 512)
				.webp()
				.toBuffer()

			await this.storageService.upload(
				processedBuffer,
				fileName,
				'image/webp'
			)
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: `/${fileName}`
			}
		})

		return true
	}

	public async removeAvatar(user: User) {
		if (!user.avatar) {
			return
		}

		await this.storageService.remove(user.avatar)

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: null
			}
		})

		return true
	}

	public async changeAvatarByUserId(userId: string, file: Upload) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (user.avatar) {
			await this.storageService.remove(user.avatar)
		}

		const chunks: Buffer[] = []

		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk)
		}

		const buffer = Buffer.concat(chunks)

		const fileName = `users/profile-picture/${user.username}.webp`

		if (file.filename && file.filename.endsWith('.gif')) {
			const processedBuffer = await sharp(buffer, {
				animated: true
			})
				.resize(512, 512)
				.webp()
				.toBuffer()

			await this.storageService.upload(
				processedBuffer,
				fileName,
				'image/webp'
			)
		} else {
			const processedBuffer = await sharp(buffer)
				.resize(512, 512)
				.webp()
				.toBuffer()

			await this.storageService.upload(
				processedBuffer,
				fileName,
				'image/webp'
			)
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: `/${fileName}`
			}
		})

		return true
	}

	public async removeAvatarByUserId(userId: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user.avatar) {
			return
		}

		await this.storageService.remove(user.avatar.slice(1))

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: null
			}
		})

		return true
	}

	public async updateInfoByUserId(
		userId: string,
		input: UpdateProfileInfoInput
	) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		const { username, email, displayName } = input

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				username,
				email,
				displayName
			}
		})

		return true
	}

	public async getBioByUserId(userId: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		return user.bio
	}

	public async updateBioByUserId(userId: string, bio: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				bio
			}
		})

		return true
	}

	public async updatePasswordByUserId(
		userId: string,
		input: UpdatePasswordInput
	) {
		const { oldPassword, newPassword, newPasswordRepeat } = input
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		const isPasswordValid = await verify(user.password, oldPassword)

		if (!isPasswordValid) {
			throw new Error("Eski parol noto'g'ri.")
		}

		const isMatch = await verify(user.password, newPassword)

		if (isMatch) {
			throw new Error(
				"Yangi parol avvalgi parol bilan bir xil bo'lishi mumkin emas."
			)
		}

		const isNewPasswordsNotSame = newPassword !== newPasswordRepeat

		if (isNewPasswordsNotSame) {
			throw new Error(
				"Yangi parolning ikala nusxasi bir xil bo'lishi kerak."
			)
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				password: await hash(newPassword)
			}
		})

		return true
	}

	public async deleteUserById(userId: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi')
		}

		await this.removeAvatarByUserId(userId)

		const deletedUser = await this.prismaService.user.delete({
			where: {
				id: userId
			}
		})

		return deletedUser
	}

	// TODO: implement deactivate
	public async deactivateUserById(userId: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId,
				isActive: true
			}
		})

		if (!user) {
			throw new Error('Foydalanuvchi topilmadi.')
		}

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				isActive: false
			}
		})

		return true
	}
}
