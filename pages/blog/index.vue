<template>
  <MoContainer>
    <MoGrid grid-columns="3">
      <div>
        <h1 class="text-2xl text-white">Blog Page</h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi distinctio doloribus est nostrum officiis porro quae recusandae sit soluta! Aut ducimus nam possimus quod? Adipisci aliquid asperiores cumque dolorum ea eius facilis fugit ipsum laborum natus officia, pariatur quas quasi quibusdam, quidem sint ut, velit voluptas. Ab, exercitationem quae?</p>
      </div>
    </MoGrid>
  </MoContainer>
</template>
<script>
import MoContainer from "~/components/layout/MoContainer"
import MoGrid from "../../components/layout/MoGrid";

export default {
  components: {
    MoGrid,
    MoContainer
  }
}
</script>