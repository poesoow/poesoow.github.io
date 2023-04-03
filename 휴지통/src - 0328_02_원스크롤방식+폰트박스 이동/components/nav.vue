<template>
  <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]" >
    <div class="max-w-7xl mx-auto flex justify-between items-center">

      <!-- // 0327 원페이지 -->
        <button @click="$emit('menuindex', 'section-0')"><img src="http://via.placeholder.com/120x50" alt="logo" /></button>

      <!-- 태블릿 이상 상단 네비영역 -->
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <li v-for="(e, index) in NavList[0]" :key="e" class="relative">
            <button @click="$emit('menuindex', `section-${(index + 1)}`)">{{ e }}</button>
          </li>
        </ul>
      </div>
      
      <!-- 태블릿 이상 상단 우측 유틸영역 -->
      <div class="basis-1/6 md:basis-1/12 hidden md:block">
        <ul class="flex justify-between">
          <li class="basis-1/3 text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="basis-1/3 text-center cursor-pointer">
            <font-awesome-icon icon="globe" class="text-2xl" />
          </li>
          <li class="basis-1/3 text-center cursor-pointer" >
            <FontBox device="pc" />
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
          <p>프론트엔드 개발자 홍길동</p>
        </div>
        <ul class="mt-12">
          <li v-for="(e, index) in NavList[0]" :key="e" class="py-4 border-b">
            <font-awesome-icon :icon="NavList[2][index]" class="mr-1" />
            <router-link :to="NavList[1][index]">{{ e }}</router-link>
          </li>
        </ul>
        <ul class="mt-2 flex gap-2">
          <li class="text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="text-center cursor-pointer">
            <font-awesome-icon icon="globe" class="text-2xl" />
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
        NavList : [["프로필", "스킬", "포트폴리오"], ["/profile", "/skill", "/portfolio"], ["user", "code", "folder-open"]],
      }
    },
    props: {
      isDark : Boolean,
    }
  }
</script>

<style>

</style>