<template>
  <component :is="inputType" v-bind="$props" @input="onInput" @change="onChange">
    <slot />
  </component>
</template>

<script>
import { capitalize } from '@/utils/string'

export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },

  emits: ['input', 'change'],

  computed: {
    inputType() {
      return `Input${capitalize(this.type)}`
    },
  },

  methods: {
    onInput(value) {
      this.$emit('input', value)
    },

    onChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>
