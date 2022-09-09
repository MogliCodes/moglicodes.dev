<template>
  <div class="fixed flex justify-center items-center bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-10 transition" :class="{
    'bg-opacity-0 pointer-events-none': !overlayStore.isActive
  }">
    <div ref="target" class="relative bg-white p-12 rounded-2xl max-w-2xl text-center transition-transform" :class="{
    'scale-0 pointer-events-none': !overlayStore.isActive
  }">
      <div @click="toggleOverlay()" class="bg-primary hover:bg-mc-lightblue cursor-pointer w-10 h-10 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 font-display flex justify-center items-center">X</div>
      <h1 class="font-display text-4xl mb-8">🚧 Under construction 🚧</h1>
      <p class="mb-8">This website is currently and actively developed. So please take everything you see and read here with a grain of 🧂.</p>
      <MoButton action="click" @click="toggleOverlay()" class="mx-auto" text="Ok, let's go!" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import MoButton from '~/components/atoms/MoButton.vue'
import { useOverlayStore } from "~/stores/overlay";
const overlayStore = useOverlayStore()

const target = ref(null)
if(overlayStore.isActive) {
  onClickOutside(target, (event) => toggleOverlay())
}


function toggleOverlay(){
  const isActive = overlayStore.isActive
  overlayStore.setIsActive(!isActive)
}

</script>