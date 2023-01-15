<template>
  <div class="spinner flex justify-center">
    <span class="block rounded-full h-4 w-4 m-0.5 bg-mc-lightblue"></span>
    <span class="block rounded-full h-4 w-4 m-0.5 bg-mc-lightblue"></span>
    <span class="block rounded-full h-4 w-4 m-0.5 bg-mc-lightblue"></span>
    <span>Change in File b.</span>
  </div>
</template>

<style lang="scss">
.spinner {
  span {
    animation-name: jump;
    animation-duration: 750ms;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
}

@for $i from 1 through 3 {
  .spinner span:nth-of-type(#{$i}){
    animation-delay: calc(250ms * #{$i} - 250ms)
  }
}

@keyframes jump {
  50% {
    transform: translateY(-3px);
  }
}

</style>
