<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>작업</Title>
    <div
       v-if="loc.indexOf('work') !== -1"
      class="max-w-7xl mx-auto mt-8">
      <ul class="flex m-4 ml-0">
        <li class="mr-4 border darkMode bg-white rounded-md">
          <button class="py-2 px-5" @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-[#42b983]'">전체</button>
        </li>
        <li v-for="e in CateList" :key="e" class="mr-4 border darkMode bg-white rounded-md">
          <button class="py-2 px-5" @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-[#42b983] underline'">{{ e.type }}</button>
        </li>
      </ul>
    </div>
    <div class="max-w-7xl mx-auto mt-8">

      <!-- /home 에서 best만
        핵심은 app.vue 뿐 아니라 home.vue 에도 loc를 바인딩해주어야 함 + 클릭했을때 loc 값 최신화해주기 -->
      <div v-if="loc.indexOf('work') === -1">
        <h3>best</h3>
        <div v-for="e in BestItem" :key="e" class="bg-white mb-8 pt-12 px-8 pb-16 rounded-md flex border flex-wrap darkMode group">
          <div class="basis-[48%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
            <div v-for="e in 3" :key="e">
              <img class="w-full" :src="require(`@/assets/images/mokup-${e}.png`)" alt="mokup" />
            </div>
          </div>
          <div class="basis-full md:basis-[52%] pt-10  group-even:order-2 xl:group-even:order-1">
            <h3 class="text-2xl font-bold py-[10px] lg:pl-[50px]"> {{ e.descTitle }}</h3>
            <p class="text-base pt-[10px] lg:pl-[50px]">{{ e.desc }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" :class="el === '' && 'hidden'" class="w-max h-5 inline-block align-middle mr-2 text-sm text-center" :style="{ backgroundColor: `${el}` }">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">폰트 : {{ e.font }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
            <ul class="flex justify-center mt-6">
              <li :class="e.progress === '' && 'hidden'"><a :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">progress</a></li>
              <li v-if="e.original" class="mx-4"><a :href="e.original" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">original</a></li>
              <li v-if="e.original" ><a :href="e.redesign" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">redesign</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /portfolio 주소에서 모든 worklist -->
      <div v-else>
        <h3>all</h3>
        <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-12 px-8 pb-16 rounded-md flex border flex-wrap darkMode group">
          <div class="basis-[48%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
            <div v-for="e in 3" :key="e">
              <img class="w-full" :src="require(`@/assets/images/mokup-${e}.png`)" alt="mokup" />
            </div>
          </div>
          <div class="basis-full md:basis-[52%] pt-10  group-even:order-2 xl:group-even:order-1">
            <h3 class="text-2xl font-bold py-[10px] lg:pl-[50px]"> {{ e.descTitle }}</h3>
            <p class="text-base pt-[10px] lg:pl-[50px]">{{ e.desc }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" :class="el === '' && 'hidden'" class="w-max h-5 inline-block align-middle mr-2 text-sm text-center" :style="{backgroundColor: `${el}`}">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">폰트 : {{ e.font }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
            <p class="text-base pt-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
            <p class="text-base pt-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
            <ul class="flex justify-center mt-6">
              <li :class="e.progress === '' && 'hidden'"><a :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">progress</a></li>
              <li v-if="e.original" class="mx-4"><a :href="e.original" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">original</a></li>
              <li v-if="e.original" ><a :href="e.redesign" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">redesign</a></li>
            </ul>
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
        if (data.best !== 'true') {
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
.mokup-img > div{position: absolute; overflow: hidden; bottom: 0;}
/* 목업 pc버전 */
.mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);}
.mokup-img > div:nth-child(1)::after{content: ''; position: absolute; width: 92%; height: 63%; background: url("../assets/images/preview.jpg") center top no-repeat; left: 19px; top: 20px; background-size: cover; transition: 5s;}
/* 목업 태블릿버전 */
.mokup-img > div:nth-child(2){width: 35%; right: 0;}
.mokup-img > div:nth-child(2)::after{content: ''; position: absolute; width: 85%; height: 83%; background: url("../assets/images/preview.jpg") center top no-repeat; left: 17px; top: 24px; background-size: cover; transition: 5s;}
/* 목업 모바일버전 */
.mokup-img > div:nth-child(3){width: 23%; left: 0;}
.mokup-img > div:nth-child(3)::after{content: ''; position: absolute; width: 90%; height: 90.5%; background: url("../assets/images/preview.jpg") center top no-repeat; left: 7px; top: 19px; border-radius: 5px; background-size: cover; transition: 5s;}
/* 호버시 이미지 슬라이딩 */
.mokup-img > div:hover::after{background-position: center bottom;}

/* 태블릿버전 */
@media screen and (max-width: 1200px) {
  .mokup-img{flex-basis: 100%; height: 500px;}
  .mokup-img > div:nth-child(1){width: 550px;}
  .mokup-img > div:nth-child(2){width: 184px; right: 0;}
  .mokup-img > div:nth-child(3){width: 126px; left: 0;}
  .mokup-img > div:nth-child(1)::after{top: 23px; height: 62%; left: 21px; width: 93%;}
  .mokup-img > div:nth-child(2)::after{width: 85%; top: 24px;}
}
/* 모바일버전 */
@media screen and (max-width: 640px) {
  .mokup-img{height: 70.3125vw;}
  .mokup-img > div:nth-child(1){width: 100%;}
  .mokup-img > div:nth-child(2){width: 35%;}
  .mokup-img > div:nth-child(3){width: 20%;}
  .mokup-img > div:nth-child(1)::after{width: 92.5%; left: 3.8%; top: 4.7%;}
  .mokup-img > div:nth-child(2)::after{left: 8%; top: 8%;}
  .mokup-img > div:nth-child(3)::after{height: 92.0%; left: 5%; top: 5.5%;}
}
</style>