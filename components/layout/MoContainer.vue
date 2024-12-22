<template>
  <div class="container px-2 md:px-12 xl:px-0" :class="{ 'max-w-3xl' : isNarrow}">
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