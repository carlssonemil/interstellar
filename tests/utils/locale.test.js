import { describe, it, expect } from 'vitest'
import { getStoredLocale } from '@/utils/locale'

const token = import.meta.env.MODE === 'production' ? 'interstellar' : 'interstellar-dev'

describe('utils/locale', () => {
	describe('getStoredLocale', () => {
		it('should return en-US if localStorage is empty', () => {
			expect(getStoredLocale()).toBe('en-US')
		})

		it('should return en-US if localStorage is not empty but does not contain preferences', () => {
			window.localStorage.setItem(token, JSON.stringify({}))
			expect(getStoredLocale()).toBe('en-US')
		})

		it('should return the locale if localStorage is not empty and contains preferences', () => {
			window.localStorage.setItem(token, JSON.stringify({ preferences: { locale: 'fr-FR' } }))
			expect(getStoredLocale()).toBe('fr-FR')
		})
	})
})
