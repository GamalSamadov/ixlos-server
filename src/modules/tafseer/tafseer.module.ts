import { Module } from '@nestjs/common'

import { AyahModule } from './ayah/ayah.module'
import { SurahModule } from './surah/surah.module'
import { TafseerAyahsModule } from './tafseer-ayahs/tafseer-ayahs.module'
import { TafseerResolver } from './tafseer.resolver'
import { TafseerService } from './tafseer.service'

@Module({
	providers: [TafseerResolver, TafseerService],
	imports: [SurahModule, AyahModule, TafseerAyahsModule]
})
export class TafseerModule {}
