<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>스킬</Title>

    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">

        <div v-for="e in ProgressList" :key="e" class="w-full h-20">
          <div class="w-full h-5 bg-[#e0e0de] rounded-[50px]">
            <!-- style 에 바인딩을 주어야 함 transition-[width]는 내가 넓이만 transition 주고 싶어서 추가 -->
            <div class="h-full bg-slate-700 transition-[width] duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10"
              :style="{ width: `${e.progressBefore}%` }">
              <p class="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{{ e.skillList }}</p>
              <span class="text-sm pr-2 relative -top-0.5">{{ e.progressBefore }}%</span>
            </div>
            <p class="text-sm md:text-base">{{ e.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Title from '@/components/Title.vue'

  export default {
    name: "SkillPage",
    components: {
      Title
    },
    data() {
      return {
        // 배열로 하면 transition 안먹힘 (style 바인딩과 mount에 settime 함수 사용으로 진행바 차게 함)
        ProgressList: [
          {
            skillList: "HTML",
            progressBefore: 0,
            progressAfter: 30,
            desc: "웹표준을 준수하여, 마크업을 할 수 있다. ... "
          },
          {
            skillList: "CSS",
            progressBefore: 0,
            progressAfter: 40,
            desc: "웹표준을 준수하여, 마크업을 할 수 있다. ... "
          },
          {
            skillList: "Javascript",
            progressBefore: 0,
            progressAfter: 50,
            desc: "웹표준을 준수하여, 마크업을 할 수 있다. ... "
          },
          {
            skillList: "Jquery",
            progressBefore: 0,
            progressAfter: 30,
            desc: "웹표준을 준수하여, 마크업을 할 수 있다. ... "
          },
          {
            skillList: "Vue",
            progressBefore: 0,
            progressAfter: 40,
            desc: "웹표준을 준수하여, 마크업을 할 수 있다. ... "
          }
        ]
      }
    },
    mounted() {
      // 로딩시 또는 페이지 새로고침하면 퍼센트가 차기 위해서
      this.ProgressList.forEach((e)=>{
        setTimeout(() => {
          e.progressBefore = e.progressAfter
        }, 400);
      })
    },
  }
</script>

<style>

</style>