<template>
  <section id="blog" class="section min-h-screen py-20">
    <LayoutMoContainer>
        <AtomsMoHeadline class="text-center" headline-type="h2" text="Blog" />
          <ContentList path="/blog" v-slot="{ list }">
          <masonry-wall :items="sortedList(list).splice(0,2)" :ssr-columns="2" :column-width="550" :gap="16">
            <template #default="{ item, index }">
                <div class="p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl " :key="item._path">
                  <div class="flex flex-wrap gap-1 mb-4" v-if="item.category">
                    <span v-for="category in item.category.split(',')">
                      <span v-if="category" :class="getCategoryColorClass(category.trim())" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full  text-white">{{ category.trim() }}</span>
                    </span>
                  </div>
                  <span class="dark:text-white text-sm block">{{ useConvertToLocaleDateString(item.date) }}</span>
                  <h3 class="dark:text-white font-bold text-xl mb-4">{{ item.title }}</h3>
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
 * Sort list by date
 * @param list
 * @returns sorted list
 */
function sortedList(list) {
  return list.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}
</script>