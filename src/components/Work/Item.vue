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
      <div>{{ item.title }} </div>
      <p class="text-base">{{ item.desc }}</p>
    </h3>
    <div v-if="item.date2" class="pt-[10px]">
      <h4 class="text-xl"><font-awesome-icon icon="calendar"></font-awesome-icon> 작업기간</h4>
      <div class="TheJamsilRegular"><span>{{ item.date2 }} </span> <span v-if="item.date">[{{ item.date }}]</span></div>
    </div>
    <p v-if="item.features" class="pt-[10px]">
      <h4 class="text-xl"><font-awesome-icon icon="thumb-tack"></font-awesome-icon> 주요특징</h4>
      <ul class="TheJamsilRegular">
        <li v-for="(feature, index) in item.features" :key="feature"><span>{{ index + 1 }}.</span> {{ feature }}</li>
      </ul>
    </p>
    <p v-if="item.tools" class="pt-[10px]">
      <h4 class="text-xl">사용툴</h4>
      <span v-for="tool in item.tools" :key="tool" class="mr-2 TheJamsilRegular">{{ tool }}</span></p>
    <template v-if="item.workers.team">
      <div class="pt-[10px]">
        <!-- faUserGroup -->
        <h4 class="text-xl"><font-awesome-icon icon="user-group"></font-awesome-icon> 팀프로젝트</h4>
        <div class="pt-[5px]">
          팀원 :
          <span v-for="member in item.workers.members" :key="member" class="mr-2">
            <a :href="member.link">{{ member.name }}</a>
          </span>
        </div>
      </div>
    </template>
    <p class="pt-[10px]">
      <ul class="flex gap-2 justify-end">
        <li><a :href="item.links[0].link">보러가기<font-awesome-icon icon="arrow-up-right-from-square"></font-awesome-icon></a></li>
        <li><a :href="item.links[0].github">깃허브<font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></a></li>
        <li v-if="item.type == 'Publishing'" class="before:content-[111]"><a :href="item.links[0].original">대상</a></li>
      </ul>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'WorkItem',
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