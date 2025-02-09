<template>
    <div>
      <client-only>
        <div  v-if="data.recenttracks?.track[0]['@attr']?.['nowplaying']"
             class="scale-75 md:scale-100 fixed z-[1000] w-[120px] aspect-square top-3 right-3 md:top-8 md:right-8  spin-slow">
          <div class="relative">
            <div
                class="bg-mc-orange hover:bg-mc-fern cursor-pointer group flex items-center justify-center aspect-square block text-center text-xs font-bold rounded-full p-4">
              <div class="block group-hover:hidden">
                {{ `${data.recenttracks?.track[0].name}` }}
              </div>
              <div class="hidden group-hover:block">
                {{ `${data.recenttracks?.track[0].artist['#text']}` }}
              </div>
            </div>
            <div class="absolute left-[-20px] top-[-20px] w-[160px] h-[160px] pointer-events-none animate-spin-slow">
              <img src="/now-playing.svg" alt="">
            </div>
          </div>
        </div>
      </client-only>
      <main class="pt-10">
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
