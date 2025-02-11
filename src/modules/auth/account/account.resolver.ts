import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'

import { AccountService } from './account.service'
import { CreateUserInput } from './inputs/create-user.input'
import { UserModel } from './models/user.model'

@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Auth(Role.ADMIN)
	@Query(() => [UserModel], { name: 'getAllUsers' })
	public async getAll(@Args('pagination') input: PaginationInput) {
		return this.accountService.getAll(input)
	}

	@Auth()
	@Query(() => UserModel, { name: 'getProfile' })
	public async getById(@Authorized('id') id: string) {
		return this.accountService.getById(id)
	}

	@Mutation(() => Boolean, { name: 'createUser' })
	public async createUser(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input)
	}
}
