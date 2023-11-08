import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStorageStore } from '@/store/stores/storage'

const token = import.meta.env.MODE === 'production' ? 'interstellar' : 'interstellar-dev'

describe('store/stores/storage', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	describe('actions', () => {
		it('getStorage', () => {
			const store = useStorageStore()
			store.getStorage()
			expect(store.preferences.locale).toBe('en-US')
		})

		it('setStorage', () => {
			const store = useStorageStore()
			store.setStorage()
			expect(window.localStorage.getItem(token)).toBe(JSON.stringify(store.$state))
		})

		it('resetStorage', () => {
			const store = useStorageStore()
			store.resetStorage()
			expect(window.localStorage.getItem(token)).toBe(null)
			expect(store.preferences.locale).toBe('en-US')
		})
	})
})
