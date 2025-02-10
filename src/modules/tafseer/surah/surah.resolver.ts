import { Resolver } from '@nestjs/graphql';
import { SurahService } from './surah.service';

@Resolver('Surah')
export class SurahResolver {
  constructor(private readonly surahService: SurahService) {}
}
