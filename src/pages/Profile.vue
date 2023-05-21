<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title title="프로필" />
    <div class="max-w-7xl mx-auto">
      <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
        <div class="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md darkMode text-center border">
          <img :src="require(`@/assets/images/profile2.png`)" alt="사진" class="rounded-full block mx-auto">
          <ul>
            <li class="pl-5 box-border pt-6">송우섭</li>
            <li class="pl-5 box-border pt-6"><a href="mailto:ws71144612@daum.net">ws71144612@daum.net</a></li>
          </ul>
        </div>
        <div class="basis-full md:basis-[67.5%] mt-8 md:mt-0">


          <div v-for="content in Contents" :key="content" class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
            <h3 class="text-base md:text-xl mb-4 ">◆ {{ content.title }}</h3>
            <div class="mb-2 last:mb-0 text-sm md:text-base font-light">
              <div class="mb-2" v-for="mind in content.mind" :key="mind">
                <span class="font-bold">{{ mind.desc }}</span>
                <div>{{ mind.desc2 }}</div>
              </div>
            </div>
            <div class="mb-2 last:mb-0 text-sm md:text-base font-light">
              <p v-for="experience in content.experience" :key="experience" class="mb-2">{{ experience.date }} : {{ experience.dateDesc }}</p>
            </div>
            <p class="flex flex-wrap mb-2 last:mb-0 text-sm md:text-base">
              <span v-for="like in content.like" :key="like"
                class="h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">
                {{ like.item }}
              </span>
            </p>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from '@/components/Title.vue'

  export default {
    name: "ProfilePage",
    components: {
      Title
    },
    data() {
      return {
        Contents: [
          {
            title: "MIND",
            mind: [
              {
                desc: '"Done is better than perfect."',
                desc2: "너무 완벽을 추구하기 보다는 계속 보완하며 더 나은 방향으로 발전해야 한다는 마인드를 가지고 있습니다."
              },
              {
                desc: '"Simple is best."',
                desc2: "최대한 단순하게 작업하는 것을 좋아합니다."
              }
            ]
          },
          {
            title: "EXPERIENCE",
            experience: [
              {
                date: '2022.12 ~ 2023.06',
                dateDesc: '(디지털컨버전스) 스마트혼합-뷰(Vue) 활용 프론트엔드 개발자 양성과정 B'
              },
              {
                date: '2014.03 ~ 2022.08',
                dateDesc: '영남대학교 졸업'
              },
            ],
          },
          {
            title: "LIKE",
            like: [
              {
                item: "맛집",
              },
              {
                item: "유튜브",
              },
              {
                item: "영화",
              },
              {
                item: "코딩",
              },
            ],
          }
        ]
      }
    },
  }
</script>

<style>

</style>