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
          img: 'https://images.unsplash.com/photo-1473210630848-e12656228f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=832&q=80',
          name: 'tehran',
          price: 100
        },
        {
          id:2,
          img: 'https://images.unsplash.com/photo-1551023070-ea4ff6cfc40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          name: 'hamedan',
          price: 105
        },
        {
          id:3,
          img: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
          name: 'tabriz',
          price: 150
        },
        {
          id:4,
          img: 'https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG5hdHVyYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'rasht',
          price: 175
        },
        {
          id:5,
          img: 'https://images.unsplash.com/photo-1557206809-2a9a41912062?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          name: 'ahvaz',
          price: 123
        },
        {
          id:6,
          img: 'https://images.unsplash.com/photo-1615752593016-3af794df7835?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
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