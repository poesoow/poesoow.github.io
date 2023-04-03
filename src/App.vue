<template lang="ko">
  <!-- {{themecolor["default"]}} -->
  <!-- :theme 은 부모컴포넌트인 App.vue 에서 사용 하는 것이 아닌 자식 컴포넌트인 nav.vue 에서 입력해야 볼 수 있음
  {{theme}} -->
  <scrollNav @menuindex="SectionMove($event)" :langList="langList[lang]" />

  
  <NavMenu :isDark="isDark" @dark="toggleDark()" 
  @menuindex="SectionMove($event)" 
  @lang="lang = $event" :langList="langList[lang]" />



  <!-- <div>
    <router-view />
  </div>  -->

    <!-- 원페이지 -->
    <div ref="section-0">
      <Home :langList="langList[lang]" />
    </div>
    <div ref="section-1">
      <Profile />
    </div> 
    <div ref="section-2">
      <Skill />
    </div> 
    <div ref="section-3">
      <Portfolio />
    </div>
  <!-- </div> -->
  <Footer />
  
</template>

<script>

import scrollNav from './components/scrollNav.vue'

// 0327 원페이지
// 원페이지로 만들기 위해(component폴더 있는걸로 나중에 바꾸도록 하기)
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Skill from '@/pages/Skill.vue'

import NavMenu from '@/components/nav.vue'
import Footer from '@/components/Footer.vue'

import { useDark, useToggle } from '@vueuse/core';

// 언어설정
import Language from '@/assets/language.json'



export default {
  name: 'App',
  data() {
    return {
      toggleDark: useToggle(useDark()),
      isDark: useDark(),
      FontStyle: "",
      MenuIndex: '',
      ArrayList: '',
      // 언어설정
      lang: 0,
      langList: Language,
      // 테마설정
      theme: 'default',
      
    }
  },
  components: {
    scrollNav,
    NavMenu,
    Footer,
    Home,
    Profile,
    Portfolio,
    Skill,
  },
  methods: {
    DarkMode() {
      document.querySelector("html").classList.toggle("dark")
    },
    // 0327 원페이지
    SectionMove(index) {
      this.MenuIndex = index;
      // getBoundingClientRect 을 사용할때 컴포넌트에 바로 사용하면 안됨
      const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
      // console.log(rect)
      const offset = rect.top + window.scrollY - 60;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    },

  },
  mounted() {
    this.FontStyle = localStorage.getItem("font")
    document.querySelector("body").classList.add(this.FontStyle)
    // 0327 원페이지
    // console.log(this.$refs)
    this.ArrayList = this.$refs;
    // 0330 화면 로딩 되면, lang 값을 스토리지 language 값으로 넣음
    this.lang = localStorage.getItem("language")
    // ★★★★★★★★★
    // lang 과 다르게 props로 올린값이 아니라서 localstorage 에 저장은 되었으나 새로고침하면 바뀜 
    this.theme = localStorage.getItem("theme")
  },
}
</script>
