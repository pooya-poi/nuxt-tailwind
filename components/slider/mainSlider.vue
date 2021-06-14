<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="container slider lg:flex ">
      <div class="bg-gray-700 text-white text-center h-64" v-for="img in sliderImage" :key="img.id">
        <div class="sliderbg w-full h-full object-contain object-center bg-no-repeat" :src="img.src" :style="{ backgroundImage: `url(${img.src})`, backgroundRepeate: 'no-repeate' }"></div>
        <h1 class="text-black">{{ img.txt }}</h1>
      </div>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
      </template>
      <template #nextArrow="arrowOption">
        <div class="custom-arrow">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
      </template>
    </VueSlickCarousel>
    <br />
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
  props: {
    slideImg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      sliderImage: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1614149484421-dcd8185578cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
          txt: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1602707133312-c1880a9e0e1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          txt: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          txt: 'Lorem ipsum dolor sit amet.',
        },
      ],
    }
  },
  components: { VueSlickCarousel},
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
.sliderbg {
  background-position: center;
}
</style>