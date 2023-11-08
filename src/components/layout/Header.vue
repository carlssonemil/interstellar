<template>
  <header>
    <nav class="container">
      <router-link to="/" class="logo">
        <div class="icon" />
        <p><span>Interstellar</span></p>
      </router-link>

      <div>
        <router-link to="/">{{ $tc('general.weapon', 2) }}</router-link>
        <router-link to="/camouflages" class="coming-soon">
          {{ $tc('general.camouflage', 2) }}
        </router-link>
        <router-link to="/calling-cards" class="coming-soon">
          {{ $tc('general.calling_cards', 2) }}
        </router-link>
        <router-link to="/mastery" class="coming-soon">{{ $t('general.mastery') }}</router-link>

        <router-link
          to="/settings"
          class="icon settings"
          :content="$tc('general.setting', 2)"
          v-tippy="{ placement: 'bottom' }">
          <Icon name="cog" :size="22" />
        </router-link>

        <a
          href="https://github.com/carlssonemil/interstellar/issues/new?title=[Bug]%20"
          target="_blank"
          class="icon bug"
          :content="$t('general.report_an_issue')"
          v-tippy="{ placement: 'bottom' }">
          <Icon name="bug" :size="22" />
        </a>
      </div>

      <Icon name="bars" id="hamburger" @click="toggleHamburger" />
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 50px 0 30px;

    @media (max-width: $tablet) {
      padding: 30px 0;
    }

    .logo {
      align-items: center;
      display: flex;
      font-size: 26px;
      font-weight: 600;
      opacity: 0.85;

      @media (max-width: $tablet) {
        font-size: 18px;
      }

      &.router-link-exact-active {
        opacity: 0.85;
      }

      &:hover {
        text-decoration: none;
      }

      .icon {
        $size: 35px;
        @include interstellar-camouflage-background;
        border-radius: $border-radius * 2;
        display: block;
        height: $size;
        width: $size;
      }

      p {
        margin-left: 10px;
      }
    }

    a {
      color: $text-color;
      opacity: 0.5;
      text-decoration: none;
      transition: $transition;

      @media (max-width: $tablet) {
        font-size: 14px;
      }

      &:hover {
        @media (min-width: $tablet) {
          opacity: 1;
          text-decoration: underline;
        }

        &.settings .icon {
          transform: rotate(45deg);
        }

        &.bug .icon {
          animation: tilt-shaking 0.25s ease-in-out infinite;
        }
      }

      &.router-link-exact-active {
        opacity: 1;
      }

      &.new {
        position: relative;

        &::after {
          $size: 8px;
          background: $orange;
          border-radius: $size;
          color: white;
          content: '';
          display: block;
          height: $size;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(100%, -50%);
          width: $size;
        }
      }

      &.coming-soon {
        opacity: 0.5;
        pointer-events: none;
        position: relative;

        span {
          opacity: 0.5;
        }

        &::after {
          bottom: 0;
          color: $blue;
          content: 'Coming soon!';
          font-size: 10px;
          left: 50%;
          position: absolute;
          text-align: center;
          transform: translate(-50%, calc(100% + 4px));
          width: 100%;
        }
      }

      .icon {
        transition: $transition;
      }
    }

    > div {
      align-items: center;
      display: flex;

      a + a {
        margin-left: 50px;
      }
    }

    #hamburger {
      display: none;
    }
  }
}
</style>
