<template>
  <main>
    <div class="container mx-auto">
      <MoHeadline text="Categories" headline-type="h1" />
      <div class="flex flex-col gap-4">
        <MoCard :item="article" v-for="(article, index) in data" :key="`article-${index}`" >
        </MoCard>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import MoHeadline from "~/components/atoms/MoHeadline.vue";
import MoCard from "~/components/atoms/MoCard.vue";

const route = useRoute()
// get slug
const name = ref(route.params.name[0])
console.log(name)

const { data }: { data: Ref<Array<Article>> } = await useAsyncData('blog', () => queryContent('/').where({ 'category': { $contains: name.value } }).find())



</script>

