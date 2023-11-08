<template>
  <div :class="['alert', variant]">
    <Icon v-if="icon || variantIcon" :name="icon || variantIcon" :size="20" />

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'info',
    },

    icon: {
      type: String,
      required: false,
    },
  },

  computed: {
    variantIcon() {
      switch (this.variant) {
        case 'info':
          return 'info-circle'
        case 'success':
          return 'check-circle'
        case 'warning':
          return 'exclamation-circle'
        case 'error':
          return 'times-circle'
        default:
          return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  align-items: flex-start;
  background: $elevation-2-color;
  border: 2px solid $elevation-4-color;
  border-radius: $border-radius;
  display: flex;
  padding: 15px;
  text-align: left;

  &.info {
    background: rgba($blue, 0.15);
    border-color: rgba($blue, 0.3);

    .icon ::v-deep(svg) {
      fill: $blue;
    }
  }

  &.empty-state {
    .content {
      color: rgba(white, 0.5);
      text-align: center;
    }
  }

  > .icon {
    margin-right: 8px;
  }

  .content {
    line-height: 1.6;
    white-space: pre-line;
    width: 100%;

    > .icon {
      position: relative;
      top: 3px;
    }
  }
}
</style>
