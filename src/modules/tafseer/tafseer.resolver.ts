import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'

import { CreateTafseerInput } from './inputs/create-tafseer.input'
import { UpdateTafseerInput } from './inputs/update-tafseer.input'
import { TafseerModel } from './model/tafseer.model'
import { TafseerService } from './tafseer.service'

@Resolver('Tafseer')
export class TafseerResolver {
	public constructor(private readonly tafseerService: TafseerService) {}

	@Query(() => [TafseerModel], { name: 'findAllTafseers' })
	public async findAll() {
		return this.tafseerService.getAll()
	}

	@Query(() => TafseerModel, { name: 'findTafseerById' })
	public async findById(id: string) {
		return this.tafseerService.getById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'createTafseer' })
	public async create(@Args('data') input: CreateTafseerInput) {
		return this.tafseerService.create(input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'updateTafseer' })
	public async update(
		@Args('id') id: string,
		@Args('data') input: UpdateTafseerInput
	) {
		return this.tafseerService.update(id, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'deleteTafseer' })
	public async delete(@Args('id') id: string) {
		return this.tafseerService.delete(id)
	}
}
