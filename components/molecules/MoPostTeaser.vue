<template>
  <article v-if="post" class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
    <span v-if="post.category" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 bg-black text-white">{{ post.category.name }}</span>
    <h2 class="dark:text-white font-bold text-2xl mb-4">{{ post.title }}</h2>
    <p class="dark:text-white mb-4">{{ post.description }}</p>
    <nuxt-link class="dark:text-white font-display" :to="`/blog/${post.slug}`">Read more</nuxt-link>
  </article>
</template>

<script setup lang="ts">
  defineProps({
    post: {
      type: Object,
      required: true
    }
  })
</script>