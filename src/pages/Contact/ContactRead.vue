<template>
  <div class="basis-full">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-end pb-2">
        <router-link to="/contact"
          class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">
          목록
        </router-link>
      </div>
      <div class="w-full flex flex-wrap justify-between text-xl font-light rounded-sm mb-4 border-b border-black">
        <div class="ml-2 my-1 flex flex-wrap gap-y-6 py-7 px-6 justify-between gap-x-0 border-t border-b border-black box-border basis-full">
          <div class="flex basis-full gap-x-12 md:gap-x-24">
            <p class="text-base md:text-3xl">제목</p>
            <div class="text-sm md:text-base">
              {{ title }}
            </div>
          </div>
          <div class="flex basis-full justify-between">
            <div class="flex basis-4/12 gap-x-10 md:gap-x-20">
              <p class="text-base md:text-3xl">작성자</p>
              <div class="text-sm md:text-base">
                {{ name }}
              </div>
            </div>
            <div class="">
              {{ BoardDate }}
            </div>
          </div>
        </div>
        <div class="basis-full px-3 text-sm md:text-base font-light mb-7">
          <div class="w-full mx-4 my-2.5">
            {{ content }}
          </div>
        </div>
      </div>

      <div>
        <p class="text-2xl border-b-2 text-indigo-400">댓글 ({{ repleCount }})</p>
        <div>
          <p class="px-[3%] flex">
            <span class="basis-1/3">이름</span>
            <span class="basis-2/3">내용</span>
          </p>
        </div>
        <ul class="border-b-2">
          <li v-for="reple in reples" :key="reple" class="my-2 odd:bg-gray-100">
            <p class="px-[3%] flex">
              <span class="basis-1/4">{{ reple.name }}</span>
              <span class="basis-3/4">{{ reple.content }}</span>
            </p>
          </li>
        </ul>
        <div class="mt-2 flex px-[2%] gap-8">
          <label class="">
            <input v-model="repleName" type="text" class="border w-full px-3" placeholder="이름" @keyup.enter="updateReple()">
          </label>
          <label class="basis-8/12 ">
            <input v-model="repleContent" type="text" class="border w-full px-3" placeholder="내용" @keyup.enter="updateReple()">
          </label>
          <button @click="updateReple()" class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">입력</button>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'ContactRead',
  data() {
    return {
      BoardContent: null,
      title: '',
      name: '',
      date: '',
      content: '',
      repleName: '',
      repleContent: '',
      reples: null,
      repleCount: 0,
    }
  },
  computed: {
    BoardDate() {
      const date = this.date.seconds * 1000 + this.date.nanoseconds / 1000000
      const formatted = new Date(date).toLocaleDateString()
      return formatted
    }
  },
  mounted() {
    if(this.$route.query.docId == null){
      this.$router.replace("/contact/list")
    }
    db.collection("contact").doc(this.$route.query.docId).get().then((data) => {
      this.BoardContent = data.data()
      this.title = this.BoardContent.title
      this.name = this.BoardContent.name
      this.date = this.BoardContent.date
      this.content = this.BoardContent.content
      this.reples = this.BoardContent.reples
      this.repleCount = this.reples.length
    })
  },
  methods: {
    updateReple(){
      if(this.repleName && this.repleContent) {
        const reple = {name: this.repleName, content: this.repleContent}
        
        this.reples.push(reple)
        this.repleName = ''
        this.repleContent = ''


        db.collection('contact').doc(this.$route.query.docId).update({
          'reples': this.reples
        })
      } else {
        alert('이름이나 내용을 입력해주세요')
      }

    }
  },
}
</script>
