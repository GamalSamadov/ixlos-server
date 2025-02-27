function normalizeArabic(str) {
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

export function arabicToLatin(input) {
	const normalized = normalizeArabic(input)
	const lettersMap = {
		ا: 'a',
		أ: 'a',
		إ: 'i',
		آ: 'aa',
		ب: 'b',
		ت: 't',
		ث: 's',
		ج: 'j',
		ح: 'h',
		خ: 'x',
		د: 'd',
		ذ: 'z',
		ر: 'r',
		ز: 'z',
		س: 's',
		ش: 'sh',
		ص: 's',
		ض: 'd',
		ط: 't',
		ظ: 'z',
		ع: 'a',
		غ: "g'",
		ف: 'f',
		ق: 'q',
		ك: 'k',
		ل: 'l',
		م: 'm',
		ن: 'n',
		ه: 'h',
		و: 'v',
		ي: 'y',
		ى: 'a',
		ة: 't',
		ء: '’',
		ئ: '’',
		ؤ: '’'
	}

	const diacriticsMap = {
		'\u064B': 'an', // tanween fatḥa
		'\u064C': 'un', // tanween ḍamma
		'\u064D': 'in', // tanween kasra
		'\u064E': 'a', // fatḥa
		'\u064F': 'u', // ḍamma
		'\u0650': 'i', // kasra
		'\u0651': '', // shadda (handle doubling below)
		'\u0652': '', // sukūn
		// Sometimes in Quranic text:
		'\u0618': 'a',
		'\u0619': 'u',
		'\u061A': 'i'
	}

	// --- STEP C: Iterate and build the transliteration ---
	let output = ''
	let lastConsonantIndex = -1 // track where last consonant was appended

	for (let i = 0; i < normalized.length; i++) {
		const char = normalized[i]

		// (1) If it's a diacritic in diacriticsMap:
		if (char in diacriticsMap) {
			const vowel = diacriticsMap[char]

			// If it’s a shadda, we can double the previous letter:
			if (char === '\u0651') {
				// Double the *immediately preceding* Latin letter, if we have one:
				if (
					lastConsonantIndex >= 0 &&
					lastConsonantIndex < output.length
				) {
					const lastLetter = output[output.length - 1]
					// Double it only if we haven't doubled it already:
					output += lastLetter
				}
				continue
			}

			// Otherwise, add the vowel from the diacritic
			output += vowel
			continue
		}

		// (2) If it's an Arabic letter in lettersMap:
		if (char in lettersMap) {
			const mapped = lettersMap[char]
			output += mapped
			lastConsonantIndex = output.length - mapped.length
		}
		// (3) Else (punctuation, space, etc.), just add as-is:
		else {
			output += char
			// If it's whitespace, reset lastConsonantIndex
			if (/\s/.test(char)) {
				lastConsonantIndex = -1
			}
		}
	}

	// --- STEP D: Final clean-up (optional) ---
	return output
		.normalize('NFC')
		.replace(/\s+/g, ' ') // collapse multiple spaces
		.trim()
		.replace(/ٖ/g, 'i')
}
