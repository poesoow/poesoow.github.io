<template lang="ko">
  <div>
    <NavMenu 
      :isDark="isDark" 
      :loc="loc"
      :langList="langList[lang]" 
      @dark="toggleDark()"
      @lang="lang = $event"
      @updateLoc="updateLoc()" />


    <div
      ref='el'
      :style="`width: ${scrollPercent}%`"
      class="fixed h-1.5 z-[60] top-0 origin-top-left transition-transform duration-200 ease-out"></div>


    <router-view 
      :langList="langList[lang]"  
      :loc="loc" />
    <Footer />
  </div>
</template>

<script>
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
    },
  }
</script>

<style>

</style>