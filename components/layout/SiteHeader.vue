<template>
  <header>
    <LayoutMoContainer class="flex justify-between">
      <div class="w-12">
        
      </div>
      <div>
        <NuxtLink to="/"><img width="65" src="~/assets/img/logo/moglicodes_logo.svg" alt=""></NuxtLink>
      </div>
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