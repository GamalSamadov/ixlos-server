import 'express-session'

import { type Role } from '@/prisma/generated'

import type { SessionMetadata } from './session-metadata.types'

declare module 'express-session' {
	interface SessionData {
		userId?: string
		role?: Role[]
		createdAt?: Date
		metadata: SessionMetadata
	}
}
