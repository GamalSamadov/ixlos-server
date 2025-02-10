import { Resolver } from '@nestjs/graphql';
import { AyahService } from './ayah.service';

@Resolver('Ayah')
export class AyahResolver {
  constructor(private readonly ayahService: AyahService) {}
}
