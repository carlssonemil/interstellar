<template>
  <transition name="slide-down">
    <div class="notice" v-if="showNotice">
      <i18n-t keypath="general.support_notice" tag="p" scope="global">
        <template #link>
          <a href="https://www.buymeacoffee.com/emilcarlsson" target="_blank">{{
            $t('general.support_notice_link')
          }}</a>
        </template>
      </i18n-t>
      <IconComponent name="times" width="16" height="16" @click="showNotice = false" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showNotice: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.showNotice = true
    }, 15000)
  },
}
</script>
