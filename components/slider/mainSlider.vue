<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="slider">
      <div><img class="w-60" src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></div>
      <div><img class="w-60" src="https://source.unsplash.com/1600x901/?nature,water" alt="" /></div>
      <div><img class="w-60" src="https://source.unsplash.com/1600x902/?nature,water" alt="" /></div>
      <div><img class="w-60" src="https://source.unsplash.com/1600x903/?nature,water" alt="" /></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data() {
    return {
      settings: {
     "dots": true,
  "focusOnSelect": true,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 3,
  "touchThreshold": 5
      },
    }
  },
  components: { VueSlickCarousel },
}
</script>

<style lang="css" scoped>
.slider{
  border: 2px red solid;
}
</style>