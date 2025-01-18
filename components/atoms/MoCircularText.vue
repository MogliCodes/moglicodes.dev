<template>
  <div class="relative flex items-center justify-center w-full h-full">
    <!-- Rotating container -->
    <div
        class="bg-mc-fern rounded-full absolute h-full w-full animate-spin-slow flex items-center justify-center"
    >
      <!-- Each character -->
      <span
          v-for="(char, index) in props.text.split('')"
          :key="index"
          class="absolute text-lg font-semibold"
          :style="{
          transform: `rotate(${index * angle}deg) translateY(-120px) rotate(${-(index * angle)}deg)`,
        }"
      >
        {{ char }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define props with a `text` string
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

// Calculate the angle for each character
const angle = computed(() => 360 / props.text.length);
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
