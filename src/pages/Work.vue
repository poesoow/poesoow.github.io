<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>작업</Title>

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
      <div class="mr-0 border rounded-md bg-white">
        <label class="relative rounded-md bo h-full">
          <input type="text" class="h-full px-4 rounded-md">
            <font-awesome-icon icon="magnifying-glass" class="cursor-pointer absolute top-0 right-4" />
          </label>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-8">
      <!-- /home 에서 best만 -->
      <WorkItem v-if="loc.indexOf('work') === -1" :workItems="BestItems" />
      <!-- /portfolio 주소에서 모든 worklist -->
      <WorkItem v-else :workItems="CateItems" />
    </div>
  </div>
</template>

<script>
import worklist from '@/assets/worklist.json'
import Title from '@/components/Title.vue'
import WorkItem from '@/components/Work/WorkItem.vue'

export default {
  name: "PortfolioPage",
  data() {
    return {
      CateName: "전체",
      WorkList: worklist,
    }
  },
  components: {
    Title, WorkItem
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
      })
    },
    BestItems() {
      return this.WorkList.filter((data) => {
        if (data.best !== true) {
          return data.best === this.WorkList.best
        } else {
          return data.best
        }
      })
    }
  },

}
</script>

<style>
.mokup-img > div{position: absolute; overflow: hidden; bottom: 0px;}
/* 목업 pc버전 */
.mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);}
.mokup-img > div:nth-child(1)::after{content: ''; position: absolute; width: 92%; height: 100%; background: url("../assets/images/preview.jpg") center top no-repeat; left: 19px; top: 0px; background-size: cover; transition: 5s;}
/* 호버시 이미지 슬라이딩 */
.mokup-img > div:hover::after{background-position: center bottom;}

/* 태블릿버전 */
@media screen and (max-width: 1280px) {
  .mokup-img{flex-basis: 100%; height: 380px;}
  .mokup-img > div:nth-child(1){width: 100%;}
  .mokup-img > div:nth-child(1)::after{top: 23px; height: 100%; left: 21px; width: 93%;}
}
/* 모바일버전 */
@media screen and (max-width: 640px) {
  .mokup-img{height: 70.3125vw;}
  .mokup-img > div:nth-child(1){width: 100%;}
  .mokup-img > div:nth-child(1)::after{width: 92.5%; left: 3.8%; top: 4.7%;}
}
</style>