import { Module } from '@nestjs/common'

import { AccountService } from '../account.service'

import { AuthorResolver } from './author.resolver'
import { AuthorService } from './author.service'

@Module({
	providers: [AuthorResolver, AuthorService, AccountService]
})
export class AuthorModule {}
