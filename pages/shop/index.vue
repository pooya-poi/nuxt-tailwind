<template>
  <div>
    shop page
    <div class="container mx-auto">
		<div v-for="img in sliderImage" :key="img.id">
			<p>
			{{ img.txt }}

			</p>
		</div>
      <!-- <main-slider></main-slider> -->
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
          src: 'https://source.unsplash.com/1600x901/?nature,water',
		  txt:'Lorem ipsum dolor sit amet.'
        },
        {
          id: 2,
          src: 'https://source.unsplash.com/1600x900/?nature,water',
		  txt:'Lorem ipsum dolor sit amet.'
        },
        {
          id: 3,
          src: 'https://source.unsplash.com/1600x902/?nature,water',
		  txt:'Lorem ipsum dolor sit amet.'
        },
      ],
    }
  },
  components: { mainSlider },
}
</script>

<style lang="scss" scoped>
</style>