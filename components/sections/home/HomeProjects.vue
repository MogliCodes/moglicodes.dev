<template>
  <section id="start" class="py-24 flex items-center -mt-20 relative">
    <LayoutMoContainer>
      <MoHeadline text="Projects" headline-type="h2" />
      <LayoutMoGrid grid-columns="2">
        <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8  gap-8">

            <h3 class="font-bold font-display text-2xl mb-4">tunnel.music</h3>
            <p class="mb-4">
              tunnel.music is a website that showcases music which helps me focus on work. It is built with Nuxt.js, Tailwind CSS, TypeScript, and Vite. The website is hosted on Netlify.
            </p>
            <div class="flex gap-2 font-bold">
              <NuxtLink target="_blank" to="https://github.com/MogliCodes/tunnel.music">GitHub Repository</NuxtLink>
            </div>
        </div>
      </LayoutMoGrid>
    </LayoutMoContainer>
  </section>
</template>
<script setup lang="ts">
import MoHeadline from "~/components/atoms/MoHeadline.vue";
</script>