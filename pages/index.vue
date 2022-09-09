<template>
    <div>
      <main>
        <SectionsHomeStart />
        <SectionsHomeGithub />
        <SectionsHomeBlog />
      </main>
      <MoOverlay v-if="overlayStore.isActive" />
    </div>
</template>

<script setup>
import { useOverlayStore } from "~/stores/overlay";
const overlayStore = useOverlayStore()
import MoOverlay from '~/components/organisms/MoOverlay/MoOverlay.vue'
</script>