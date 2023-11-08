<template>
  <div class="input-text">
    <label v-if="label" :for="id">
      {{ label }}
    </label>

    <div class="input-wrapper" :class="{ icon: icon }">
      <div v-if="icon" class="icon">
        <Icon :name="icon" />
      </div>

      <input
        type="text"
        :id="id"
        :value="value"
        :placeholder="placeholder"
        @input="onInput"
        @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
  },

  emits: ['input', 'change'],

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },

    onChange(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-text {
  .input-wrapper {
    align-items: center;
    display: flex;
    position: relative;

    @media (max-width: $tablet) {
      width: 100%;
    }

    input[type='text'] {
      appearance: none;
      background: $elevation-2-color;
      border: 2px solid $elevation-4-color;
      border-radius: $border-radius;
      color: white;
      font-family: $font-family;
      font-size: 14px;
      font-weight: 500;
      padding: 7px 7px;
      transition: $transition;
      width: 100%;

      @media (max-width: $tablet) {
        font-size: 18px;
        font-weight: 400;
        padding: 16px 10px;
      }

      &:focus {
        background: $elevation-3-color;
      }
    }

    &.icon {
      .icon {
        left: 6px;
        opacity: 0.4;
        pointer-events: none;
        position: absolute;

        @media (max-width: $tablet) {
          left: 16px;
          top: 26px;
          transform: scale(1.25);
        }
      }

      input[type='text'] {
        padding-left: 30px;

        @media (max-width: $tablet) {
          padding-left: 45px;
        }
      }
    }
  }
}
</style>
