import { Resolver } from '@nestjs/graphql';
import { TafseerAyahsService } from './tafseer-ayahs.service';

@Resolver('TafseerAyah')
export class TafseerAyahsResolver {
  constructor(private readonly tafseerAyahsService: TafseerAyahsService) {}
}
