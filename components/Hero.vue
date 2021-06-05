<template>
	 <div class="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">

		<div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">

			<div class="xl:max-w-xl">
				<img class="h-10" src="@/assets/img/logo.svg" alt="" />
				<img class="mt-6 rounded-lg shadow-lg lg:hidden" src="@/assets/img/bg.jpg" alt="" />
				<h1 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
					Lorem ipsum dolor sit amet.
					<br class="hidden lg:inline">
					<span class="text-purple-500">Lorem, ipsum dolor.</span>
				</h1>
				<p class="mt-4 font-thin text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi
					perspiciatis architecto similique officia ratione fugit voluptatem
					vero.
				</p>
				<div class="mt-3">
					<a href="#">

					<button  class="btn-primary">read more</button>
					</a>
					
				</div>
			</div>


			
		</div>
		<div class="hidden relative lg:block 2xl:col-span-3">
			<img class="absolute inset-0 w-full h-full object-cover object-center" src="@/assets/img/bg.jpg" alt="" />
		</div>

	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

</style>