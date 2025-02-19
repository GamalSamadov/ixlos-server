import { Module } from '@nestjs/common'

import { StorageService } from '../../libs/storage/storage.service'

import { ProfileResolver } from './profile.resolver'
import { ProfileService } from './profile.service'

@Module({
	providers: [ProfileResolver, ProfileService, StorageService]
})
export class ProfileModule {}
