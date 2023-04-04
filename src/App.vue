<template lang="ko">
  <NavMenu :isDark="isDark" @dark="toggleDark()" />
  <router-view />
  <Footer />
</template>

<script>
  import NavMenu from '@/components/nav.vue'
  import Footer from '@/components/Footer.vue'
  import FontBox from '@/components/FontBox.vue'
  import { useDark, useToggle } from '@vueuse/core';
  export default {
    name: 'App',
    data() {
      return {
        toggleDark: useToggle(useDark()),
        isDark : useDark(),
        FontStyle: "",
      }
    },
    components: {
      NavMenu,
      Footer,
      FontBox
    },
    methods:{
      DarkMode(){
        document.querySelector("html").classList.toggle("dark")
      }
    },
    mounted() {
      this.FontStyle = localStorage.getItem("font")
      document.querySelector("body").classList.add(this.FontStyle)
    },

  }
</script>

<style>

</style>