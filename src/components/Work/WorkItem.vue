<template>
  <div class="mt-32 basis-[50%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
    <div class="border h-full">
      <div class="w-full h-full">ddd</div>
    </div>
  </div>
  <div class="basis-full md:basis-[50%] pt-4  group-even:order-2 xl:group-even:order-1 xl:group-even:text-right lg:px-[50px] text-base">
    <h3 class="text-2xl font-bold">타이틀</h3>
    <p class="pt-[10px]">설명</p>
    <p class="pt-[10px]">키워드 : <span v-for="el in 5" :key="el" class="mr-2">키워드{{ el }} </span></p>
    <p class="pt-[10px]">사용툴 : <span v-for="el in 5" :key="el" class="mr-2 align-middle">사용툴{{ el }}</span></p>
    <p class="pt-[10px]">
      <span>작업기간 : 23.05.00 ~ 23.05.01 </span> <span>5일</span>
    </p>
    <p class="pt-[10px]">
      <ul>
        <li>사이트 : 링크</li>
        <li v-if="true">original 사이트 : 오리지널 링크</li>
      </ul> 
    </p>
  </div>
</template>

<script>
  export default {
    name: 'WorkItem',
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