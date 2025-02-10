import { Test, TestingModule } from '@nestjs/testing'

import { PrismaService } from '@/src/core/prisma/prisma.service'
import { GqlAuthGuard } from '@/src/shared/guards/gql-auth.guard'

import { AuthorResolver } from './author.resolver'
import { AuthorService } from './author.service'
import { CreateAuthorInput } from './inputs/create-author.input'

describe('AuthorResolver', () => {
	let resolver: AuthorResolver
	let authorService: AuthorService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthorResolver,
				{
					provide: AuthorService,
					useValue: {
						me: jest.fn(),
						create: jest.fn()
					}
				},
				{
					provide: GqlAuthGuard,
					useValue: {
						canActivate: jest.fn().mockReturnValue(true)
					}
				},
				{
					provide: PrismaService,
					useValue: {}
				}
			]
		}).compile()

		resolver = module.get<AuthorResolver>(AuthorResolver)
		authorService = module.get<AuthorService>(AuthorService)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})

	describe('create', () => {
		it('should create a new author', async () => {
			const input: CreateAuthorInput = {
				username: 'username',
				email: 'email@example.com',
				password: 'password',
				displayName: 'displayName',
				bio: 'bio',
				country: 'country',
				year: 2020
			}

			jest.spyOn(authorService, 'create').mockResolvedValue(true)

			expect(await resolver.create(input)).toBe(true)
			expect(authorService.create).toHaveBeenCalledWith(input)
		})
	})
})
