const capitalize = (str) => {
	if (typeof str !== 'string') return ''
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const convertToSlug = (str) => {
	if (typeof str !== 'string') return ''
	return str
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.normalize('NFD')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
}

export { capitalize, convertToSlug }
