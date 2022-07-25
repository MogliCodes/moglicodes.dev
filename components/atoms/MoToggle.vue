<template>
  <div ref="toggleEl" @click="toggle" class="h-6 w-12 bg-white rounded-full relative cursor-pointer">
    <span class="absolute transition-all bg-mc-lightblue h-5 w-5 rounded-full top-0.5 left-0.5"></span>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const toggleEl = ref(null)
  function toggle(){
    toggleEl._rawValue.firstChild.classList.toggle('active')
    console.log(toggleEl._rawValue.firstChild)
  }
</script>

<style scoped>
.active {
  @apply left-[25px] bg-primary ;
}
</style>