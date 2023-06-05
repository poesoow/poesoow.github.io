<template lang="ko">
  <div>
    <NavMenu
    :isDark="isDark"
    @dark="toggleDark(); toggleDarkStore()"
    />
    <router-view :isDark="isDark" />
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
        isDark: useDark(),
        toggleDark: useToggle(useDark())
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
      toggleDarkStore() {
        this.$store.state.isDark = !this.$store.state.isDark
      }
    },
    mounted() {
    },
  }
</script>

<style>

</style>