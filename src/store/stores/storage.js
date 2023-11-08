import { defineStore } from 'pinia'
import { notify } from '@kyvg/vue3-notification'

import { usePreferencesStore } from './preferences'

const token = import.meta.env.MODE === 'production' ? 'interstellar' : 'interstellar-dev'

export const useStorageStore = defineStore('storage', {
	state: () => ({
		preferences: usePreferencesStore().$state,
	}),

	actions: {
		getStorage() {
			const storage = window.localStorage.getItem(token)

			if (storage) {
				const { preferences } = JSON.parse(storage)

				if (preferences) usePreferencesStore().setPreferences(preferences)
			}
		},

		setStorage() {
			window.localStorage.setItem(token, JSON.stringify(this.$state))
		},

		resetStorage() {
			window.localStorage.removeItem(token)

			usePreferencesStore().resetPreferences()

			notify({
				type: 'success',
				title: 'Storage reset',
			})
		},
	},
})
