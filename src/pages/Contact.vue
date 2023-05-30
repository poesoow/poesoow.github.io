<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>Contact Me</Title>

    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0 flex gap-12 justify-center py-12">
        <img :src="`/images/notion.png`" alt="노션" class="w-40">
        <img :src="`/images/kakao.png`" alt="오픈카카오" class="w-40">
        <a href="https://github.com/poesoow"><img :src="`/images/github.png`" alt="깃허브" class="w-40"></a>
      </div>
      <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
        <!-- contact 페이지 에서는 이렇게 추가로 게시판 기능 -->
        <router-view v-if="loc.indexOf('contact') !== -1"></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import Title from '@/components/Title.vue'

  export default {
    name: 'ContactPage',
    components: {
      Title
    },
    props: {
    loc: String
  },
  }
</script>

<style lang="scss" scoped>

</style>