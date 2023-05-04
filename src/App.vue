<template lang="ko">
  <div>
    <NavMenu 
      :isDark="isDark" 
      :loc="loc"
      :langList="langList[lang]" 
      @dark="toggleDark()"
      @lang="lang = $event"
      @updateLoc="updateLoc()" />


    <router-view 
      :langList="langList[lang]"  
      :loc="loc" />
    <Footer />
    <TotopButton />
  </div>
</template>

<script>
  import Language from '@/assets/language.json'
  import NavMenu from '@/components/nav.vue'
  import Footer from '@/components/Footer.vue'
  import TotopButton from '@/components/TotopBtn.vue'

  import FontBox from '@/components/FontBox.vue'
  import { useDark, useToggle } from '@vueuse/core';
  
  const Loc = window.location.href;

  export default {
    name: 'App',
    data() {
      return {
        toggleDark: useToggle(useDark()),
        isDark : useDark(),
        FontStyle: "",
        // 다국어지원
        lang: 0,
        langList: Language,
        // 포트폴리오 home, portfolio 차이 두기 위해서
        loc: Loc,
      }
    },
    components: {
      NavMenu,
      Footer,
      FontBox,
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
      this.FontStyle = localStorage.getItem("font")
      document.querySelector("body").classList.add(this.FontStyle)
      // 화면 로딩 되면, lang 값을 스토리지 language 값으로 넣음
      this.lang = localStorage.getItem("language")
    },
  }
</script>

<style>

</style>