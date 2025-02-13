import { Prisma } from '@/prisma/generated'

export const getAuthorSearchTermFilter = (
	searchTerm: string
): Prisma.AuthorWhereInput => {
	return {
		OR: [
			{
				user: {
					displayName: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			},
			{
				user: {
					username: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			},
			{
				user: {
					email: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			},
			{
				country: {
					contains: searchTerm,
					mode: 'insensitive'
				}
			}
		]
	}
}
