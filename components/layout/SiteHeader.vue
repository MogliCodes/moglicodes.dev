<template>
  <header>
    <LayoutMoContainer class="flex justify-end">
      <AtomsMoToggle @click="setDarkMode"/>
    </LayoutMoContainer>
  </header>
</template>

<script lang="ts" setup>

  /**
   * Toggle dark mode
   */
  import { useDarkMode } from "@/stores/darkmode";
  const darkModeStore = useDarkMode()
  function setDarkMode(){
    const isDark = darkModeStore.isDarkMode
    darkModeStore.setIsDark(!isDark)
  }

</script>