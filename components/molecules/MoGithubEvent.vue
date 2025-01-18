<template>
 <div class="flex p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
     <div class="flex items-center" v-if="event.actor">
       <figure v-if="event.actor.avatar_url" class="rounded-full w-16 overflow-hidden shadow-md">
         <img :src="event.actor.avatar_url" alt="">
       </figure>
     </div>
     <div class="pl-6 w-full">
       <div>
         <span class="dark:text-white text-sm">{{ convertToLocaleDateString(event.created_at) }}</span>
       </div>
       <div v-if="event.type === 'PushEvent'">
         <div>
           <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} <span class="font-normal">pushed to </span><a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.repo.name }}</a></span>
         </div>
<!--         <ul class="list-disc pl-5">-->
<!--           <li class="dark:text-white text-sm" v-for="(commit, index) in event.payload.commits" :key="index">-->
<!--             {{ commit.message }}-->
<!--           </li>-->
<!--         </ul>-->
       </div>
       <div v-else-if="event.type === 'PullRequestEvent'">
         <div>
           <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} </span>
           <span>opened a pull request in </span>
           <a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.repo.name }}</a>
         </div>
       </div>
       <div v-else-if="event.type === 'IssueCommentEvent'">
         <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} commented on an issue in <a class="underline" target="_blank" :href="event.payload.comment.html_url">{{ event.repo.name }}</a></span>
       </div>
       <div v-else-if="event.type ==='WatchEvent'">
         <div>
           <span class="dark:text-white block mb-2 font-bold">{{ event.actor.display_login }} <span class="font-normal">started watching </span><a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.repo.name }}</a></span>
         </div>
       </div>
       <div v-else-if="event.type ==='CreateEvent'">
         <div>
           <span class="dark:text-white block font-bold">{{ event.actor.display_login }} <span class="font-normal">created branch </span><a class="underline" target="_blank" :href="`https://github.com/${event.repo.name}`">{{ event.payload.ref }}</a></span>
         </div>
       </div>
       <div class="bg-gray-900 text-white px-2 py-1 rounded font-mono text-xs" v-if="event?.payload?.commits?.[0]">
         {{ event?.payload?.commits?.[0].message }}
       </div>
     </div>
 </div>
</template>

<script setup lang="ts">

const convertToLocaleDateString = useConvertToLocaleDateString

defineProps({
  event: {
    type: Object,
    required: true
  }
})

</script>