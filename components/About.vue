<template>
  <div>
    <section
      class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center"
    >
      <div
        class="
          bg-white
          dark:bg-gray-800
          lg:mx-8
          lg:flex
          lg:max-w-5xl
          lg:shadow-lg
          lg:rounded-lg
        "
      >
        <div class="lg:w-1/2">
          <!-- <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"></div> -->
          <div
            class="h-64 bg-cover lg:rounded-lg lg:h-full"
            style="
              background-position: center;
              background-image: url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
            "
          ></div>
          <!-- <img class="h-64 bg-cover bg-center lg:rounded-lg lg:h-full" src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""> -->
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          >
            This is
            <span class="text-blue-500 dark:text-indigo-400">Us</span>
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>

          <div class="mt-8 inline-flex group">
            <!-- <button
              href="#"
              class="
                px-5
                py-2
                font-semibold
                text-gray-100
                transition-colors
                duration-200
                transform
                bg-gray-900
                rounded-md
                hover:bg-gray-700
              "
              > -->

			<button class=" bg-gray-900 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
				<!-- <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> -->
				<span class="text-white">start with us</span>
				<svg class="animation-wiggle ml-3 w-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="#FFFFFF">
					<path d="M14 5.3417969C13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188L13.207031 5.7226562C12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188L17.070312 11L4 11C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13L17.070312 13L13.207031 16.863281C12.816031 17.254281 12.816031 17.887344 13.207031 18.277344L13.292969 18.363281C13.683969 18.754281 14.317031 18.754281 14.707031 18.363281L20.363281 12.707031C20.754281 12.316031 20.754281 11.682969 20.363281 11.292969L14.707031 5.6367188C14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" fill="#FFFFFF" />
				</svg>
			</button>
            <!-- </button> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>