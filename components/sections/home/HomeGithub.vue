<template>
  <section id="github-activity" class="section py-16">
    <LayoutMoContainer>
      <AtomsMoHeadline text="Latest GitHub Activity" headline-type="h1" class="text-center" />
      <LayoutMoGrid v-if="events" grid-columns="2">
        <MoleculesMoGithubEvent v-for="event in events.slice(0, 6)" :key="event.id" :event="event" />
      </LayoutMoGrid>
    </LayoutMoContainer>
  </section>
</template>

<script setup lang="ts">
/**
 * Fetch posts
 */
import { useFetch } from "nuxt/app";
const config = useRuntimeConfig();
const GITHUB_API_URL = config.GITHUB_API_URL
const { data: events } = await useFetch(`${GITHUB_API_URL}/events`)

</script>