<template>
  <div class="flex flex-wrap gap-12 justify-center items-center">
    <!-- <a href="" class="inline-block w-40"><img :src="`/images/notion.png`" alt="노션" class="inline-block w-full"></a> -->
    <a href="https://github.com/poesoow"  class="inline-block max-w-[10rem]"><img :src="`/images/github.png`" alt="깃허브" class="inline-block w-full" :class="$route.path != '/' && ' w-[5rem]'"></a>
    <a href="https://open.kakao.com/o/swIGbYmf"  class="inline-block max-w-[10rem]"><img :src="`/images/kakao.png`" alt="오픈카카오" class="inline-block w-full" :class="$route.path != '/' && ' w-[5rem]'"></a>
    <a href="mailto:ws71144612@daum.net"  class="inline-block max-w-[10rem]"><font-awesome-icon icon="envelope" class="w-full text-[160px]" :class="$route.path != '/' && ' w-[5rem]'"/></a>
  </div>
</template>

<script>
  export default {
    name: 'ContactComp'
  }
</script>

<style lang="scss" scoped>

</style>