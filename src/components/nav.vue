<template>
  <div
    class="w-full px-[2%] fixed top-1.5 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]">
    <div class="max-w-7xl mx-auto flex justify-between items-center">

      <div @click="$emit('updateLoc'); focusOn = false; num = null">
        <router-link to="/">
          <img src="http://via.placeholder.com/120x50" alt="logo">
        </router-link>
      </div>
      

      <!-- 태블릿 이상 상단 네비영역 -->
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <li 
            @click="$emit('updateLoc'); menuClick(index)"
            v-for="(e, index) in NavList[0]" :key="e" class="relative">
            <!-- 색 분홍색에서 after로 아래에 줄 그어지도록 바꾸기 -->
            <router-link :class="(focusOn && num===index) && 'fcsOnCls'" class="fcsOffCls" :to="NavList[1][index]">{{  langList.Nav[index]  }}</router-link>
          </li>
        </ul>
      </div>

      <!-- 태블릿 이상 상단 우측 유틸영역 -->
      <div class="basis-1/6 md:basis-1/12 hidden md:block">
        <ul class="flex justify-between">
          <li class="basis-1/4 text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="basis-1/4 text-center cursor-pointer relative group">
            <font-awesome-icon icon="globe" class="text-2xl" />
            <ul class="absolute left-0 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
              <li  @click="$emit('lang', 0); Selectlang(0)" class="pt-2.5"><button>한국어</button></li>
              <li  @click="$emit('lang', 1); Selectlang(1)" class="py-2.5"><button>영어</button></li>
            </ul>
          </li>
          <li class="basis-1/4 text-center cursor-pointer">
            <FontBox device="pc" />
          </li>
        </ul>
      </div>



      <!-- 모바일 메뉴 바 -->
      <div>
        <font-awesome-icon @click="isOpen = true" icon="bars" class="text-3xl cursor-pointer md:hidden" />
      </div>

      <!-- 모바일 우측 영역 네비영역 -->
      <div :class="isOpen && '!right-0'"
        class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden">
        <font-awesome-icon @click="isOpen = false" icon="times"
          class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" />
        <div class="text-center mt-6">
          <img src="https://via.placeholder.com/150" alt="이미지" class="mx-auto rounded-full mb-4">
          <p>프론트엔드 개발자 홍길동</p>
        </div>
        <ul class="mt-12">
          <li v-for="(e, index) in NavList[0]" :key="e" class="py-4 border-b">
            <font-awesome-icon :icon="NavList[2][index]" class="mr-1" />
            <router-link :to="NavList[1][index]">{{ langList.Nav[index] }}</router-link>
          </li>
        </ul>
        <ul class="mt-2 flex gap-2">
          <li class="text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="text-center cursor-pointer relative group">
            <font-awesome-icon icon="globe" class="text-2xl" />
            <ul class="absolute left-0 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
              <li @click="$emit('lang', 0); Selectlang(0)" class="pt-2.5"><button>한국어</button></li>
              <li @click="$emit('lang', 1); Selectlang(1)" class="py-2.5"><button>영어</button></li>
            </ul>
          </li>
          <li class="text-center cursor-pointer">
            <FontBox device="mobile" />
          </li>
         
        </ul>
      </div>



    </div>
  </div>
</template>

<script>
import FontBox from '@/components/FontBox.vue'

export default {
  name: "NavPage",
  components: {
    FontBox,
    
  },
  data() {
    return {
      // 오른쪽 메뉴바 
      isOpen: false,
      NavList: [["프로필", "스킬", "포트폴리오"], ["/profile", "/skill", "/portfolio"], ["user", "code", "folder-open"]],
      focusOn: false,
      num: null,
    }
  },
  props: {
    isDark: Boolean,
    theme: String,
    langList: Object,
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
    // 새로고침해도 언어설정 그대로 이도록
    Selectlang(index) {
      localStorage.setItem("language", index)
    },
  },
}
</script>

<style></style>