<template>
    <h1 v-if="headlineType === 'h1'" class="text-4xl md:text-6xl font-display font-bold mb-8 dark:text-white">
        {{ text }}
    </h1>
    <h2 v-else-if="headlineType === 'h2'" class="text-4xl font-display font-bold mb-8 dark:text-white">
        {{ text }}
    </h2>
    <h3 v-else-if="headlineType === 'h3'" class="text-2xl font-display font-bold dark:text-white">
        {{ text }}
    </h3>
</template>

<script setup>
const props = defineProps({
   headlineType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
})
</script>