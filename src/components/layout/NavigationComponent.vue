<template>
  <nav class="container">
    <router-link to="/" class="logo">
      <div class="icon"></div>
      <p><span>Interstellar</span></p>
    </router-link>
    <div>
      <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
      <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
      <router-link to="/camouflages">{{ $tc('general.camouflage', 2) }}</router-link>
      <!-- <router-link to="/calling-cards" class="coming-soon">
        <span>{{ $tc('general.calling_cards', 2) }}</span>
      </router-link> -->
      <router-link to="/mastery">{{ $t('general.mastery') }}</router-link>
      <a href="https://orion.emca.app/">Orion</a>

      <router-link
        to="/settings"
        class="icon settings"
        :content="$tc('general.setting', 2)"
        v-tippy="{ placement: 'bottom' }">
        <IconComponent name="cog" />
      </router-link>
    </div>
    <IconComponent name="bars" class="mobile-nav-toggle" @click="$emit('toggleMobileNavigation')" />
  </nav>
</template>
