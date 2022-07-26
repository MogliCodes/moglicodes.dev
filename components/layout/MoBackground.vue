<template>
    <div class="bg bg-color bg-gradient-to-b from-primary-lighter dark:from-mc-blue to-primary-darker dark:to-mc-blue-darker"></div>
    <div class="bg bg-plants"></div>
</template>

<style scoped>
.bg-color {
    z-index: -2;
}
.bg-plants {
    z-index: -1;
}

.bg-color,
.bg-plants {
    @apply fixed top-0 left-0 right-0 bottom-0;
}
.bg-plants {
    background-image: url("~/assets/img/bg/bgMobile.svg");
    background-size: cover;
    background-repeat: no-repeat;
}
.dark .bg-plants {
  background-image: url("~/assets/img/bg/bgMobileDark.svg");
}
@media (min-width: 1024px) {
    .bg-plants {
        background-image: url("~/assets/img/bg/bgDesktop.svg");
    }
  .dark .bg-plants {
    background-image: url("~/assets/img/bg/bgDesktopDark.svg");
  }
}

</style>