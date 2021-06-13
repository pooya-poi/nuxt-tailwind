<template>
  <div>
    <div class="bg-gray-300">
      <div class="container mx-auto px-10 py-4 xs:text-xs ">
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
          pb-20
        "
      >
      
        <card
        v-for="city in cities" :key="city.id"
          :img="city.img"
          :city = "city.name"
          :price="city.price"
        />
        
      </div>
    </div>
  </div>
</template>

<script>

// import Card from './Card.vue'
export default {
  data() {
    return {
      
      cities: [
        {
          id:1,
          img: 'tehran.jpg',
          name: 'tehran',
          price: 100
        },
        {
          id:2,
          img: 'hamedan.jpg',
          name: 'hamedan',
          price: 105
        },
        {
          id:3,
          img: 'tabriz.jpg',
          name: 'tabriz',
          price: 150
        },
        {
          id:4,
          img: 'rasht.jpg',
          name: 'rasht',
          price: 175
        },
        {
          id:5,
          img: 'ahvaz.jpg',
          name: 'ahvaz',
          price: 123
        },
        {
          id:6,
          img: 'shiraz.jpg',
          name: 'shiraz',
          price: 183
        },
      ],
    }
  },
  
 
}
</script>


<style lang="scss" scoped>
</style>