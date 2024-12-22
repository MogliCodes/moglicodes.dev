<template>
  <article class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl" :key="item._path">
    <div class="flex gap-1" v-if="item.category">
                    <span v-for="category in item.category.split(',')">
                      <span v-if="category" :class="getCategoryColorClass(category.trim())" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 text-white">{{ category.trim() }}</span>
                    </span>
    </div>
    <span class="dark:text-white text-sm block">{{ useConvertToLocaleDateString(item.date) }}</span>
    <h2 class="dark:text-white font-bold text-xl mb-4">{{ item.title }}</h2>
    <p class="dark:text-white mb-4">{{ item.description }}</p>
    <nuxt-link class="dark:text-white font-display hover:opacity-75 transition-opacity" :to="`${item._path}`">Read more</nuxt-link>
  </article>
</template>
<script setup lang="ts">
import {useConvertToLocaleDateString} from "~/composables/useConvertToLocaleDateString";
import {getCategoryColorClass} from "~/utils/utils";



type Props = {
  item: Article
}

defineProps<Props>()

</script>