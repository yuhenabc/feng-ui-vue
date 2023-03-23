<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'fn-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => [
        'px-3',
        'py-2',
        'bg-white',
        'rounded',
        'border',
        'border-gray-500',
        'hover:bg-gray-200',
        'active:bg-gray-300',
        'disabled:(opacity-50 cursor-not-allowed)',
      ]),
      onClick() {
        emit('click')
      },
    }
  },
}
</script>
