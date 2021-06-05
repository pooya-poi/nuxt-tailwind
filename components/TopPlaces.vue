<template>
  <div>
    <div class="bg-gray-300">
      <div class="container mx-auto px-10 py-4 xs:text-xs">
        <h2 class="font-semibold">Popular destination</h2>
        <p class="text-gray-600">
          A selection of greate woek-friendly cities with lots to see and
          explore.
        </p>
      </div>
      <div
        class="
          container
          mx-auto
          grid
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
        "
      >
        <!-- <card
          imgUrl="https://images.unsplash.com/photo-1473210630848-e12656228f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=832&q=80"
        />
        <card />
        <card />
        <card />
        <card />
        <card /> -->
        <card v-for="city in cities " :key='city.id'/>
        <!-- <ul>
          <li v-for="city in cities" :key='city.id'>{{city.name}}</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'
export default {
  data: {
    cities: [
      {
        id:1,
        url: 'https://images.unsplash.com/photo-1473210630848-e12656228f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=832&q=80',
        name: 'tehran',
        price: '500'
      },
    ],
  },
}
</script>


<style lang="scss" scoped>
</style>