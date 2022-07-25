<template>
<!--  <SiteHeader class="fixed top-0 left-0 w-full py-4" />-->
  <div class="min-h-screen">
    <slot />
  </div>
</template>
<script>
import SiteHeader from "../components/layout/SiteHeader";
export default {
  components: {SiteHeader}
}
</script>