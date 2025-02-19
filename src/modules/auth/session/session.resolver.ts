import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { UserAgent } from '@/src/shared/decorators/user-agent.decorator'
import { GqlContext } from '@/src/shared/types/gql-context.types'

import { CreateUserInput } from '../account/inputs/create-user.input'
import { UserModel } from '../account/models/user.model'

import { LoginInput } from './inputs/login.input'
import { SessionModel } from './models/session.model'
import { SessionService } from './session.service'

@Resolver('Session')
export class SessionResolver {
	public constructor(private readonly sessionService: SessionService) {}

	@Auth()
	@Query(() => [SessionModel], { name: 'getSessionsByUser' })
	public async findByUser(@Context() { req }: GqlContext) {
		return this.sessionService.findByUser(req)
	}

	@Auth()
	@Query(() => SessionModel, { name: 'getCurrentSession' })
	public async findCurrent(@Context() { req }: GqlContext) {
		return this.sessionService.findCurrent(req)
	}

	@Mutation(() => UserModel, { name: 'loginUser' })
	public async login(
		@Context() { req }: GqlContext,
		@Args('data') input: LoginInput,
		@UserAgent() userAgent: string
	) {
		return this.sessionService.login(req, input, userAgent)
	}

	@Mutation(() => UserModel, { name: 'registerUser' })
	public async register(
		@Context() { req }: GqlContext,
		@Args('data') input: CreateUserInput,
		@UserAgent() userAgent: string
	) {
		return this.sessionService.register(req, input, userAgent)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'logoutUser' })
	public async logout(@Context() { req }: GqlContext) {
		return this.sessionService.logout(req)
	}

	@Mutation(() => Boolean, { name: 'clearSessionCookie' })
	public async clearSession(@Context() { req }: GqlContext) {
		return this.sessionService.clearSession(req)
	}

	@Auth()
	@Mutation(() => Boolean, { name: 'removeSession' })
	public async remove(
		@Context() { req }: GqlContext,
		@Args('id') id: string
	) {
		return this.sessionService.remove(req, id)
	}
}
