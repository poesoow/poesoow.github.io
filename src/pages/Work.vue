<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>작업</Title>

    <div class="flex justify-between max-w-7xl mx-auto mt-8">
      <div
         v-if="loc.indexOf('work') !== -1"
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

      <!-- /home 에서 best만
        핵심은 app.vue 뿐 아니라 home.vue 에도 loc를 바인딩해주어야 함 + 클릭했을때 loc 값 최신화해주기 -->
      <div v-if="loc.indexOf('work') === -1">
        <div v-for="e in BestItem" :key="e" class="bg-white mb-8 pt-5 px-8 pb-5 rounded-md flex border flex-wrap darkMode group">
            <div class="basis-[50%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
              <div class="border h-full">
                <div class="w-full h-full"></div>
              </div>
            </div>
            <div class="basis-full md:basis-[50%] pt-4  group-even:order-2 xl:group-even:order-1 xl:group-even:text-right lg:px-[50px] text-base">
              <h3 class="text-2xl font-bold"> {{ e.descTitle }}</h3>
              <p class="pt-[10px]">{{ e.desc }}</p>
              <p class="pt-[10px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span></p>
              <p class="pt-[10px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
              <p class="pt-[10px]">
                <span>작업기간 : {{ e.date }} </span> <span>{{ e.date2 }}</span>
              </p>
              <p class="pt-[10px]">
                <ul>
                  <li>사이트 : {{ e.link }}</li>
                  <li v-if="e.type == 'Publishing'">original 사이트 : {{ e.originlink }}</li>
                </ul> 
              </p>
            </div>
          </div>
      </div>
      <!-- /portfolio 주소에서 모든 worklist -->
      <div v-else>
        <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-5 px-8 pb-5 rounded-md flex border flex-wrap darkMode group">
          <div class="basis-[50%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
            <div class="border h-full">
              <div class="w-full h-full"></div>
            </div>
          </div>
          <div class="basis-full md:basis-[50%] pt-4  group-even:order-2 xl:group-even:order-1 xl:group-even:text-right lg:px-[50px] text-base">
            <h3 class="text-2xl font-bold"> {{ e.descTitle }}</h3>
            <p class="pt-[10px]">{{ e.desc }}</p>
            <p class="pt-[10px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span></p>
            <p class="pt-[10px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
            <p class="pt-[10px]">
              <span>작업기간 : {{ e.date }} </span> <span>{{ e.date2 }}</span>
            </p>
            <p class="pt-[10px]">
              <ul>
                <li>사이트 : {{ e.link }}</li>
                <li v-if="e.type == 'Publishing'">original 사이트 : {{ e.originlink }}</li>
              </ul> 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import worklist from '@/assets/worklist.json'
import Title from '@/components/Title.vue'
export default {
  name: "PortfolioPage",
  data() {
    return {
      CateName: "전체",
      WorkList: worklist,
    }
  },
  components: {
    Title
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
    CateItem() {
      return this.WorkList.filter((data) => {
        if (this.CateName !== '전체') {
          return data.type === this.CateName
        } else {
          return data.type
        }
      })
    },
    BestItem() {
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