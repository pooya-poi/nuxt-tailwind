<template>
  <div class="bg-gray-300 md:bg-yellow-300">
    <hero />
    <top-places />
   
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Hero from '~/components/Hero.vue'
import TopPlaces from '~/components/TopPlaces.vue'

export default {
  components: { TopPlaces, Hero, Footer },
}
</script>


<style lang="scss" scoped>
</style>