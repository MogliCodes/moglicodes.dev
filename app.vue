<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LayoutMoBackground />
  </div>
</template>

<script setup>
import '@/assets/css/tailwind.css'
</script>

<style>
html {
  @apply scroll-smooth;
}

h1, h2 {
  text-shadow: 0px 4px 0 rgba(255, 255, 255, 0.5);
}
</style>