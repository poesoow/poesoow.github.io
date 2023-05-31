<template lang="ko">
  <div>
    <NavMenu
    :isDark="isDark"
    @dark="toggleDark()"
    />
    <router-view />
    <Footer />
    <TotopButton />
  </div>
</template>

<script>
  import NavMenu from '@/components/nav.vue'
  import Footer from '@/components/Footer.vue'
  import TotopButton from '@/components/TotopBtn.vue'

  import { useDark, useToggle } from '@vueuse/core';

  export default {
    name: 'App',
    data() {
      return {
        toggleDark: useToggle(useDark()),
        isDark: useDark(),
      }
    },
    components: {
      NavMenu,
      Footer,
      TotopButton
    },
    methods:{
      DarkMode(){
        document.querySelector("html").classList.toggle("dark")
      },
    },
    mounted() {
    },
  }
</script>

<style>

</style>