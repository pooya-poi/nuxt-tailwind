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

    <div class="container mx-auto lg:grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">



      <div class="hidden h-48 lg:block border-black border-solid border-2 ">left - Bottom</div>
      <div class="sm:mx-auto h-48 lg:mx-0 border-black border-solid border-2 col-span-2">right - Top</div>


	  
    </div>




  </div>
</template>

<script>
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
    }
  },
  components: { mainSlider },
}
</script>

<style lang="scss" scoped>
</style>