<template>
  <section id="github-activity" class="section py-20">
    <LayoutMoContainer>
      <AtomsMoHeadline  text="Latest GitHub Activity" headline-type="h2" class="text-center" />
      <div v-if="events"  class="grid md:grid-cols-2 gap-4" >
          <div v-for="(item, index) in events.slice(0, 6)">
            <MoleculesMoGithubEvent :event="item" :key="index" />
          </div>
      </div>
      <div class="flex flex-col gap-5 items-center" v-else>
        <div class="bg-red-400 border-2 border-red-900 p-3 rounded-xl"><p class="text-center text-red-900">{{ error }}</p></div>
      </div>
    </LayoutMoContainer>
  </section>
</template>

<script setup lang="ts">
/**
 * Fetch posts
 */
const config = useRuntimeConfig();
const apiUrl = config.public.githubApiUrl
const { data: events, error, pending } = await useFetch(`${apiUrl}/events`)

const eventsFiltered = events.value?.filter( (event) => {
  return event.type == "PullRequestEvent"
})

</script>