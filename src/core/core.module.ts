import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { AccountModule } from '../modules/auth/account/account.module'
import { AuthorModule } from '../modules/auth/account/author/author.module'
import { SessionModule } from '../modules/auth/session/session.module'
import { AyahModule } from '../modules/tafseer/ayah/ayah.module'
import { SurahModule } from '../modules/tafseer/surah/surah.module'
import { TafseerAyahsModule } from '../modules/tafseer/tafseer-ayahs/tafseer-ayahs.module'
import { TafseerModule } from '../modules/tafseer/tafseer.module'

import { getGraphQLConfig } from './config/graphql.config'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'

@Module({
	imports: [
		ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true }),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		PrismaModule,
		RedisModule,

		AccountModule,
		SessionModule,
		AuthorModule,

		TafseerModule,
		SurahModule,
		AyahModule,
		TafseerAyahsModule
	]
})
export class CoreModule {}
