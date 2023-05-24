<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>작업</Title>

    <!-- /work 에서 -->
    <div v-if="loc.indexOf('work') !== -1" class="flex justify-between max-w-7xl mx-auto mt-8">
      <div
        class="max-w-7xl">
        <ul class="flex ml-0">
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-[#42b983]'">전체</button>
          </li>
          <li v-for="e in CateList" :key="e" class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-[#42b983] underline'">{{ e.type }}</button>
          </li>
        </ul>
      </div>
      <!-- 검색 -->
      <div class="mr-0 border rounded-md bg-white">
        <label class="relative rounded-md bo h-full">
          <input type="text" class="h-full px-4 rounded-md">
          <font-awesome-icon icon="magnifying-glass" class="cursor-pointer absolute top-0 right-4" />
        </label>
      </div>
    </div>

    <!-- 홈 화면에서 -->
    <div v-else class="flex justify-between max-w-7xl mx-auto mt-8">
      <div
        class="max-w-7xl">
        <ul class="flex ml-0">
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName2 = 'BEST'" :class="CateName2 === 'BEST' && 'font-bold text-[#42b983]'">BEST</button>
          </li>
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName2 = 'LATEST'" :class="CateName2 === 'LATEST' && 'font-bold text-[#42b983]'">LATEST</button>
          </li>
        </ul>
      </div>
    </div>


    <div class="max-w-7xl mx-auto mt-8">
      <!-- /home 에서 best만 -->
      <WorkItems v-if="loc.indexOf('work') === -1" :workItems="BestandLatestItems.BEST" :latestItem="BestandLatestItems.LATEST" :CateName2="CateName2" />
      <!-- /work 주소에서 모든 worklist -->
      <WorkItems v-else :workItems="CateItems" />
    </div>
  </div>
</template>

<script>
import worklist from '@/assets/worklist.json'
import Title from '@/components/Title.vue'
import WorkItems from '@/components/Work/WorkItems.vue'

export default {
  name: "PortfolioPage",
  data() {
    return {
      CateName: "전체",
      CateName2: "BEST",
      WorkList: worklist,
    }
  },
  components: {
    Title, WorkItems
  },
  props: {
    loc: String
  },
  methods: {

  },
  computed: {
    CateList() {
      return this.WorkList.filter((item, i) => {
        return (
          this.WorkList.findIndex((item2) => {
            return item.type === item2.type
          }) === i
        )
      })
    },
    CateItems() {
      return this.WorkList.filter((data) => {
        if (this.CateName !== '전체') {
          return data.type === this.CateName
        } else {
          return data.type
        }
      }).sort((prev, next) => next.orderDate - prev.orderDate)
    },
    BestItems() {
      return this.WorkList.filter((data) => data.best)
    },
    BestandLatestItems() {

      const latestItem = this.WorkList.filter(()=>true).sort((prev, next) => next.orderDate - prev.orderDate).shift()
      const bestItems = this.WorkList.reduce((acc, work) => {
        if(work.best){
          acc = [...acc ,work]
        }
        return acc
      }, [])
      return {BEST: bestItems, LATEST: latestItem }
    }
  },

}
</script>