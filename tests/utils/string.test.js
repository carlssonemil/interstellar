import { describe, it, expect } from 'vitest'
import { capitalize, convertToSlug } from '@/utils/string'

describe('utils/string', () => {
	describe('capitalize', () => {
		it('should capitalize the first letter of a string', () => {
			expect(capitalize('hello')).toBe('Hello')
		})

		it('should not change the case of the other letters', () => {
			expect(capitalize('hELLO')).toBe('HELLO')
		})

		it('should return an empty string if the input is empty, null or undefined', () => {
			expect(capitalize('')).toBe('')
			expect(capitalize(undefined)).toBe('')
			expect(capitalize(null)).toBe('')
		})

		it('should return an empty string if the input is not a string', () => {
			expect(capitalize(123)).toBe('')
		})
	})

	describe('convertToSlug', () => {
		it('should convert a string to a slug', () => {
			expect(convertToSlug('Hello World')).toBe('hello-world')
		})

		it('should return an empty string if the input is empty, null or undefined', () => {
			expect(convertToSlug('')).toBe('')
			expect(convertToSlug(undefined)).toBe('')
			expect(convertToSlug(null)).toBe('')
		})

		it('should return an empty string if the input is not a string', () => {
			expect(convertToSlug(123)).toBe('')
		})

		it('should remove special characters', () => {
			expect(convertToSlug('Hello World!')).toBe('hello-world')
		})

		it('should remove accents', () => {
			expect(convertToSlug('éèàù')).toBe('eeau')
		})

		it('should remove multiple spaces', () => {
			expect(convertToSlug('Hello   World')).toBe('hello-world')
		})

		it('should remove multiple dashes', () => {
			expect(convertToSlug('Hello---World')).toBe('hello-world')
		})

		it('should remove spaces at the beginning and the end of the string', () => {
			expect(convertToSlug('   Hello World   ')).toBe('hello-world')
		})
	})
})
