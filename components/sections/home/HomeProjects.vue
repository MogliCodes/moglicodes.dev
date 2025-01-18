<template>
  <section id="projects" class="py-24 flex items-center -mt-20 relative">
    <LayoutMoContainer>
      <div class="flex justify-center">
        <MoHeadline text="Projects" headline-type="h2"/>
      </div>
      <div class="items-center gap-4 flex flex-col">
        <MoCardSlot v-for="project in projects">
            <h3 class="font-bold font-display text-2xl mb-4">{{ project.title }}</h3>
            <p class="mb-4">
              {{ project.description }}
            </p>
            <div class="flex gap-2 font-bold">
              <NuxtLink v-for="link in project.links" target="_blank" :to="link.url">{{ link.text }}</NuxtLink>
            </div>
        </MoCardSlot>
      </div>
    </LayoutMoContainer>
  </section>
</template>
<script setup lang="ts">
import MoHeadline from "~/components/atoms/MoHeadline.vue";
import MoCardSlot from "~/components/atoms/MoCardSlot.vue";

const projects = [
  {
    title: "tunnel.music",
    description: "tunnel.music is a website that showcases music which helps me focus on work. It is built with Nuxt.js, Tailwind CSS, TypeScript, and Vite. The website is hosted on Netlify.",
    links: [
      {
        text: "GitHub Repository",
        url: "https://github.com/moglicodes/tunnel-music"
      }
      ]
  },
  {
    title: "feinstaub.pygoscelis.net",
    description: "This is a project inspired by sensor.community. We import data from their archive and display them to try to bring them into different contexts to make the data even more useful.",
    links: [
      {
        text: "Website",
        url: "https://feinstaub.pygoscelis.net"
      }
    ]
  }
]

</script>