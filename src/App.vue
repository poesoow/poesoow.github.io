<template lang="ko">
  <div>
    <NavMenu 
      :isDark="isDark" 
      :theme="appTheme"
      :colorTheme="colorTheme"
      :loc="loc"
      :langList="langList[lang]" 
      @dark="toggleDark()"
      @changeTheme="chageTheme($event)"
      @lang="lang = $event"
      @updateLoc="updateLoc()" />

    <!-- app.vue 에서만 [appTheme]으로 들어가고 다른 페이지에서는 [theme]으로 작동 
      빌드 후 테마색에 맞게 변화하는지 확인 필요
      (true && `w-[${scrollPercent}%]`) 로 class 바인딩하니까 되는 숫자도 있고 안되는 숫자있어서 style 바인딩으로 수정  -->
      <!-- :style="{width: `${scrollPercent}%`}" -->
    <div
      ref='el'
      :style="`width: ${scrollPercent}%`"
      :class="(colorTheme[appTheme] && colorTheme[appTheme].back)" 
      class="fixed h-1.5 z-[60] top-0 origin-top-left transition-transform duration-200 ease-out"></div>


    <router-view 
      :langList="langList[lang]"  
      :theme="appTheme"
      :colorTheme="colorTheme"
      :loc="loc" />
    <Footer />
    <!-- tailwindcss 테마적용위해 -->
    <div class="bg-slate-500 bg-blue-500 bg-green-500 
    hover:text-slate-500 hover:text-blue-500 hover:text-green-500 
    text-slate-400 text-blue-400 text-green-400"></div>
  </div>
</template>

<script>
  import colorthemeJson from '@/assets/themecolor.json'
  import Language from '@/assets/language.json'
  import NavMenu from '@/components/nav.vue'
  import Footer from '@/components/Footer.vue'
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
        // 테마생성
        appTheme: 'default',
        colorTheme: colorthemeJson,
        // 다국어지원
        lang: 0,
        langList: Language,
        // 포트폴리오 home, portfolio 차이 두기 위해서
        loc: Loc,
        // 꼭 스크롤 이벤트 성공시키기
        scrollPercent: 0,
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
      },
      scrollwatch(){
      window.addEventListener('scroll', function () {
        const posY = this.window.pageYOffset;
        const bodyHeight = this.document.querySelector('body').scrollHeight
        // const aa = this.document.querySelector('body').getBoundingClientRect()

        const current = posY / bodyHeight
        this.scrollPercent = Number(current * 100)
        // console.log(posY, bodyHeight, current)
        // console.log(aa)
        console.log(this.scrollPercent)
      });
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