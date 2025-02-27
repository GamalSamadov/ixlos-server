export function removeArabicDiacritics(text) {
	let result = text.replace(/\u0640/g, '')

	result = result
		.replace(
			/[\u0617-\u061A\u064B-\u0652\u0653-\u0655\u0670\u06D6-\u06ED]/g,
			''
		)
		.replace(/ٱ/g, 'ا')
		.replace(/ّ/g, '')
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
		.replace(/[\u064B-\u065F]/g, '')

	return result
}
