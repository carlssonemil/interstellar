<template>
  <div class="input-textarea">
    <label v-if="label" :for="id">
      {{ label }}
    </label>

    <div v-if="placeholder" class="placeholder" :data-placeholder="placeholder">
      <textarea :id="id" :value="value" @input="onInput" @change="onChange" />
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
.input-textarea {
  textarea {
    appearance: none;
    background: $elevation-6-color;
    border: none;
    border-radius: $border-radius;
    color: white;
    margin: 10px 0;
    min-height: 150px;
    padding: 15px;
    resize: vertical;
    transition: background-color $transition;
    width: 100%;

    &:focus {
      background-color: $elevation-7-color;
    }
  }

  .placeholder {
    position: relative;

    &::before {
      content: attr(data-placeholder);
      font-size: 14px;
      left: 50%;
      opacity: 0.5;
      position: absolute;
      pointer-events: none;
      top: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
  }
}
</style>
