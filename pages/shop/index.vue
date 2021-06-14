<template>
  <div>
    <div class="container sm:mx-auto justify-center lg:flex mt-10">
      <!-- <div class="lg:flex  w-1/4 ">
        <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
        </div>
        <main-slider class="w-3/4"></main-slider>
      </div> -->
      <div class="border-black border-solid border-2 w-3/4 h-52"></div>
      <br class="mx-3" />
      <div class="border-black border-solid border-2 w-1/4 h-52 flex flex-col px-1 py-1">
	  	<div class="border-yellow-400 border-solid border-2 w-full h-1/2"></div>
		  <br class="mb-1">
	  	<div class="border-yellow-400 border-solid border-2 w-full h-1/2"></div>
	  </div>
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