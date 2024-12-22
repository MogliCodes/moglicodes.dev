<template>
  <div ref="banner" :class="{'opacity-100': isVisible, 'opacity-0 pointer-events-none': !isVisible}" class="fixed flex justify-center items-center bg-white bottom-0 left-0 right-0 m-4 mr-8 p-4 rounded-xl z-50 transition">
      <div @click="closeBanner()" class="bg-primary hover:bg-mc-lightblue cursor-pointer w-10 h-10 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 font-display flex justify-center items-center">X</div>
      <p>🚧 This website is currently and actively developed. So please take everything you see and read here with a grain of. 🚧</p>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
const isVisible = ref(true)
const banner = ref(null)

onMounted(() => {
  if(!window) return
  window.addEventListener('scroll', () => {
    console.log(x.value, y.value)
    if(y.value > 100) {
      isVisible.value = false
    }
  })
})

function closeBanner(){
  isVisible.value = false
}

</script>
