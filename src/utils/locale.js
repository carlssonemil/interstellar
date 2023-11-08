const getStoredLocale = () => {
	const token = import.meta.env.MODE === 'production' ? 'interstellar' : 'interstellar-dev'
	const storage = window.localStorage.getItem(token)

	if (storage) {
		const { preferences } = JSON.parse(storage)
		if (preferences) return preferences.locale
	}

	return 'en-US'
}

export { getStoredLocale }
