<template lang="ko">
  <div>
    <FontBox />
  </div>
  <NavMenu :isDark="isDark" @dark="toggleDark()" 
  @menuindex="SectionMove($event)"  />
  

  <!-- <div v-if="home !== 'http://localhost:8081/'">
    <router-view />
  </div>  -->

    <!-- 원페이지 -->
    <div ref="section-0">
      <Home />
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
// 0327 원페이지
// 원페이지로 만들기 위해
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Skill from '@/pages/Skill.vue'

import NavMenu from '@/components/nav.vue'
import Footer from '@/components/Footer.vue'
import FontBox from '@/components/FontBox.vue'
import { useDark, useToggle } from '@vueuse/core';
export default {
  name: 'App',
  data() {
    return {
      toggleDark: useToggle(useDark()),
      isDark: useDark(),
      FontStyle: "",
      MenuIndex: '',
      ArrayList: '',
    }
  },
  components: {
    NavMenu,
    Footer,
    FontBox,
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
  },

}
</script>

<style></style>