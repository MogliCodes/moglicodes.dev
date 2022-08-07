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
</style>