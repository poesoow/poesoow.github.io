<template>
  <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]" >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="http://via.placeholder.com/120x50" alt="logo">
      </router-link>
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <li v-for="(e, index) in NavList[0]" :key="e" class="relative">
            <router-link :to="NavList[1][index]">{{ e }}</router-link>
          </li>
        </ul>
      </div>
      <div class="basis-1/6 md:basis-1/12 hidden md:block">
        <ul class="flex justify-between">
          <li class="basis-1/2 text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="basis-1/2 text-center cursor-pointer">
            <font-awesome-icon icon="globe" class="text-2xl" />
          </li>
        </ul>
      </div>
      <div>
        <font-awesome-icon @click="isOpen = true" icon="bars" class="text-3xl cursor-pointer md:hidden" />
      </div>
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
      </div>
    </div>
  </div>
</template>

<script>
  

  export default {
    name: "NavPage",
    data() {
      return {
        // 왼쪽 메뉴바 
        isOpen: false,
        NavList : [["프로필", "스킬", "포트폴리오"], ["/profile", "/skill", "/portfolio"], ["user", "code", "folder-open"]],
      }
    },
    props: {
      isDark : Boolean
    }
  }
</script>

<style>

</style>