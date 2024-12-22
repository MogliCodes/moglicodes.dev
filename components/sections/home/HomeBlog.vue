<template>
  <section id="blog" class="section min-h-screen py-20">
    <LayoutMoContainer>
        <AtomsMoHeadline class="text-center" headline-type="h2" text="Blog" />
          <ContentList path="/blog" v-slot="{ list }">
          <masonry-wall :items="list" :ssr-columns="2" :column-width="550" :gap="16">
            <template #default="{ item, index }">
                <div class="p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl" :key="item._path">
                  <div class="flex flex-wrap gap-1 mb-4" v-if="item.category">
                    <span v-for="category in item.category.split(',')">
                      <span v-if="category" :class="getCategoryColorClass(category.trim())" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full  text-white">{{ category.trim() }}</span>
                    </span>
                  </div>
                  <span class="dark:text-white text-sm block">{{ useConvertToLocaleDateString(item.date) }}</span>
                  <h2 class="dark:text-white font-bold text-xl mb-4">{{ item.title }}</h2>
                  <p class="dark:text-white mb-4">{{ item.description }}</p>
                  <nuxt-link class="dark:text-white font-display hover:opacity-75 transition-opacity" :to="`${item._path}`">Read more</nuxt-link>
                </div>
            </template>
          </masonry-wall>
      </ContentList>
    </LayoutMoContainer>
  </section>
</template>

<script setup>

import {useConvertToLocaleDateString} from "../../../composables/useConvertToLocaleDateString";

/**
 * Return color for post category
 * @param category
 */
function getCategoryColorClass(category) {
  console.log('category', category)
  switch(category.trim()) {
    case 'Cheat Sheet':
      return 'bg-orange-500'
    case 'Javascript':
      return 'bg-mc-persian-rose'
    case 'Nuxt.JS':
      return 'bg-mc-fern'
    case 'Services':
      return 'bg-mc-glacier'
    case 'Random':
      return 'bg-mc-waikawa'
    case 'Docker':
      return 'bg-docker'
    case 'DevOps':
      return 'bg-gray-700'
    case 'Virtualization':
      return 'bg-teal-900'
    case 'OS':
      return 'bg-fuchsia-900'
    case 'Linux':
      return 'bg-yellow-300'
    case 'Raspberry Pi':
      return 'bg-pink-700'
    default:
      return 'bg-black'

  }
}
</script>
