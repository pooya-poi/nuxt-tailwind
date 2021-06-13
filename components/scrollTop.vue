<template>
  <div class="transition ease-in duration-1000">
    <div v-show="visible" id="scrollTopBtn" class="hover:bg-gray-200 hover:opacity-100 bg-white text-blue-600 shadow-2xl cursor-pointer fixed bottom-0 opacity-80 rounded-tr-md rounded-tl-md w-10 ml-5 py-2 -x-4">
      <a @click="scrollTop">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    scrollTop: function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 250
      //   document.querySelector('#scrollTopBtn').classList.add('hidden')
    },
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style lang="css" scoped>
.fade {
  transition: all ease 0.5s;
}
</style>