import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'

import { AuthorService } from './author.service'
import { CreateAuthorInput } from './inputs/create-author.input'
import { UpdateAuthorInput } from './inputs/update-author.input'
import { AuthorModel } from './models/author.model'

@Resolver('Author')
export class AuthorResolver {
	public constructor(private readonly authorService: AuthorService) {}

	@Auth([Role.ADMIN])
	@Query(() => [AuthorModel], { name: 'findAuthors' })
	public async findAll() {
		return this.authorService.getAll()
	}

	@Auth([Role.ADMIN, Role.AUTHOR])
	public async findOne(@Args('id') id: string) {
		return this.authorService.getById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean, { name: 'createAuthor' })
	public async create(@Args('data') input: CreateAuthorInput) {
		return this.authorService.create(input)
	}

	@Auth([Role.ADMIN, Role.AUTHOR])
	@Mutation(() => Boolean, { name: 'updateAuthor' })
	public async update(
		@Args('id') id: string,
		@Args('data') input: UpdateAuthorInput
	) {
		return this.authorService.update(id, input)
	}

	@Auth([Role.ADMIN])
	@Mutation(() => Boolean, { name: 'deleteAuthor' })
	public async delete(@Args('id') id: string) {
		return this.authorService.delete(id)
	}
}
