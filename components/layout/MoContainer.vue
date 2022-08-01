<template>
  <div class="container" :class="{ 'max-w-3xl' : isNarrow}">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  isNarrow: {
    type: Boolean,
    default: false,
  }
})
</script>