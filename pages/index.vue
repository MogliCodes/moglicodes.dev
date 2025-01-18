<template>
    <div>
      <div v-if="data.recenttracks?.track[0]['@attr']?.['nowplaying']" class="fixed z-[1000] w-[120px] aspect-square top-8 right-8  spin-slow">
        <div class="bg-mc-fern hover:bg-mc-glacier cursor-pointer group flex items-center justify-center aspect-square block text-center text-xs font-bold rounded-full p-4">
          <div class="block group-hover:hidden">
            {{ `${data.recenttracks?.track[0].name}` }}
          </div>
          <div class="hidden group-hover:block">
            {{ `${data.recenttracks?.track[0].artist['#text']}` }}
          </div>
        </div>
      </div>
      <main>
        <SectionsHomeStart />
        <SectionsHomeProjects />
        <SectionsHomeGithub />
        <SectionsHomeBlog />
      </main>
      <MoBanner />
    </div>
</template>

<script setup>
import MoBanner from '~/components/organisms/MoBanner/MoBanner.vue'

const { data, error, pending } = await useFetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Moglash&api_key=748db0d5fc56991d10aad4ce5165e345&limit=1&format=json`)

</script>
