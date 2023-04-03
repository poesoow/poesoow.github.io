<template>
  <div>

    <!-- nav 내용 -->
    <div class="bg-white max-w-xs px-[2%] fixed z-[40] top-40 right-0">
      <!-- 태블릿 이상 상단 네비영역 -->
      <div class="hidden md:block">
        <ul class="flex flex-col gap-4">
          <li v-for="(e, index) in scrollNavList[0]" :key="e" class="relative">
            <button @click="$emit('menuindex', `section-${(index + 1)}`)">{{ langList.Nav[index] }}</button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'scrollNav',
    data() {
      return {
        scrollNavList: [["프로필", "스킬", "포트폴리오"], ["/profile", "/skill", "/portfolio"], ["user", "code", "folder-open"]],
      }
    },
    props: {
    langList: Object,
  },
  }
</script>

<style>

</style>