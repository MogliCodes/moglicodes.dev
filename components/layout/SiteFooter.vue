<template>
  <footer class="py-8 relative z-20">
    <LayoutMoContainer class="flex justify-between">
      <p class="dark:text-white font-bold font-display">MogliCodes {{ currentYear }}</p>
      <div class="flex justify-between">
        <div>
          <a class="block p-1" href="https://github.com/MogliCodes">
            <img class="block h-5 w-5" src="~/assets/img/icons/github.png" alt="">
          </a>
        </div>
        <div>
          <a class="block p-1" href="https://github.com/MogliCodes">
            <img class="block h-6 w-6" src="~/assets/img/icons/twitter.png" alt="">
          </a>
        </div>
        <div>
          <a class="block p-1" href="https://github.com/MogliCodes">
            <img class="block h-5" src="~/assets/img/icons/youtube.png" alt="">
          </a>
        </div>
      </div>
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