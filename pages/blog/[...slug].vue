<template>
  <div>
    <section id="start" class="py-16 blog-detail min-h-screen flex items-center">
      <LayoutMoContainer is-narrow>
        <div v-if="pending">
          <AtomsMoSpinner />
        </div>
        <div v-else>
          <div v-if="post">
            <AtomsMoHeadline v-if="post.title" headline-type="h1" :text="post.title" />
            <div v-if="post.content" class="dark:text-white">
              <div v-html="md.render(post.content)" />
            </div>
          </div>
        </div>
      </LayoutMoContainer>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
  /**
   * Fetch posts
   */
  const config = useRuntimeConfig();
  const STRAPI_URL = config.STRAPI_URL;
  const route = useRoute();
  const slug = route.params.slug;
  const { pending, data: post } = await useAsyncData('post', () => $fetch(`${STRAPI_URL}articles/${slug}`), { server: false });
</script>

<style lang="scss">

.blog-detail {
  p {
    @apply mb-4;
  }
  h2 {
    @apply mt-8 mb-4 text-2xl font-bold;
  }
}

</style>