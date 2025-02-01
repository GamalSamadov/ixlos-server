import { applyDecorators, UseGuards } from '@nestjs/common'

import { Role } from '@/prisma/generated'

import { GqlAuthGuard } from '../guards/gql-auth.guard'

import { Roles } from './roles.decorator'

export const Auth = (roles: Role | Role[] = [Role.USER]) => {
	if (!Array.isArray(roles)) {
		roles = [roles]
	}

	return applyDecorators(Roles(...roles), UseGuards(GqlAuthGuard))
}
