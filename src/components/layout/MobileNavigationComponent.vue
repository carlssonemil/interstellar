<template>
  <transition name="fade">
    <nav class="mobile" v-if="show">
      <div class="header">
        <router-link to="/" class="logo">
          <div class="icon"></div>
          <p><span>Interstellar</span></p>
        </router-link>
        <IconComponent name="times" @click="$emit('toggleMobileNavigation')" />
      </div>
      <div>
        <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
        <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
        <router-link to="/camouflages">{{ $tc('general.camouflage', 2) }}</router-link>
        <!-- <router-link to="/calling-cards" class="coming-soon">
          <span>{{ $tc('general.calling_cards', 2) }}</span>
        </router-link> -->
        <router-link to="/mastery">{{ $t('general.mastery') }}</router-link>
        <a href="https://orion.emca.app/">Orion</a>
      </div>
      <div class="footer">
        <router-link to="/settings">{{ $tc('general.setting', 2) }}</router-link>
        <router-link to="/about">{{ $t('general.about') }}</router-link>
        <router-link to="/requirements">{{ $tc('general.requirement', 2) }}</router-link>
        <a
          href="https://github.com/carlssonemil/interstellar/issues/new?title=[Bug]%20"
          target="_blank">
          {{ $t('general.report_an_issue') }}
        </a>
        <a href="https://github.com/carlssonemil/interstellar">
          <IconComponent name="github" />
          GitHub
        </a>
        <a href="https://discord.gg/kM3hmsZG">
          <IconComponent name="discord" />
          Discord
        </a>

        <a href="https://www.buymeacoffee.com/emilcarlsson" class="button">
          {{ $t('general.mobile_nav_support_link') }}
        </a>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
