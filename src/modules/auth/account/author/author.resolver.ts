import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from '@/prisma/generated'
import { Auth } from '@/src/shared/decorators/authorization.decorator'
import { PaginationInput } from '@/src/shared/pagination/inputs/pagination.input'

import { AuthorService } from './author.service'
import { CreateAuthorInput } from './inputs/create-author.input'
import { UpdateAuthorInput } from './inputs/update-author.input'
import { AuthorsPaginatedModel } from './models/author-paginated.model'
import { AuthorModel } from './models/author.model'

@Resolver('Author')
export class AuthorResolver {
	public constructor(private readonly authorService: AuthorService) {}

	@Auth([Role.ADMIN])
	@Query(() => AuthorsPaginatedModel, { name: 'getAllAuthors' })
	public async getAll(
		@Args('searchTerm') searchTerm: string,
		@Args('pagination') input: PaginationInput
	) {
		return this.authorService.getAll(searchTerm, input)
	}

	@Auth([Role.ADMIN, Role.AUTHOR])
	@Query(() => AuthorModel, { name: 'getAuthorById' })
	public async findById(@Args('id') id: string) {
		return this.authorService.getById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => AuthorModel, { name: 'createAuthor' })
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
