<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="basis-[50%] relative group-even:order-1 xl:group-even:order-2 mokup-img">
    <div class="border h-full">
      <div class="w-full h-full">
        <img :src="item.img" :alt="item.title">
      </div>
    </div>
  </div>
  <div class="basis-full md:basis-[50%] pt-4  group-even:order-2 xl:group-even:order-1 xl:group-even:text-right lg:px-[50px]">
    <h3 class="text-3xl">
      <div class="font-bold text-[#38A1FF]">{{ item.title }} <span class="text-lg">{{ item.workers.team ? '팀프로젝트' : '' }}</span> </div>
    </h3>
    <div v-if="item.date2" class="pt-[10px] font-bold">
      <div><span class="text-[#38A1FF]">{{ item.date2 }}</span></div>
    </div>
    <p class="pt-[10px] text-base" v-html="item.desc"></p>
    <p class="pt-[10px] flex gap-3">
      <span v-for="el in item.date" :key="el" class="relative inline-block first:text-[#38A1FF] first:font-bold first:after:hidden after:block after:absolute after:left-[-7px] after:top-1 after:border-y-[8px] after:border-x-[1px] after:border-[#38A1FF]">{{ el }}</span>
    </p>
    <p v-if="item.features" class="pt-[10px]">
      <ul>
        <li v-for="(feature) in item.features" :key="feature"><span>-</span> {{ feature }}</li>
      </ul>
    </p>
    <p v-if="item.tools" class="pt-[10px]">
      <span v-for="tool in item.tools" :key="tool" class="relative inline-block mr-3 font-bold text-[#38A1FF] first:after:hidden after:block after:absolute after:left-[-7px] after:top-1 after:border-y-[8px] after:border-x-[1px] after:border-[#38A1FF]">{{ tool }}</span></p>
    <p class="pt-[10px]">
      <ul class="flex gap-2 justify-end">
        <li><a :href="item.links[0].link" class="inline-block bg-[gainsboro] w-10 h-10 rounded-md py-[10px] px-[10px]"><font-awesome-icon icon="arrow-up-right-from-square" class="text-xl"></font-awesome-icon></a></li>
        <li><a :href="item.links[0].github" class="inline-block bg-[gainsboro] w-10 h-10 rounded-md py-[10px] px-[10px]"><font-awesome-icon icon="fa-brands fa-github" class="text-xl"></font-awesome-icon></a></li>
      </ul>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: {
      item: Object
    }
  }
</script>
<style>
.mokup-img > div{position: absolute; overflow: hidden; bottom: 0px;}
/* 목업 pc버전 */
.mokup-img > div:nth-child(1){width: 100%;}
/* .mokup-img > div:nth-child(1){width: 85%; left: 50%; transform: translateX(-50%);} */
/* .mokup-img > div:nth-child(1)::after{content: ''; position: absolute; width: 92%; height: 100%; background: url("../../assets/images/preview.jpg") center top no-repeat; left: 19px; top: 0px; background-size: cover; transition: 5s;} */
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