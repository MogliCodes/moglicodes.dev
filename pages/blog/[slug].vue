<template>
  <section id="start" class="min-h-screen flex items-center">
    <LayoutMoContainer is-narrow>
      <AtomsMoHeadline class="text-center" headline-type="h1" :text="post.title" />
      <div class="dark:text-white" v-html="post.content"></div>
    </LayoutMoContainer>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
/**
 * Fetch posts
 */
import { useFetch } from "nuxt/app";
const config = useRuntimeConfig();
const STRAPI_URL = config.STRAPI_URL
const route = useRoute();
const slug = route.params.slug
const { data: post } = await useFetch(`${STRAPI_URL}articles/${slug}`)


</script>