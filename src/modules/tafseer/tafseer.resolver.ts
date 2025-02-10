import { Resolver } from '@nestjs/graphql'

import { TafseerService } from './tafseer.service'

@Resolver('Tafseer')
export class TafseerResolver {
	public constructor(private readonly tafseerService: TafseerService) {}
}
