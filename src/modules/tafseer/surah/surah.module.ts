import { Module } from '@nestjs/common'

import { SurahResolver } from './surah.resolver'
import { SurahService } from './surah.service'

@Module({
	providers: [SurahResolver, SurahService]
})
export class SurahModule {}
