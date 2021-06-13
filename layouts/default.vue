<template>
  <div>
    <navbar />
    
    <Nuxt />
     <Footer></Footer>
     <scroll-top></scroll-top>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ScrollTop from '~/components/scrollTop.vue'

export default {
  components: { Navbar, Footer, ScrollTop },
}
</script>,
    
<style>

</style>
