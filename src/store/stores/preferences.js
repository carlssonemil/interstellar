import { defineStore } from 'pinia'

const defaultPreferences = {
  locale: 'en-US',
}

export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    ...defaultPreferences,
  }),

  getters: {
    getLocale: (state) => state.locale,
  },

  actions: {
    setLocale(locale) {
      this.locale = locale
    },

    setPreferences(preferences) {
      this.locale = preferences.locale
    },

    resetPreferences() {
      this.$state = { ...defaultPreferences }
    },
  },
})
