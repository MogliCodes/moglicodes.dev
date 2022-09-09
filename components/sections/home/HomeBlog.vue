<template>
  <section id="blog" class="section min-h-screen">
    <LayoutMoContainer>
        <AtomsMoHeadline class="text-center" headline-type="h1" text="Blog" />
          <ContentList path="/blog" v-slot="{ list }">
          <masonry-wall :items="list" :ssr-columns="2" :column-width="550" :gap="16">
            <template #default="{ item, index }">
                <div class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl" :key="item._path">
                  <span v-if="item.category" :class="getCategoryColorClass(item.category)" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 bg-black text-white">{{ item.category }}</span>
                  <span class="dark:text-white text-sm block">{{ convertToLocaleDateString(item.date) }}</span>
                  <h2 class="dark:text-white font-bold text-2xl mb-4">{{ item.title }}</h2>
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
const convertToLocaleDateString = useConvertToLocaleDateString
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
    case 'Services':
      return 'bg-mc-glacier'
      break;
    case 'Random':
      return 'bg-mc-waikawa'
      break;
  }
}
</script>
