<template>
  <section id="blog" class="min-h-screen">
    <LayoutMoContainer>
        <AtomsMoHeadline class="text-center" headline-type="h1" text="Blog" />
        <div v-if="pending">
          Loading ...
        </div>
        <div v-else>
          <masonry-wall :items="posts.reverse()" :ssr-columns="2" :column-width="450" :gap="16">
            <template #default="{ item, index }">
              <div>
                <MoleculesMoPostTeaser :post="item" :key="item.id" />
              </div>
            </template>
          </masonry-wall>
        </div>
    </LayoutMoContainer>
  </section>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();
const STRAPI_URL = config.STRAPI_URL
const { pending, data: posts } = await useLazyFetch(`${STRAPI_URL}articles`)

</script>