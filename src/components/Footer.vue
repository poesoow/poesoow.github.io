<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto bg-white darkMode py-7 px-[2%] text-center md:flex md:flex-row md:justify-between ">
      <p>Copyright 2023. SongWooSeop. All Right Reserved.</p>
      <div class="">
        <div class="mx-auto w-fit text-left">
          <p class="">최근 수정일 : {{ modiList[0].date }}</p>
          <p class="">작업 내용 : {{ modiList[0].desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import modiList from '@/assets/modifylist.json'

  export default {
    name: "FooterComponent",
    data() {
      return {
        // 지금은 직접 json 파일에 작업한 내용을 적지만 나중에는 깃허브 커밋내역을 불러오기
        // https://v3-docs.vuejs-korea.org/examples/#fetching-data
        modiList: modiList
      }
    },
  }
</script>

<style>

</style>