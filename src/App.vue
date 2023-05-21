<template lang="ko">
  <div>
    <NavMenu
    :isDark="isDark"
    @dark="toggleDark()"
    @updateLoc="updateLoc()"
    />
    <router-view
    :loc="loc"
    />
    <Footer />
    <TotopButton />
  </div>
</template>

<script>
  import NavMenu from '@/components/nav.vue'
  import Footer from '@/components/Footer.vue'
  import TotopButton from '@/components/TotopBtn.vue'

  import { useDark, useToggle } from '@vueuse/core';

  const Loc = window.location.href;

  export default {
    name: 'App',
    data() {
      return {
        toggleDark: useToggle(useDark()),
        isDark: useDark(),
        loc: Loc,
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
      updateLoc(){
        this.loc = window.location.href
      },
    },
    mounted() {
    },
  }
</script>

<style>

</style>