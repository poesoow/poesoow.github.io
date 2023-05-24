<template>
  <div>
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
</template>

<script>
  export default {
    name: 'WorkItem',
    props: {
      CateItem: Object
    }
  }
</script>

<style>
.mokup-img > div{position: absolute; overflow: hidden; bottom: 0px;}
/* 목업 pc버전 */
.mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);}
.mokup-img > div:nth-child(1)::after{content: ''; position: absolute; width: 92%; height: 100%; background: url("../../assets/images/preview.jpg") center top no-repeat; left: 19px; top: 0px; background-size: cover; transition: 5s;}
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