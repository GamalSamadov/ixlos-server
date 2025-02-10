import { Module } from '@nestjs/common';
import { TafseerAyahsService } from './tafseer-ayahs.service';
import { TafseerAyahsResolver } from './tafseer-ayahs.resolver';

@Module({
  providers: [TafseerAyahsResolver, TafseerAyahsService],
})
export class TafseerAyahsModule {}
