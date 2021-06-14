<template>
  <div class="bg-white shadow-md rounded-lg hover:shadow-xl transition transform hover:-translate-y-1 ease-linear duration-100">
    <img class="rounded-tl-lg rounded-tr-lg" :src="`${img}`" alt="" />
    <h2 class="text-lg text-gray-700 dark:text-gray-200 md:text-xl mt-4 mx-1">
      {{ title }}
    </h2>
    <div class="flex justify-between mx-3 mt-8 pb-3">
      <span class="text-lg flex flex-col font-bold text-gray-700 dark:text-gray-200 md:text-xl">
        <span class=" "><span class="bg-red-500 text-white px-1 py-1 rounded-full mx-1 text-sm">50%</span>${{ price }} </span>
        <span class="line-through text-gray-400">$5555</span>
      </span>
      <add-to-cart-btn></add-to-cart-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
    img: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>