<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>PROFILE</Title>
    <div class="max-w-7xl mx-auto">
      <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
        <div class="basis-full md:basis-[30%] pt-5 pb-12 px-4 bg-white rounded-md darkMode text-center border">
          <img :src="$store.state.isDark ? require(`@/assets/images/profile_dark.svg`) : require(`@/assets/images/profile.svg`)" alt="사진" class="rounded-full block mx-auto">

          <p class="font-bold mb-5 text-[#38A1FF]">
            <span class="text-2xl">송우섭</span>
            <br>
            <span>Song Woo Seop</span>
          </p>

          <ul class="flex gap-12 justify-center">
            <li class="box-border pt-3 text-5xl"><a href="https://github.com/poesoow"><font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></a></li>
            <li class="box-border pt-3 text-5xl"><a href="https://velog.io/@ws71144612"><img class="w-[48px]" :src="`/images/velog.svg`" alt="벨로그"></a></li>
          </ul>
        </div>
        <div class="basis-full md:basis-[67.5%] mt-8 md:mt-0">


          <div class="bg-white rounded-md border darkMode p-5 mb-8">
            <h3 class="text-base md:text-xl mb-4">◆ <span class="text-[#38A1FF]">{{ Contents.MIND.title }}</span></h3>
            <div class="pl-[20px]">
              <mindComp :mind="Contents.MIND.mind"/>
            </div>
          </div>
          <div class="bg-white rounded-md border darkMode p-5 mb-8">
            <h3 class="text-base md:text-xl mb-4">◆ <span class="text-[#38A1FF]">{{ Contents.EXPERIENCE.title }}</span></h3>
            <div class="pl-[20px]">
              <ExprienceComp :experience="Contents.EXPERIENCE.experience"/>
            </div>
          </div>
          <div class="bg-white rounded-md border darkMode p-5 mb-0 like-emogi">
            <h3 class="text-base md:text-xl mb-4">◆ <span class="text-[#38A1FF]">{{ Contents.LIKE.title }}</span></h3>
            <div class="pl-[20px]">
              <LikeComp :like="Contents.LIKE.like"/>
            </div>
          </div>




        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from '@/components/Title.vue'
  import mindComp from '@/components/Profile/Mind.vue'
  import ExprienceComp from '@/components/Profile/Experience.vue'
  import LikeComp from '@/components/Profile/Like.vue'

  export default {
    name: "ProfilePage",
    components: {
      Title, mindComp, ExprienceComp, LikeComp
    },
    props: {
      isDark: Boolean
    },
    data() {
      return {
        Contents: {
          "MIND": {
            title: "MIND",
            mind: [
              {
                desc: 'Done is better than perfect.',
                desc2: "지나친 완벽을 추구하기 보다는<br>보완하며 더 나은 방향으로 발전하고자 합니다."
              },
              {
                desc: 'Simple is best.',
                desc2: "최소한의 효과로 정확하게<br>전달하는 것이 중요하다고 생각합니다."
              },
            ]
          },
          "EXPERIENCE": {
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
          "LIKE" :{
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
              {
                item: "여행",
              },
              {
                item: "학습",
              },
              {
                item: "노을",
              },
            ],
          }
        }
      }
    },
  }
</script>

<style scoped>
.like-emogi{
  overflow: hidden;
  background-image: url('/public/images/portfolio.png');
  background-repeat: no-repeat;
  background-position: right 10px;
  background-size: 150px;
}

</style>