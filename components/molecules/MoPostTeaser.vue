<template>
  <article v-if="post" class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
    <span v-if="post.category" :class="getCategoryColorClass(post.category.name)" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 bg-black text-white">{{ post.category.name }}</span>
    <span class="dark:text-white text-sm block">{{ convertToLocaleDateString(post.created_at) }}</span>
    <h2 class="dark:text-white font-bold text-2xl mb-4">{{ post.title }}</h2>
    <p class="dark:text-white mb-4">{{ post.description }}</p>
    <nuxt-link class="dark:text-white font-display hover:opacity-75 transition-opacity" :to="`/blog/${post.slug}`">Read more</nuxt-link>
  </article>
</template>

<script setup lang="ts">
  const convertToLocaleDateString = useConvertToLocaleDateString

  defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  /**
  * Return color for post category
  * @param category
  */
  function getCategoryColorClass(category) {
    switch(category) {
      case 'Javascript':
        return 'bg-mc-persian-rose'
        break;
      case 'Nuxt.JS':
        return 'bg-mc-fern'
        break;
      case 'Random':
        return 'bg-mc-waikawa'
        break;
    }
  }
</script>