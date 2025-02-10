import { Module } from '@nestjs/common'

import { TafseerResolver } from './tafseer.resolver'
import { TafseerService } from './tafseer.service'

@Module({
	providers: [TafseerResolver, TafseerService]
})
export class TafseerModule {}
