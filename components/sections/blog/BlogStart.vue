<template>
  <section id="start" class=" flex items-center py-12" v-if="posts">
    <LayoutMoContainer>
      <AtomsMoHeadline class="text-center" headline-type="h1" text="Blog" />
      <div v-if="pending">
        <AtomsMoSpinner />
      </div>
      <div v-else-if="!pending && posts">
        <MasonryWall :items="posts" :ssr-columns="2" :column-width="450" :gap="16">
          <template #default="{ item, index }">
            <div>
              <MoleculesMoPostTeaser :post="item" :key="item.id" />
            </div>
          </template>
        </MasonryWall>
      </div>
    </LayoutMoContainer>
  </section>
</template>

<script lang="ts" setup>
/**
 * Fetch posts
 */
  const config = useRuntimeConfig();
  const STRAPI_URL = config.STRAPI_URL
  const { pending, data: posts } = await useAsyncData('articles', () => $fetch(`${STRAPI_URL}articles/`))
  const refresh = () => refreshNuxtData('articles')
  onMounted(() => {
    refresh()
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