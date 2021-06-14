<template>
  <div>
    <!-- <div class="container sm:mx-auto justify-center lg:flex mt-10"> -->
    <!-- <div class="grid lg:grid-cols-2 2xl:grid-cols-5">
      
      <div class="border-black border-solid border-2 w-3/4 h-52"></div>
      <br class="mx-3" />
      <div class="border-black border-solid border-2 w-1/4 h-52 flex flex-col px-1 py-1">
	  	<div class="border-yellow-400 border-solid border-2 w-full h-1/2"></div>
		  <br class="mb-1">
	  	<div class="border-yellow-400 border-solid border-2 w-full h-1/2"></div>
	  </div>
    </div> -->

    <div class="container mx-auto lg:grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <div class="hidden h-64 lg:block border-black border-solid border-2">
        <!-- left - Bottom -->
		<img class="h-full object-cover" src="@/assets/img/about.png" alt="">
      </div>
      <div class="sm:mx-auto h-64 lg:mx-0 border-black border-solid border-2 col-span-2">
        <!-- right - Top -->
        <!-- <main-slider></main-slider> -->

        <hooper>
          <slide>
            <!-- <div class="bg-cover" style="background-image: url('https://source.unsplash.com/1600x901/?nature,water')"></div> -->
			<img class="h-full object-cover" src="https://source.unsplash.com/1600x901/?nature,water" alt="" />
          </slide>
          <slide>
            <img class="h-full object-cover" src="https://source.unsplash.com/1600x901/?nature,water" alt="" />
          </slide>
          ...
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
      sliderImage: [
        {
          id: 1,
          src: 'https://source.unsplash.com/1600x901/?keyboard-and-mouse',
          txt: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          src: 'https://source.unsplash.com/1600x900/?computer-screen',
          txt: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 3,
          src: 'https://source.unsplash.com/1600x902/?computer-screen,',
          txt: 'Lorem ipsum dolor sit amet.',
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

<style lang="scss" scoped>
</style>