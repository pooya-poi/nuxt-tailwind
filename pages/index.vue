<template>

  <div class="bg-gray-300 md:bg-yellow-300">
  <hero />
  <top-places />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import TopPlaces from '~/components/TopPlaces.vue'

export default {
  components: { TopPlaces, Hero },}
</script>


<style lang="scss" scoped>
</style>