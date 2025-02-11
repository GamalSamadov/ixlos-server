import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'

import { CreateTafseerAyahInput } from './inputs/create-tafseer-ayah.input'
import { UpdateTafseerAyahInput } from './inputs/update-tafseer-ayah.input'
import { TafseerAyahModel } from './models/tafseer-ayahs.model'
import { TafseerAyahsService } from './tafseer-ayahs.service'

@Resolver('TafseerAyah')
export class TafseerAyahsResolver {
	constructor(private readonly tafseerAyahsService: TafseerAyahsService) {}

	@Query(() => TafseerAyahModel, { name: 'getTafseerAyahById' })
	public async getById(id: string) {
		return this.tafseerAyahsService.getById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'createTafseerAyah' })
	public async create(
		@Args('ayahId') ayahId: string,
		@Args('tafseerId') tafseerId: string,
		@Args('data') input: CreateTafseerAyahInput
	) {
		return this.tafseerAyahsService.create(ayahId, tafseerId, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'updateTafseerAyah' })
	public async update(
		@Args('id') id: string,
		@Args('ayahId') ayahId: string,
		@Args('tafseerId') tafseerId: string,
		@Args('data') input: UpdateTafseerAyahInput
	) {
		return this.tafseerAyahsService.update(id, ayahId, tafseerId, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'deleteTafseerAyah' })
	public async delete(@Args('id') id: string) {
		return this.tafseerAyahsService.delete(id)
	}
}
