<template>
  <footer class="py-8">
    <LayoutMoContainer>
      <p class="font-bold font-display">MogliCodes {{ currentYear }}</p>
    </LayoutMoContainer>
  </footer>
</template>

<script setup>

const date = new Date()
const currentYear = date.getFullYear()

</script>

<style>
footer {
  @apply mt-16;
}
</style>