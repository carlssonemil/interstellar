import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePreferencesStore } from '@/store/stores/preferences'

describe('store/stores/preferences', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('getters', () => {
    it('getLocale', () => {
      const store = usePreferencesStore()
      expect(store.getLocale).toBe('en-US')
    })
  })

  describe('actions', () => {
    it('setLocale', () => {
      const store = usePreferencesStore()
      store.setLocale('en-GB')
      expect(store.getLocale).toBe('en-GB')
    })

    it('setPreferences', () => {
      const store = usePreferencesStore()
      store.setPreferences({ locale: 'en-GB' })
      expect(store.getLocale).toBe('en-GB')
    })
  })
})
