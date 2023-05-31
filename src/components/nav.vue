<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    class="w-full px-[2%] fixed top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]"
    :class="show ? 'visible opacity-100' : 'invisible opacity-0'">
    <div class="max-w-7xl mx-auto flex justify-between items-center">

      <div @click="focusOn = false; num = null">
        <router-link to="/">
          <div @mousemove="shine" class="text-2xl h-12 leading-[48px] logo highlight">
            WooSeop
          </div>
        </router-link>
      </div>


      <!-- 태블릿 이상 상단 네비영역 -->
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <li
            @click="$emit('updateLoc'); menuClick(index)"
            v-for="(nav, index) in NavList[0]" :key="nav"
            class="relative hover:text-[#42b983]">
            <router-link :class="(focusOn && num===index) && 'fcsOnCls'" class="fcsOffCls h-full block" :to="NavList[1][index]">{{ nav }}</router-link>
          </li>
        </ul>
      </div>

      <!-- 태블릿 이상 상단 우측 유틸영역 -->
      <div class="basis-1/6 md:basis-1/12 hidden md:block">
        <ul class="flex justify-end">
          <li class="basis-full flex flex-col items-center justify-center">
            <input type="checkbox" id="darkmode-toggle">
            <label for="darkmode-toggle"  @click="$emit('dark')"></label>
          </li>
        </ul>
      </div>



      <!-- 모바일 메뉴 바 -->
      <div class="mr-4">
        <font-awesome-icon @click="isOpen = true" icon="bars" class="text-3xl cursor-pointer md:hidden" />
      </div>

      <!-- 모바일 우측 영역 네비영역 -->
      <div :class="isOpen && '!right-0'"
        class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden">
        <font-awesome-icon @click="isOpen = false" icon="times"
          class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" />
        <div class="text-center mt-6">
           <router-link to="/">
            <div @mousemove="shine" class="text-xl leading-[48px] logo">
              WooSeop
            </div>
          </router-link>
        </div>
        <ul class="">
          <li @click="isOpen = false" v-for="(nav, index) in NavList[0]" :key="nav" class="border-b">
            <router-link :to="NavList[1][index]" class="py-4 block">
              <font-awesome-icon :icon="NavList[2][index]" class="mr-1" />{{ nav }}
            </router-link>
          </li>
        </ul>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: "NavPage",
  components: {

  },
  data() {
    return {
      // 오른쪽 메뉴바
      isOpen: false,
      NavList: [["프로필", "스킬", "작업", "연락/묻고답하기"], ["/profile", "/skill", "/work", "/contact"], ["user", "code", "folder-open", "message"]],
      focusOn: false,
      num: null,
      show: false
    }
  },
  props: {
    isDark: Boolean,
  },
  methods: {
    menuClick(i){
      if(this.focusOn === false){
        this.focusOn = !this.focusOn
        this.num = i
      }else{
        this.num = i
      }
    },
    shine(event){
      const highlight = document.querySelector('.highlight')

      const x = event.pageX - highlight.offsetLeft;
      const y = event.pageY - highlight.offsetTop - visualViewport.pageTop;

      highlight.style.setProperty('--x', x + 'px');
      highlight.style.setProperty('--y', y + 'px');
    },
    updateScrollNav() {
      if (window.scrollY == 0) {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  mounted() {
    const darkInput = document.querySelector('#darkmode-toggle')
    darkInput.checked = this.isDark

    window.addEventListener('scroll', this.updateScrollNav)
  },

}
</script>

<style scoped>
.logo{
  display: flex;
  position: relative;
  border-radius: 6px;
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  overflow: hidden;
}

.logo.highlight:after {
  content: ' ';
  width: 100%;
  height: 100%;
  position: absolute;
}

.logo.highlight:hover:after {
  border: 1px solid red;
  content: ' ';
  width: 250%;
  height: 250%;
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  opacity: 1;
  background: radial-gradient(circle closest-side, rgba(66, 185, 131, 0.4), transparent);
  transition: opacity 0.5s ease-out;
}



label {
  width: 80px;
  height: 24px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0,0,0, 0.4),  inset 0px -5px 15px rgba(255,255,255, 0.4);
  cursor: pointer;
  transition: 0.3s;
}

label:after {
  content: '';
  width: 22px;
  height: 22px;
  position: absolute;
  top: 1px;
  left: 1px;
  background: linear-gradient(180deg, #ffcc89, #d8860d);
  border-radius: 32px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.2);
  transition: 0.3s;
}

input{
  width: 0;
  height: 0;
  visibility: hidden;
}

input:checked + label{
  background: #242424;
}

input:checked + label:after {
  left: 100%;
  transform: translateX(-100%);
  background: linear-gradient(180deg, #777, #3a3a3a);
}

label:active:after {
  width: 40px;
}




</style>