<template>
  <div class="page">
    <section id="start" class="py-16 blog-detail">
      <LayoutMoContainer is-narrow>
        <ContentDoc v-slot="{ doc }">
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
    @apply mb-4;
  }
  a {
    text-decoration: underline;
  }
  h1 {
    @apply text-5xl font-bold mb-8 font-display;
  }
  h2 {
    @apply mt-12 mb-4 text-2xl font-bold;
  }
  h3 {
    @apply mt-8 mb-4 text-lg font-bold;
  }
  pre code {
    @apply block p-8 overflow-x-auto;
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