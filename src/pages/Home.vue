<template>
  <div class="w-full">
    <div class="max-w-7xl mx-auto pt-10 lg:pt-40">
      <div class="flex flex-wrap items-center">
        <div class="basis-full md:basis-2/4 text-center py-3">
          <p class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:[text-#d9d9d9]">
            안녕하세요 ... <br>
            프론트엔드 개발자 <br>
            홍길동 입니다.
          </p>
        </div>
        <div class="basis-full md:basis-2/4 text-center">
          <div class="m-3 p-1 lg:p-5">
            <lottie-player :src="require('../assets/ani.json')" background="transparent" loop speed="1" style="max-width: 500px; max-height: 500px;" autoplay />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@lottiefiles/lottie-player"

  export default {
    name: "HomePage"
  }
</script>

<style>

</style>