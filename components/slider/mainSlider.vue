<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="container slider lg:flex lg:justify-center">
      <!-- <div><img class="" src="https://source.unsplash.com/1600x900/?nature,water" alt="" /></div>
      <div><img class="" src="https://source.unsplash.com/1600x901/?nature,water" alt="" /></div>
      <div><img class="" src="https://source.unsplash.com/1600x902/?nature,water" alt="" /></div>
      <div><img class="" src="https://source.unsplash.com/1600x903/?nature,water" alt="" /></div> -->
      <div class="bg-gray-700 text-white text-center h-40"><h1>1</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>2</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>3</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>4</h1></div>
      <template #prevArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>
      <template #nextArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>
    </VueSlickCarousel>
<br>
    <!-- <VueSlickCarousel :arrows="true" @init="onInitCarousel">
      <div class="bg-gray-700 text-white text-center h-40"><h1>1</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>2</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>3</h1></div>
      <div class="bg-gray-700 text-white text-center h-40"><h1>4</h1></div>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
      </template>
      /*...*/
      <template #customPaging="page">
        <div class="custom-dot">
          {{ page }}
        </div>
      </template>
    </VueSlickCarousel> -->

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
        arrows:true,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  components: { VueSlickCarousel },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style lang="css" scoped>
.slider {
  border: 2px red solid;
}
/* .slick-arrow.slick-prev.slick-disabled{
  background: #000000ad !important;
color: black !important;
} */

.custom-arrow.slick-arrow.slick-prev {
    z-index: 99;
}

.slick-arrow.slick-prev {
  left: 0;
}
.slick-arrow.slick-next {
  right: 0;
}
</style>