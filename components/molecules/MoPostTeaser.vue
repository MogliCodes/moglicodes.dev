<template>
  <article v-if="post" class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
    <span v-for="category in post.category.split(',')" :class="getCategoryColorClass(category)" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 bg-black text-white">{{ post.category.name }}</span>
    <span class="dark:text-white text-sm block">{{ convertToLocaleDateString(post?.created_at) }}</span>
    <h2 class="text-xs">{{ post.title }}</h2>
    <p class="dark:text-white mb-4">{{ post.description }}</p>
    <nuxt-link class="dark:text-white font-display hover:opacity-75 transition-opacity" :to="`/blog/${post.slug}`">Read more</nuxt-link>
  </article>
</template>

<script setup lang="ts">
  const convertToLocaleDateString = useConvertToLocaleDateString

  type Post = {
    category: string
    created_at: string
    title: string
    description: string
    slug: string
  }

  type Props = {
    post: Post
  }


  defineProps<Props>()

  /**
  * Return color for post category
  * @param category
  */
  function getCategoryColorClass(category: string) {
    switch(category.trim()) {
      case 'Javascript':
        return 'bg-mc-persian-rose'
      case 'Nuxt.JS':
        return 'bg-mc-fern'
      case 'Random':
        return 'bg-mc-waikawa'
      case 'Docker':
        return 'bg-docker'
      case 'Linux':
          return 'bg-yellow-300'
    }
  }
</script>