import { Test, TestingModule } from '@nestjs/testing'

import { Role } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { AccountService } from '../account.service'

import { AuthorService } from './author.service'
import { CreateAuthorInput } from './inputs/create-author.input'

describe('AuthorService', () => {
	let service: AuthorService
	let prismaService: PrismaService
	let accountService: AccountService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthorService,
				{
					provide: PrismaService,
					useValue: {
						author: {
							findMany: jest.fn(),
							findUnique: jest.fn(),
							create: jest.fn()
						},
						user: {
							create: jest.fn()
						}
					}
				},
				{
					provide: AccountService,
					useValue: {
						throwIfUserExist: jest.fn(),
						hashPassword: jest.fn()
					}
				}
			]
		}).compile()

		service = module.get<AuthorService>(AuthorService)
		prismaService = module.get<PrismaService>(PrismaService)
		accountService = module.get<AccountService>(AccountService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('getAll', () => {
		it('should return an array of authors', async () => {
			const author = {
				id: '1',
				bio: 'bio',
				country: 'country',
				year: 2020,
				userId: '123',
				createdAt: new Date(),
				updatedAt: new Date()
			}
			const authors = [author]
			jest.spyOn(prismaService.author, 'findMany').mockResolvedValue(
				authors
			)

			expect(await service.getAll()).toBe(authors)
		})
	})

	describe('getById', () => {
		it('should return a single author', async () => {
			const author = {
				id: '1',
				bio: 'bio',
				country: 'country',
				year: 2020,
				userId: '123',
				createdAt: new Date(),
				updatedAt: new Date()
			}
			jest.spyOn(prismaService.author, 'findUnique').mockResolvedValue(
				author
			)

			expect(await service.getById('1')).toBe(author)
		})
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

			const user = {
				id: '1',
				username: 'username',
				email: 'email@example.com',
				password: 'hashedPassword',
				displayName: 'displayName',
				avatar: '',
				rights: [Role.USER, Role.AUTHOR],
				createdAt: new Date(),
				updatedAt: new Date()
			}
			jest.spyOn(accountService, 'throwIfUserExist').mockResolvedValue(
				undefined
			)
			jest.spyOn(accountService, 'hashPassword').mockResolvedValue(
				'hashedPassword'
			)
			jest.spyOn(prismaService.user, 'create').mockResolvedValue(user)
			jest.spyOn(prismaService.author, 'create').mockResolvedValue({
				id: '1',
				bio: 'bio',
				country: 'country',
				year: 2020,
				userId: user.id,
				createdAt: new Date(),
				updatedAt: new Date()
			})

			expect(await service.create(input)).toBe(true)
		})
	})
})
