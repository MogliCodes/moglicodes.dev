<template>
  <section id="blog" class="min-h-screen">
    <LayoutMoContainer>
      <LayoutMoGrid>
        <AtomsMoHeadline class="text-center" headline-type="h1" text="Blog" />
        <div class="grid grid-cols-2 gap-12">
          <div v-for="post in posts" :key="post.id" class="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
            <span class="inline-block py-2 px-4 font-display text-sm rounded-full mb-2 bg-black text-white">{{ post.category.name }}</span>
            <h2 class="font-bold text-2xl mb-2">{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </LayoutMoGrid>
    </LayoutMoContainer>
  </section>
</template>

<script setup>
import {useFetch} from "nuxt/app";
const config = useRuntimeConfig();
const STRAPI_URL = config.STRAPI_URL
const { data: posts } = await useFetch(`${STRAPI_URL}articles`)

</script>