<template>
  <div class="page">
    <section id="start" class="py-16 blog-detail">
      <LayoutMoContainer is-narrow>
        <div v-if="pending">
          <AtomsMoSpinner />
        </div>
        <div v-else>
          <div v-if="post">
            <span class="dark:text-white text-sm block mb-4">{{ convertToLocaleDateString(post.created_at) }}</span>
            <AtomsMoHeadline v-if="post.title" headline-type="h1" :text="post.title" />
            <div v-if="post.content" class="dark:text-white">
              <div v-html="md.render(post.content)" />
              <AtomsMoButton text="Go back" action="goBack" />
            </div>
          </div>
        </div>
      </LayoutMoContainer>
    </section>
  </div>
</template>

<script setup lang="ts" >
  const convertToLocaleDateString = useConvertToLocaleDateString

  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
  /**
   * Fetch posts
   */
  const config = useRuntimeConfig();
  const STRAPI_URL = config.STRAPI_URL;
  const route = useRoute();
  const slug = route.params.slug;
  const { pending, data: post } = await useAsyncData('post', () => $fetch(`${STRAPI_URL}articles/${slug}`), { initialCache: false });
  const refresh = () => refreshNuxtData('post')
  onMounted(() => {
    refresh()
  })
</script>

<style lang="scss">
.page {
  @apply py-16;
}
.blog-detail {
  p {
    @apply mb-4;
  }
  h2 {
    @apply mt-12 mb-4 text-2xl font-bold;
  }
  h3 {
    @apply mt-8 mb-4 text-lg font-bold;
  }
  code {
    @apply block text-gray-200 p-12 my-4 shadow-lg bg-black bg-opacity-80;
    border-radius: 15px;
  }
  li {
    @apply list-disc ml-5;
  }
}



</style>