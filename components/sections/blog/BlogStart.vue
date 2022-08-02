<template>
  <section id="start" class=" flex items-center py-12">
    <LayoutMoContainer>
      <AtomsMoHeadline class="text-center" headline-type="h1" text="Blog" />
      <LayoutMoGrid gridColumns="2" class="py-12">
        <div v-for="post in posts" :key="post.id" class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
          <span :class="getCategoryColorClass(post.category.name)" class="inline-block py-1 px-4 font-display text-sm rounded-full mb-4 bg-black text-white">{{ post.category.name }}</span>
          <h2 class="dark:text-white font-bold text-2xl mb-4">{{ post.title }}</h2>
          <p class="dark:text-white mb-4">{{ post.description }}</p>
          <nuxt-link class="dark:text-white font-display" :to="`/blog/${post.slug}`">Read more</nuxt-link>
        </div>
      </LayoutMoGrid>
    </LayoutMoContainer>
  </section>
</template>

<script lang="ts" setup>
/**
 * Fetch posts
 */
  const config = useRuntimeConfig();
  const STRAPI_URL = config.STRAPI_URL
  const { data: events } = await useFetch(`${STRAPI_URL}`)

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