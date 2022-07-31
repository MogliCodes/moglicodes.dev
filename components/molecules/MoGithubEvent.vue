<template>
 <div class="flex p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
     <div v-if="event.actor">
       <figure v-if="event.actor.avatar_url" class="rounded-full w-12 overflow-hidden shadow-md">
         <img :src="event.actor.avatar_url" alt="">
       </figure>
     </div>
     <div class="pl-6">
       <div>
         <span class="dark:text-white text-sm">{{ formatDate(event.created_at) }}</span>
       </div>
       <div v-if="event.type === 'PushEvent'">
         <div>
           <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} pushed to <a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.repo.name }}</a></span>
         </div>
         <ul class="list-disc pl-5">
           <li class="dark:text-white text-sm" v-for="(commit, index) in event.payload.commits" :key="index">
             {{ commit.message }}
           </li>
         </ul>
       </div>
       <div v-else-if="event.type === 'PullRequestEvent'">
         <div>
           <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} opened a pull request in <a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.repo.name }}</a></span>
         </div>
       </div>
     </div>
 </div>
</template>

<script setup lang="ts">

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

function formatDate(_date) {
  const date = new Date(_date)
  const locale = 'en-GB'
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(locale, options)
}

</script>