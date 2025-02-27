function normalizeArabicCyr(str) {
	return (
		str
			// Replace alif-wasla (ٱ) with a plain alif (ا).
			.replace(/ٱ/g, 'ا')
			// Remove superscript alif (ٰ), or map to an extra "а" if you like:
			.replace(/ٰ/g, '')
			// Remove or ignore extra small diacritics like ۡ, ۣ, ۪, ۜ
			.replace(/[ۣ۪ۡۜ]/g, '')
			.replace(/ٰ/g, 'ا')
			.replace(/ٗ/g, '')
			.replace(/\u0653/g, '')
			.replace(/ٞ/g, '')
			.replace(/ۗ /g, '')
			.replace(/ۚ /g, '')
			.replace(/ۢ /g, '')
			.replace(/ۖ /g, '')
			.replace(/ۥ /g, ' ')
			.replace(/ـٔ/g, '')
			.replace(/ـ/g, '')
	)
}

export function arabicToUzbekCyrillic(input) {
	// STEP A: Normalize out special characters
	const normalized = normalizeArabicCyr(input)

	// STEP B: Define the main letter-to-Cyrillic mapping.
	//         Adjust these as needed for your style or dialect.
	const lettersMap = {
		// Alif forms
		ا: 'а',
		أ: 'а',
		إ: 'и',
		آ: 'аа',
		// Consonants
		ب: 'б',
		ت: 'т',
		ث: 'с',
		ج: 'ж',
		ح: 'ҳ',
		خ: 'х',
		د: 'д',
		ذ: 'з',
		ر: 'р',
		ز: 'з',
		س: 'с',
		ش: 'ш',
		ص: 'с',
		ض: 'д',
		ط: 'т',
		ظ: 'з',
		ع: 'а', // or sometimes ‘ъ’, but in your examples it looks like “а”
		غ: 'ғ',
		ف: 'ф',
		ق: 'қ',
		ك: 'к',
		ل: 'л',
		م: 'м',
		ن: 'н',
		// “ه” and “ح” both go to ‘ҳ’ in your note:
		ه: 'ҳ',
		// For “و”, you might transliterate as “у” or “в” depending on context.
		// But in many Uzbek transliterations, “و” as a consonant is “в,”
		// as a vowel is “у.” We'll do “у” here for simplicity:
		و: 'в',
		// For “ي”, often “й” if it’s a consonant, or “и” if it’s a vowel.
		// We'll default to “й” for simplicity:
		ي: 'й',
		ى: 'а', // alif maqṣūra
		// Tied ta’ marbūṭa (ة). You might prefer “а” or “ҳ”; we’ll do “ҳ” here:
		ة: 'т',
		// Hamzas
		ء: 'ъ', // or you may choose to omit
		ئ: 'ъ', // hamza-on-ya
		ؤ: 'ъ' // hamza-on-wa
	}

	// STEP C: Diacritics mapping
	//         Typically: fatḥa -> а, ḍamma -> у, kasra -> и, etc.
	const diacriticsMap = {
		// tanwīn (an, un, in)
		'\u064B': 'ан', // fatḥatan
		'\u064C': 'ун', // ḍammatan
		'\u064D': 'ин', // kasratan
		// simple vowels
		'\u064E': 'а', // fatḥa
		'\u064F': 'у', // ḍamma
		'\u0650': 'и', // kasra
		'\u0651': '', // shadda -> we handle doubling separately
		'\u0652': '', // sukūn -> no vowel
		// Some smaller/legacy diacritics:
		'\u0618': 'а',
		'\u0619': 'у',
		'\u061A': 'и'
	}

	// STEP D: Build the output
	let output = ''
	let lastConsonantIndex = -1 // track index in output for doubling shadda

	for (let i = 0; i < normalized.length; i++) {
		const char = normalized[i]

		// (1) If it’s a diacritic:
		if (diacriticsMap[char] !== undefined) {
			const vowel = diacriticsMap[char]
			if (char === '\u0651') {
				// Shadda: double the previous letter if possible
				if (
					lastConsonantIndex >= 0 &&
					lastConsonantIndex < output.length
				) {
					const prevLetter = output[output.length - 1]
					output += prevLetter // double it
				}
				continue
			} else {
				// normal short vowel
				output += vowel
				continue
			}
		}

		// (2) If it’s an Arabic letter in our map:
		if (lettersMap[char] !== undefined) {
			const cyrLetter = lettersMap[char]
			output += cyrLetter
			lastConsonantIndex = output.length - cyrLetter.length
		}
		// (3) Otherwise (space, punctuation, etc.), pass it as is
		else {
			output += char
			if (/\s/.test(char)) {
				lastConsonantIndex = -1
			}
		}
	}

	// STEP E: (Optional) Tidy up
	return output
		.normalize('NFC')
		.replace(/\s+/g, ' ')
		.trim()
		.replace(/ٖ/g, 'i')
}
