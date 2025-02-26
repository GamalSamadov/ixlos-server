import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'

import { AyahService } from './ayah.service'
import { CreateAyahInput } from './inputs/create-ayah.input'
import { UpdateAyahInput } from './inputs/update-ayah.input'
import { AyahModel } from './models/ayah.model'
import { AyahsPaginatedModel } from './models/ayahs-paginated.model'

@Resolver('Ayah')
export class AyahResolver {
	constructor(private readonly ayahService: AyahService) {}

	@Query(() => [AyahModel], { name: 'getAllAyahs' })
	public async getAll(
		@Args('pagination') pagination: PaginationInput,
		@Args('surahId') surahId: string
	) {
		return this.ayahService.getAll(surahId, pagination)
	}

	@Query(() => AyahModel, { name: 'getAyahById' })
	public async getById(@Args('id') id: string) {
		return this.ayahService.getById(id)
	}

	@Query(() => AyahsPaginatedModel, { name: 'searchAyahByText' })
	public async searchByText(
		@Args('searchTerm') searchTerm: string,
		@Args('pagination') pagination: PaginationInput
	) {
		return this.ayahService.searchByText(searchTerm, pagination)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'createAyah' })
	public async createAyah(
		@Args('surahId') surahId: string,
		@Args('data') input: CreateAyahInput
	) {
		return this.ayahService.create(surahId, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'updateAyah' })
	public async updateAyah(
		@Args('id') id: string,
		@Args('surahId') surahId: string,
		@Args('data') input: UpdateAyahInput
	) {
		return this.ayahService.update(id, surahId, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'deleteAyah' })
	public async deleteAyah(@Args('id') id: string) {
		return this.ayahService.delete(id)
	}
}
