import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

import { PrismaService } from '@/src/core/prisma/prisma.service'

@Injectable()
export class GqlAuthGuard implements CanActivate {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly reflector: Reflector
	) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context)

		const request = ctx.getContext().req

		if (typeof request.session.userId === 'undefined') {
			throw new UnauthorizedException("Ruxsat yo'q.")
		}

		const user = await this.prismaService.user.findUnique({
			where: {
				id: request.session.userId
			}
		})

		request.user = user

		const roles = this.reflector.get<string[]>('roles', ctx.getHandler())

		if (!roles) {
			return true
		}

		const hasRole = () => user.rights.some(role => roles.includes(role))

		if (!hasRole()) {
			throw new ForbiddenException("Ruxsatingiz yo'q")
		}

		return true
	}
}
