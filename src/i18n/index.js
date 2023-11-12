import { createI18n } from 'vue-i18n'
import { getStoredLocale } from '../utils/utils'
import locales from './locales.js'

const locale = getStoredLocale()
const DEFAULT_LOCALE = 'en-US'

const i18n = createI18n({
  locale: locale || DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: Object.assign(locales),
})

export { DEFAULT_LOCALE, locales, i18n }
