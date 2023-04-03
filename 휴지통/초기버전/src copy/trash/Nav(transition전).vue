<template>
  <!-- {{ menustate }} -->
  <div class="header relative">
    <!-- ul flex hideen 으로 수정 필요 -->
    <ul 
    :class="{menuon: menustate}"
    class="hidden bg-[#f7f7f7] fixed top-0 left-0 right-0 justify-end gap-[3%] lg:gap-[1%] py-[10px] px-[10%] sm:px-[4%] lg:px-[2%] text-xl sm:text-2xl text-center">
      <li class="mt-[5px] sm:mt-[0] w-[20%] sm:w-[15%] lg:w-[10%]">
        <router-link to="/">Home</router-link>
      </li>
      <li class="mt-[5px] sm:mt-[0] w-[20%] sm:w-[15%] lg:w-[10%]">
        <router-link to="/project">Project</router-link>
      </li>
      <li class="mt-[5px] sm:mt-[0] w-[25%] sm:w-[25%] lg:w-[15%]">
        <router-link to="/aboutme">About Me</router-link>
      </li>
    </ul>
  </div>
  <hamburgerMenu @click="f_menustate()" />
</template>

<script>
import hamburgerMenu from '@/components/HamburgerMenu.vue';

export default {
  name: "NavMenu",
  components: {
    hamburgerMenu,
  },
  data() {
    return {
      menustate: false 
    }
  },
  methods: {
    f_menustate() {
      return this.menustate = !this.menustate
    }
  },
}
</script>

<style scoped>  
.menuon{
  display: flex;
}
/* 메뉴 호버 시 밑줄  */
ul li{
  position: relative;
  width: max-content;
}
ul li:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #000;
  left: 0;
  bottom: 0;
  transition: 1s;
  transform: scaleX(0);
}
ul li:hover:after{
  transform: scaleX(1);
}

</style>