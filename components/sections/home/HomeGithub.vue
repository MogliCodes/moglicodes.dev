<template>
  <section v-if="events" id="github-activity" class="section py-16">
    <LayoutMoContainer>
      <AtomsMoHeadline text="Latest GitHub Activity" headline-type="h1" class="text-center" />
      <masonry-wall :items="eventsFiltered.slice(0, 4)" :ssr-columns="2" :column-width="550" :gap="16">
        <template #default="{ item, index }">
          <div>
            <MoleculesMoGithubEvent :event="item" :key="index" />
          </div>
        </template>
      </masonry-wall>
    </LayoutMoContainer>
  </section>
</template>

<script setup lang="ts">
/**
 * Fetch posts
 */
const config = useRuntimeConfig();
const GITHUB_API_URL = config.GITHUB_API_URL
const { data: events } = await useFetch(`${GITHUB_API_URL}/events`)

const eventsFiltered = events.value.filter( (event) => {
  return event.type == "PullRequestEvent"
})

</script>