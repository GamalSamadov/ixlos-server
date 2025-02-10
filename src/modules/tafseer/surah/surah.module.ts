import { Module } from '@nestjs/common';
import { SurahService } from './surah.service';
import { SurahResolver } from './surah.resolver';

@Module({
  providers: [SurahResolver, SurahService],
})
export class SurahModule {}
