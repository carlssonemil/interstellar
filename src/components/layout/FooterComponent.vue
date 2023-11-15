<template>
  <footer class="container">
    <div>
      <i18n-t keypath="general.made_by" scope="global">
        <a href="https://emilcarlsson.se/">Emil Carlsson</a>
      </i18n-t>
      <i18n-t v-if="translatedBy" keypath="general.translated_by" scope="global">
        <a :href="translatedBy.url">{{ translatedBy.username }}</a>
      </i18n-t>
    </div>

    <div>
      <router-link to="/about">{{ $t('general.about') }}</router-link>
      <router-link to="/requirements">{{ $tc('general.requirement') }}</router-link>
      <a href="https://github.com/carlssonemil/interstellar">GitHub</a>
      <LocaleSwitcherComponent />
    </div>
  </footer>
</template>

<script>
import { translatedBy } from '@/i18n/locales.js'
import LocaleSwitcherComponent from '@/components/LocaleSwitcherComponent.vue'

export default {
  components: {
    LocaleSwitcherComponent,
  },

  computed: {
    translatedBy() {
      const currentLocale = this.$root.$i18n.locale
      const translator = translatedBy[currentLocale]

      if (!translator) return null

      return {
        url: translator.github,
        username: translator.name || translator.github.split('/').pop(),
      }
    },
  },
}
</script>
