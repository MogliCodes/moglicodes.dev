<template>
  <div class="page">
    <section id="start" class="py-16 blog-detail">

      <LayoutMoContainer is-narrow>
        <ContentDoc v-slot="{ doc }">
          <span class="flex gap-2">
            <span v-for="category in doc.category.split(',')" :class="getCategoryColorClass(category)" class="dark:text-white inline-block py-1 px-4 font-display text-sm rounded-full mb-4 text-white">{{ category }}</span>
          </span>
          <p>{{ convertToLocaleDateString(doc.date) }}</p>
          <ContentRenderer :value="doc" />
        </ContentDoc>
        <AtomsMoButton text="Go back" action="goBack" />
      </LayoutMoContainer>
    </section>
  </div>
</template>

<script setup>
const convertToLocaleDateString = useConvertToLocaleDateString

</script>

<style lang="scss">
.page {
  @apply py-16;
}
.blog-detail {
  h1, h2, h3, p, span, li, a {
    @apply dark:text-white;
  }
  p {
    @apply text-xl mb-4;
  }
  a {
    text-decoration: underline;
  }
  h1 {
    @apply text-5xl font-bold mb-8 font-display;
  }
  h2 {
    @apply mt-12 mb-4 text-2xl font-bold shadow-none;
  }
  h2 a {
    @apply no-underline;
    text-shadow: none;
  }
  h3 {
    @apply mt-8 mb-4 text-lg font-bold;
  }
  pre code {
    @apply block p-4 overflow-x-auto;
  }
  code {
    @apply text-gray-200 p-2 my-4 shadow-lg bg-black bg-opacity-80;
    border-radius: 5px;
  }
  li {
    @apply list-disc ml-5;
  }
}



</style>