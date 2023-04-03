<template>

    <div class="fixed w-full py-[1.5%] bg-white z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]" >

      <!-- 페이지 진행률 -->
      <div :class="themecolor[appTheme] && themecolor[appTheme].back" class="fixed w-[100%] h-1.5 z-50 top-0"></div>

      <!-- nav 내용 -->
      <div class="max-w-7xl px-[2%] mx-auto flex justify-between items-center">
        <!-- 로고이미지 -->
        <button @click="$emit('menuindex', 'section-0')"><img src="http://via.placeholder.com/120x50" alt="logo" /></button>
        <!-- 태블릿 이상 상단 네비영역 -->
        <div class="basis-3/4 hidden md:block">
          <ul class="flex justify-around">
            <li v-for="(e, index) in NavList[0]" :key="e" class="relative">
              <button :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)" @click="$emit('menuindex', `section-${(index + 1)}`)">{{ langList.Nav[index] }}</button>
            </li>
          </ul>
        </div>
        <!-- 태블릿 이상 상단 우측 유틸영역 -->
        <div class="basis-1/6 md:basis-1/12 hidden md:block">
          <ul class="flex justify-start">
            <li  :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)" class="basis-1/4 text-center cursor-pointer">
              <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
            </li>
            <li  :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)" class="basis-1/4 text-center cursor-pointer relative group">
              <font-awesome-icon icon="globe" class="text-2xl" />
              <ul class="absolute left-0 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
                <li @click="$emit('lang', 0); Selectlang(0)" class="pt-2.5 hover:text-blue-500"><button>한국어</button></li>
                <li @click="$emit('lang', 1); Selectlang(1)" class="py-2.5 hover:text-blue-500"><button>영어</button></li>
              </ul>
            </li>
            <li  :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)" class="basis-1/4 text-center cursor-pointer" >
              <FontBox device="pc" :langList="langList[lang]"  />
            </li>
            <li  class="basis-1/4 text-center cursor-pointer relative group">
              <font-awesome-icon :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)" icon="fa-palette" class="text-2xl" />
              <!-- ★★★★★★★★★ props 활용해서 한번 다른 nav 외에도 적용해보기 특히 home -->
              <ul class="absolute -left-10 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-24 transition-all duration-500 overflow-hidden">
                <li><button class="pt-1 hover:text-slate-500" @click="appTheme = 'default'; selectTheme(appTheme)">기본</button></li>
                <li><button class="pt-1 hover:text-blue-500" @click="appTheme = 'blue'; selectTheme(appTheme)">블루</button></li>
                <li><button class="pt-1 hover:text-green-500" @click="appTheme = 'green'; selectTheme(appTheme)">그린</button></li>
              </ul>
            </li>
          </ul>
        </div>


        <!-- 모바일 메뉴 바 -->
        <div>
          <font-awesome-icon @click="isOpen = true" icon="bars" class="text-3xl cursor-pointer md:hidden" />
        </div>
        <!-- 모바일 우측 영역 네비영역 -->
        <div :class="isOpen && '!right-0'" class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden">
          <font-awesome-icon  @click="isOpen = false" icon="times" class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" />
          <div class="text-center mt-6">
            <img src="https://via.placeholder.com/150" alt="이미지" class="mx-auto rounded-full mb-4">
            <p v-html="langList.MainTxt[0]"></p>
          </div>
          <ul :class="!isDark && (themecolor[appTheme] && themecolor[appTheme].text)"  class="mt-12">
            <li v-for="(e, index) in NavList[0]" :key="e" class="py-4 border-b">
              <font-awesome-icon :icon="NavList[2][index]" class="mr-1" />
              <button @click="$emit('menuindex', `section-${(index + 1)}`)">{{ langList.Nav[index] }}</button>
            </li>
          </ul>
          <ul class="mt-2 flex gap-2">
            <li class="text-center cursor-pointer">
              <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
            </li>
            <li class="text-center cursor-pointer relative group">
              <font-awesome-icon icon="globe" class="text-2xl" />
              <ul class="absolute left-0 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
                <li @click="$emit('lang', 0); Selectlang(0)" class="pt-2.5 hover:text-blue-500"><button>한국어</button></li>
                <li @click="$emit('lang', 1); Selectlang(1)" class="py-2.5 hover:text-blue-500"><button>영어</button></li>
              </ul>
            </li>
            <li class="text-center cursor-pointer">
              <FontBox device="mobile" />
            </li>
            <li  class="text-center cursor-pointer relative group">
              <font-awesome-icon icon="fa-palette" class="text-2xl" />
              <!-- ★★★★★★★★★ props 활용해서 한번 다른 nav 외에도 적용해보기 특히 home -->
              <ul class="absolute -left-10 top-10 bg-white w-20 group-hover:border rounded-md h-0 group-hover:h-24 transition-all duration-500 overflow-hidden">
                <li><button class="pt-1 hover:text-slate-500" @click="appTheme = 'default'; selectTheme(appTheme)">기본</button></li>
                <li><button class="pt-1 hover:text-blue-500" @click="appTheme = 'blue'; selectTheme(appTheme)">블루</button></li>
                <li><button class="pt-1 hover:text-green-500" @click="appTheme = 'green'; selectTheme(appTheme)">그린</button></li>
              </ul>
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
        NavList : [["프로필", "스킬", "포트폴리오"], ["/profile", "/skill", "/portfolio"], ["user", "code", "folder-open"]],
        // 테마생성
      appTheme: 'default',
      themecolor: {
        "default": {
          "back": "bg-slate-500", "hover": "hover:bg-slate-500", "active": "bg-slate-400", "text": "text-black"
        },
        "blue": {
          "back": "bg-blue-500", "hover": "hover:bg-blue-500", "active": "bg-blue-400", "text": "text-blue-500"
        },
        "green": {
          "back": "bg-green-500", "hover": "hover:bg-green-500", "active": "bg-green-400", "text": "text-green-500"
        }
      }
      }
    },
    props: {
      isDark : Boolean,
      langList: Object,
    },
    methods: {
    // 새로고침해도 언어설정 그대로 이도록
    Selectlang(index) {
      localStorage.setItem("language", index)
    },
    selectTheme(theme){
      localStorage.setItem("theme", theme)
    }

    },
  }
</script>

<style>

</style>