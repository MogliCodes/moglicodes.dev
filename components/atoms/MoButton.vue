<template>
  <button class="bg-mc-fern hover:bg-mc-orange text-white font-display block py-2 px-8 rounded-full transition-colors" @click="buttonAction(action)">{{ text }}</button>
</template>

<script setup lang="ts">

  defineProps({
    action: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true
    }
  })

  /**
   * Button actions
   */
  const router = useRouter();
  function buttonAction(action) {
    if(action === 'goBack') {
      router.go(-1)
    }
  }

</script>