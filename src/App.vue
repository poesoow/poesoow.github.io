<template lang="ko">
    <NavMenu 
      :isDark="isDark" 
      @dark="toggleDark()"
      :theme="appTheme"
      :colorTheme="colorTheme"
      @changeTheme="chageTheme($event)"
      :langList="langList[lang]" 
      @lang="lang = $event"
      :loc="loc"
      @updateLoc="updateLoc()" />

    <!-- app.vue 에서만 [appTheme]으로 들어가고 다른 페이지에서는 [theme]으로 작동 -->
    <div :class="colorTheme[appTheme] && colorTheme[appTheme].back" class="fixed w-[100%] h-1.5 z-50 top-0"></div>

    <router-view 
      :langList="langList[lang]"  
      :theme="appTheme"
      :colorTheme="colorTheme"
      :loc="loc" />
    <Footer />

</template>

<script>
  import colorthemeJson from '@/assets/themecolor.json'
  import Language from '@/assets/language.json'
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
        // 테마생성
        appTheme: 'default',
        colorTheme: colorthemeJson,
        // 다국어지원
        lang: 0,
        langList: Language,
        // 포트폴리오 home, portfolio 차이 두기 위해서
        loc: window.location.href
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
      },
      chageTheme(string) {
        this.appTheme = string
      },
      updateLoc(){
        this.loc = window.location.href
      }
    },
    mounted() {
      this.FontStyle = localStorage.getItem("font")
      document.querySelector("body").classList.add(this.FontStyle)
      // 화면 로딩 되면, lang 값을 스토리지 language 값으로 넣음
      this.lang = localStorage.getItem("language")
      this.appTheme = localStorage.getItem('theme')
    },

  }
</script>

<style>

</style>