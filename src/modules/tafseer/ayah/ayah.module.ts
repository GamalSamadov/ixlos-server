import { Module } from '@nestjs/common'

import { SurahService } from '../surah/surah.service'

import { AyahResolver } from './ayah.resolver'
import { AyahService } from './ayah.service'

@Module({
	providers: [AyahResolver, AyahService, SurahService]
})
export class AyahModule {}
