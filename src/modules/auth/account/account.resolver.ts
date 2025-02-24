import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { AccountService } from './account.service'
import { CreateUserInput } from './inputs/create-user.input'
import { UserModel } from './models/user.model'

@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Query(() => String || null, { name: 'getUsernameByUsername' })
	public async getUsernameByUsername(@Args('username') username: string) {
		return this.accountService.getUsernameByUsername(username)
	}

	@Query(() => String || null, { name: 'getEmailByEmail' })
	public async getEmailByEmail(@Args('email') email: string) {
		return this.accountService.getEmailByEmail(email)
	}

	@Auth()
	@Query(() => UserModel, { name: 'getProfile' })
	public async getCurrentProfile(@Authorized('id') id: string) {
		return this.accountService.getById(id)
	}

	@Query(() => UserModel, { name: 'getProfileById' })
	public async getById(@Args('id') id: string) {
		return this.accountService.getById(id)
	}

	@Mutation(() => Boolean, { name: 'createUser' })
	public async createUser(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input)
	}
}
