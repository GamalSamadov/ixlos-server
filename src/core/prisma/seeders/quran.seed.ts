import { BadRequestException, Logger } from '@nestjs/common'

import { Prisma, PrismaClient } from '../../../../prisma/generated'

import { QURAN_TEXT } from './data/ayahs.data'
import { SURAHS } from './data/surahs.data'
import { arabicToUzbekCyrillic } from './utils/arabic-to-cyrillic'
import { arabicToLatin } from './utils/arabic-to-latin'
import {
	getPageNumberBySurahNumber,
	getPageNumberOrZero
} from './utils/get-page-number'
import { removeArabicDiacritics } from './utils/remove-diacritics'

const prisma = new PrismaClient({
	transactionOptions: {
		maxWait: 5000,
		timeout: 10000,
		isolationLevel: Prisma.TransactionIsolationLevel.Serializable
	}
})

async function main() {
	try {
		Logger.log('Seeding database...')

		Logger.log('Deleting old all surahs...')
		await prisma.$transaction([prisma.surah.deleteMany()])
		Logger.log('Old surahs deleted.')

		SURAHS.forEach(async surah => {
			try {
				await prisma.surah.create({
					data: {
						number: surah.number,
						name: surah.name,
						totalAyahs: surah.totalAyahs,
						uzbekName: surah.uzbekName,
						uzbekNameTranslation: surah.uzbekNameTranslation,
						revelationType: surah.revelationType,
						arabicName: surah.arabicName,
						qfcName: surah.qfcName,
						pageNumber: getPageNumberBySurahNumber(surah.number)
					}
				})
			} catch (error) {
				Logger.error(error)
				throw new BadRequestException(
					`Error while creating surah ${surah.name}.`
				)
			}
		})

		QURAN_TEXT.forEach(async ayah => {
			try {
				const surah = await prisma.surah.findFirst({
					where: {
						number: ayah.surah_number
					}
				})
				const createdAyah = await prisma.ayah.create({
					data: {
						number: ayah.verse_number,
						arabicText: removeArabicDiacritics(ayah.content),
						uzbekTextInLatin: arabicToLatin(ayah.content),
						uzbekTextInCyrillic: arabicToUzbekCyrillic(
							ayah.content
						),
						qcfText: ayah.qcfData,

						surah: {
							connect: {
								id: surah.id
							}
						}
					}
				})

				await prisma.ayah.update({
					where: {
						id: createdAyah.id
					},
					data: {
						pageNumber: getPageNumberOrZero(
							surah.number,
							createdAyah.number
						)
					}
				})

				Logger.log(
					`Surah: ${surah.number} / Ayah ${createdAyah.number} created.`
				)
			} catch (err) {
				Logger.error(err)
				throw new BadRequestException('Error while creating ayah.')
			}
		})

		Logger.log('Surahs created.')
	} catch (err) {
		Logger.error(err)
		throw new BadRequestException('Error while seeding database.')
	} finally {
		Logger.log('Seeding completed.')
		await prisma.$disconnect()
		Logger.log('Database was disconnected.')
	}
}

main()
