<template lang="ko">
  <NavMenu 
    :isDark="isDark" 
    @dark="toggleDark()"
    :theme="appTheme"
    @changeTheme="chageTheme($event)"  />
  <router-view />
  <Footer />
  <div :class="themecolor[appTheme] && themecolor[appTheme].back" class="fixed w-[100%] h-1.5 z-50 top-0"></div>
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
        // 테마생성
        appTheme: 'default',
        themecolor: {
          "default": {
            "back": "bg-slate-500", "hover": "hover:bg-slate-500", "active": "bg-slate-400", "text": "text-black"
          },
          "blue": {
            "back": "bg-blue-500", "hover": "hover:bg-blue-500", "active": "bg-blue-400", "text": "text-blue"
          },
          "green": {
            "back": "bg-green-500", "hover": "hover:bg-green-500", "active": "bg-green-400", "text": "text-green"
          }
        }
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