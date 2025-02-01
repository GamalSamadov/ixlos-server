import { SetMetadata } from '@nestjs/common'

import type { Role } from '@/prisma/generated'

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles)
