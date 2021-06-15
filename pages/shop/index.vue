<template>
  <div>
    <div class="container mx-auto my-8 lg:grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <div class="hidden h-64 lg:block rounded-lg">
        <img class="h-full object-cover rounded-lg" src="@/assets/img/about.png" alt="" />
      </div>
      <div class="h-64 lg:block col-span-2 rounded-lg">
        <hooper class="hooper-carousel object-cover rounded-lg" v-bind="settings">
          <!-- <slide >
            <img class="h-full w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x256/?nature,water" alt="" />
          </slide>
          <slide>
            <img class="h-full w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x901/?nature,water" alt="" />
          </slide>
          <slide>
            <img class="h-full w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x902/?nature,water" alt="" />
          </slide> -->
          <slide v-for="slide in sliderImage" :key="slide.id">
            <nuxt-link to="1">
            <img class="h-full w-full object-cover rounded-lg" :src="slide.src" alt="" />
              <h2 class="absolute text-white bg-gray-700 text-center font-bold w-full bottom-0 bg-opacity-80 rounded-br-lg rounded-bl-lg h-10 pt-2">{{ slide.txt }}</h2>
            </nuxt-link>
          </slide>
        </hooper>
      </div>
    </div>

    <!-- items -->
    <div class="bg-yellow-400 py-10 bg-cover" :style="{ backgroundImage: `url(${require(`@/assets/img/bg-shop.jpg`)})` }">
      <div class="container mx-auto grid lg:grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center gap-y-4">
        <div class="mb-10 mx-4" v-for="laptop in laptops" :key="laptop.id"><shop-card :title="laptop.name" :price="laptop.price" :img="laptop.img"></shop-card></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

import mainSlider from '~/components/slider/mainSlider.vue'
export default {
  data() {
    return {
      settings: {
        centerMode: true,
        wheelControl: false,
        autoPlay: true,
        playSpeed: 2000,
      },
      sliderImage: [
        {
          id: 1,
          src: 'https://source.unsplash.com/1600x901/?keyboard-and-mouse',
          txt: 'This is the first slide image',
        },
        {
          id: 2,
          src: 'https://source.unsplash.com/1600x900/?computer-screen',
          txt: 'This the 2th slider image',
        },
        {
          id: 3,
          src: 'https://source.unsplash.com/1600x902/?computer-screen,',
          txt: 'And 4th slide',
        },
      ],
      laptops: [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          name: 'ASUS VivoBook 15 F515 Thin and Light Laptop, 15.6” FHD Display',
          price: 100,
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
          name: '2021 Newest ASUS VivoBook 15.6" FHD Touchscreen Laptop',
          price: 105,
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          name: 'Apple 13.3" MacBook Pro with Touch Bar, Intel Core i5 Quad-Core',
          price: 150,
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          name: 'ASUS ZenBook 13 Ultra-Slim Laptop 13.3” Full HD NanoEdge Bezel Display',
          price: 175,
        },
        {
          id: 5,
          img: 'https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          name: '2020 Apple MacBook Air with Apple M1 Chip',
          price: 123,
        },
        {
          id: 6,
          img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
          name: 'Apple 13.3 inches MacBook Air with Retina Display',
          price: 183,
        },
      ],
    }
  },
  components: { mainSlider, Hooper, Slide },
}
</script>

<style lang="css" scoped>
.hooper-carousel {
  height: 100%;
}
</style>