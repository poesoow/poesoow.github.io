<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>Contact Me</Title>
    <div class="max-w-7xl mx-auto mt-8">
      <div v-if="$route.path == '/'" class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0 py-12 flex flex-col gap-10 text-center">
        <div class="flex flex-wrap gap-12 justify-center">
          <!-- <a href="" class="inline-block w-40"><img :src="`/images/notion.png`" alt="노션" class="inline-block w-full"></a> -->
          <a href="https://github.com/poesoow"  class="inline-block basis-2/5 max-w-[10rem]"><img :src="`/images/github.png`" alt="깃허브" class="inline-block w-full"></a>
          <a href="https://open.kakao.com/o/swIGbYmf" class="inline-block basis-2/5 max-w-[10rem]"><img :src="`/images/kakao.png`" alt="오픈카카오" class="inline-block w-full"></a>
          <a href="mailto:ws71144612@daum.net"  class="inline-block basis-2/5 max-w-[10rem]"><font-awesome-icon icon="envelope" class="w-full text-[160px]" /></a>
        </div>
        <div>
          <router-link to="/contact">포트폴리오 사이트에서도 글을 남길 수 있습니다. 묻고 답하기로 이동하기</router-link>
        </div>
      </div>
      <div v-else class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
        <!-- contact 페이지 에서는 이렇게 추가로 게시판 기능 -->
        <router-view></router-view>
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