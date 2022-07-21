<template>
  <div class="md:grid gap-8" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  gridColumns: {
    type: String,
    required: true,
  },
  gridClasses: {
    type: String,
    required: false,
  }
})

const classes = computed(() => {
    return `grid-cols-${props.gridColumns}`
})

</script>