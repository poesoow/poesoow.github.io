<template>
  <div class="basis-full">
    <div class="max-w-7xl mx-auto">
      <div class="w-full flex flex-wrap justify-between text-xl font-light rounded-sm mb-4 border-b border-black">
        <div class="ml-2 my-1 flex flex-wrap gap-y-6 py-7 px-6 justify-between gap-x-0 border-t border-b border-black box-border basis-full">
          <div class="flex basis-full gap-x-12 md:gap-x-24">
            <p class="text-base md:text-lg">제목</p>
            <div class="text-sm md:text-base">
              {{ BoardContent }}
            </div>
          </div>
          <div class="flex basis-full justify-between">
            <div class="flex basis-4/12 gap-x-10 md:gap-x-20">
              <p class="text-base md:text-lg">작성자</p>
              <div class="text-sm md:text-base">
                {{ BoardContent }}
              </div>
            </div>
            <div class="flex basis-4/12 justify-end items-center">
              <div class="flex justify-end gap-x-8 md:gap-x-16 text-xs md:text-sm font-extralight">
                <!-- <p>조회수 : {{ BoardContent.hit }}</p>
                <p>{{ dateTime }}</p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="basis-full px-3 text-sm md:text-base font-light mb-7">
          <div class="w-full mx-4 my-2.5">
            {{ BoardContent }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="basis-full">
    <!-- <div class="max-w-7xl mx-auto">
      <div class="flex w-full justify-between pb-24 mt-3.5 px-4">
        <div class="flex">
          <router-link to="/cs/notice/list" class="bg-blue-400 hover:bg-blue-600 focus:ring-blue-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">목록</router-link>
        </div>
        <div v-if="($store.state.uid == BoardContent.uid) && ($store.state.adminUid !== '')" class="flex gap-x-5">
          <router-link to="/cs/notice/modify" class="bg-green-400 hover:bg-green-600 focus:ring-green-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">수정</router-link>
          <button class="bg-red-400 hover:bg-red-600 focus:ring-red-400 py-2 px-4  text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm" @click="Delete">삭제</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'ContactRead',
  data() {
    return {
      BoardContent: null
    }
  },
  mounted() {
    if(this.$route.query.docId == null){
      this.$router.replace("/contact/list")
    }
    db.collection("contact").doc(this.$route.query.docId).get().then((data) => {
      this.BoardContent = data.data()
      console.log(this.BoardContent)
    })



  },
}
</script>
