<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <!-- 프롭스로 컴포넌트 활용한다고 수정 주석 처리
      <div class="max-w-7xl p-5 mx-auto bg-white rounded-md border darkMode">
      <h3 class="relative after:absolute mx-auto w-max after:w-[100%] after:h-[2px] after:bg-black after:dark:bg-[#d9d9d9] after:-bottom-1 after:left-2/4 after:-translate-x-2/4 tracking-widest text-center text-xl sm:text-2xl lg:text-3xl">프로필</h3>
    </div> -->
    <Title title="프로필" />
    <div class="max-w-7xl mx-auto">
      <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
        <div class="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md darkMode text-center border">
          <img src="https://via.placeholder.com/300" alt="사진" class="rounded-full block mx-auto">
          <ul>
            <li class="pl-5 box-border pt-6">홍길동 / Hong Gil Dong</li>
            <li class="pl-5 box-border pt-6">1920.01.01</li>
            <li class="pl-5 box-border pt-6"><a href="mailto:aaa@naver.com">aaa@naver.com</a></li>
          </ul>
          <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#성실하게</span>
          <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#꼼꼼하게</span>
          <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#이렇게</span>
        </div>
        <div class="basis-full md:basis-[67.5%] mt-8 md:mt-0">


          <div v-for="e in Content" :key="e" class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
            <h3 class="text-base md:text-xl mb-4 ">◆ {{ e.title }}</h3>
            <!-- for문안에 if문으로 원하는 내용만 나오도록 하기 -->
            <p v-if="e.desc" class="mb-2 last:mb-0 text-sm md:text-base"><span class="font-bold">{{ e.desc }}</span>{{ e.desc2 }}</p>
            <!-- for문안에 같은구조로 만들고 for문으로 한번도 돌리기 -->
            <p v-for="(el, index) in e.date" :key="el" class="mb-2 last:mb-0 text-sm md:text-base">{{ el }} : {{ e.dateDesc[index] }}</p>
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
        Content: [
          {
            title: "MIND",
            desc: '"혼자 부딪혀봐야 온전히 내 것이 된다"',
            desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제를 해결하는 것을 좋아합니다."
          },
          {
            title: "EDUCATION",
            date: [
              "2022.12.29 ~ 2023.06.12",
              "2023.01.01 ~ 2023.01.01"
            ],
            dateDesc:[
              "(디지털컨버전스) 스마트혼합-뷰(Vue) 활용 프론트엔드 개발자 양성과정 B",
              "XXXX 내용 추가 입력"
            ]
          },
          {
            title: "LICENSE",
            date: [
              "2022.08", "2022.07", "2022.06"
            ],
            dateDesc: [
              "자격증1", "자격증2", "자격증3"
            ]
          }
        ]
      }
    },
  }
</script>

<style>

</style>