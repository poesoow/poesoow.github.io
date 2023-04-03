<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <!-- <div class="max-w-7xl p-5 mx-auto bg-white rounded-md border darkMode">
      <h3
        class="relative after:absolute w-max mx-auto after:w-[100%] after:h-[2px] after:bg-black after:dark:bg-[#d9d9d9] after:-bottom-1 after:left-2/4 after:-translate-x-2/4 tracking-widest text-center text-xl sm:text-2xl lg:text-3xl">
        포트폴리오</h3>
    </div> -->
    <Title title="포트폴리오" />
    <div class="max-w-7xl mx-auto mt-8">
      <ul class="flex m-4 ml-0">
        <li class="mr-4 border darkMode bg-white rounded-md">
          <button class="py-2 px-5" @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-blue-500'">전체</button>
        </li>
        <!-- v-for 할때 만약 CateList 가 메소드에 있었다면 CateList() 이렇게 소괄호가 필요함  -->
        <li v-for="e in CateList" :key="e" class="mr-4 border darkMode bg-white rounded-md">
          <button class="py-2 px-5" @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-blue-500 underline'">{{ e.type }}</button>
        </li>
      </ul>
    </div>
    <div class="max-w-7xl mx-auto mt-8">

      <!-- class 의 group 은 tailwind 에서 사용하는 것(글 그림 위치 번갈아가며 나오도록 하게 하기 위해 사용), 자식태그의 mokup-img은 아래 style 에서 개별적으로 스타일 지정 -->
      <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-12 px-8 pb-16 rounded-md flex border flex-wrap darkMode group">
        <div class="basis-full md:basis-[48%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
          <div v-for="e in 3" :key="e">
            <img class="w-full" :src="require(`@/assets/images/mokup-${e}.png`)" alt="mokup" />
          </div>
        </div>
        <div class="basis-full md:basis-[52%] pt-10  group-even:order-2 xl:group-even:order-1">
          <h3 class="text-2xl font-bold py-[10px] lg:pl-[50px]"> {{ e.descTitle }}</h3>
          <p class="text-base pt-[10px] lg:pl-[50px]">{{ e.desc }}</p>
          <!-- {{ WorkList[0].keyword[0] }} {{ WorkList[0].keyword[1] }} {{ WorkList[0].keyword[2] }} 을 반복문을 사용하여 아래처럼 작성 -->
          <p class="text-base pt-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span></p>
          <!-- <p class="text-base pt-[10px] lg:pl-[50px]">컬러 : {{ WorkList[0].color[0] }} {{ WorkList[0].color[1] }} {{ WorkList[0].color[2] }}</p> -->
          <!-- :class="el === '' && 'hidden'" 없애면 아래 스크립트코드에서 ""으로 값이 비워진 부분들은 값이 비워진 채로 자리만 차지하며 나타남 -->
          <p class="text-base pt-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" :class="el === '' && 'hidden'" class="w-max h-5 inline-block align-middle mr-2 text-sm text-center" :style="{backgroundColor: `${el}`}">{{ el }}</span></p>
          <p class="text-base pt-[10px] lg:pl-[50px]">폰트 : {{ e.font }}</p>
          <p class="text-base pt-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span></p>
          <p class="text-base pt-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
          <p class="text-base pt-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
          <ul class="flex justify-center mt-6">
            <!-- class 바인딩으로 값이 없으면 안나오게 만들기 or v-if로 활용할수 있음 (참고 아래 스크립트 코드에서 ""을 없애면(즉 빈데이터 자체를 없애면) class 바인딩이나 v-if문 없이 빈 값 없이 나타나게 할 수 있음) -->
            <li :class="e.progress === '' && 'hidden'"><a :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">progress</a></li>
            <li v-if="e.original" class="mx-4"><a :href="e.original" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">original</a></li>
            <li v-if="e.original" ><a :href="e.redesign" target="_blank" class="py-1 px-8 border rounded-md darkMode text-sm">redesign</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
  name: "PortfolioPage",
  components: {
    Title
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
    }
  },
  data() {
    return {
      CateName: "전체",
      WorkList: [
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 웹앱1",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "green"],
          "font": "Noto sans KR",
          "tools": ["PS", "AI"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Webapp",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "https://www.naver.com",
          "redesign": "https://www.kakao.com"
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "XXX 클론코딩1",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "pink"],
          "font": "Noto sans KR",
          "tools": ["PS", "", "VSCODE"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Publishing",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "",
          "redesign": ""
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 웹앱2",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["", "green", "pink"],
          "font": "Noto sans KR",
          "tools": ["", "AI", "VSCODE"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Webapp",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "",
          "redesign": "https://www.kakao.com"
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 클론코딩2",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "green", "pink"],
          "font": "Noto sans KR",
          "tools": ["PS", "AI", "VSCODE"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Publishing",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "https://www.naver.com",
          "redesign": ""
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 웹앱3",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "green", "pink"],
          "font": "Noto sans KR",
          "tools": ["PS", "", ""],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Webapp",
          "progress": "",
          "original": "https://www.naver.com",
          "redesign": "https://www.kakao.com"
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 클론코딩3",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "", "pink"],
          "font": "Noto sans KR",
          "tools": ["", "AI", "VSCODE"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Publishing",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "https://www.naver.com",
          "redesign": "https://www.kakao.com"
        },
        {
          "img": "https://via.placeholder.com/500",
          "descTitle": "xxxx 웹앱4",
          "desc": "API를 활용한 웹앱 개발...",
          "keyword": ["#심플함", "#깔끔한", "#taliwind"],
          "color": ["blue", "green", ""],
          "font": "Noto sans KR",
          "tools": ["PS", "AI", "VSCODE"],
          "date": "10일(기획1일/구상1일/제작8일)",
          "contribution": "100%",
          "type": "Webapp",
          "progress": "https://via.placeholder.com/1200x5000",
          "original": "https://www.naver.com",
          "redesign": ""
        }
      ]
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