<template>
  <div>
    <div ref="section-0">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col-reverse md:flex-wrap md:flex-row lg:gap-24 justify-center items-center h-[100vh]">

            <div class="md:basis-2/3 text-center py-3 dark:text-[#d9d9d9] max-w-sm">
              <p  id="animationTxt1"
               class="text-4xl lg:text-6xl lg:w-[440px] font-semibold mb-5 leading-normal dark:[text-#d9d9d9] text-left">
                <span class=" py-3">안녕하세요,</span>
                <br>
                <span class="text-[#38A1FF]">
                  <span class="bg-black -mx-4 px-4 py-3">프론트엔드 개발자</span>
                  <br>
                  <span class=" py-3">송우섭 <span class="text-black dark:text-[#d9d9d9]">입니다.</span></span>
                </span>
              </p>
           </div>

           <img src="/images/intro.svg" alt="프론트엔드 송우섭" class="basis-1/3 w-[400px] md:w-[500px]" >

        </div>
      </div>
    </div>
    <div ref="section-1">
      <Profile />
    </div>
    <div ref="section-2">
      <Skill />
    </div>
    <div ref="section-3">
      <Project />
    </div>
    <div ref="section-4">
      <Contact />
    </div>

    <div class="fixed top-40 right-12 hidden xl:block dark:text-[#d9d9d9] dark:bg-[#333]">
     <ul class="flex flex-col gap-4 w-24">
        <li v-for="(nav, index) in Nav" :key="nav" class="relative text-right" :class="watchSection == index && 'text-[#009688] text-2xl'">
          <button @click="SectionMove(`section-${(index + 1)}`)">{{ nav }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Profile from '@/pages/Profile.vue'
  import Project from '@/pages/Project.vue'
  import Skill from '@/pages/Skill.vue'
  import Contact from '@/pages/Contact.vue'

  export default {
    name: "HomePage",
    components: {
      Profile,
      Project,
      Skill,
      Contact
    },
    data() {
      return {
        MenuIndex: '',
        ArrayList: '',
        visual: 0,
        Nav: [
          "PROFILE",
          "SKILL",
          "PROJECT",
          "CONTACT"
        ],
        watchSection: null,
      }
    },
    methods: {
      SectionMove(index) {
        this.MenuIndex = index;
        const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
        const offset = rect.top + window.scrollY - 60;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        })
      },
      handleResize(){
        this.visual = visualViewport.width
      },
      scrollWatching(){
        const sec0_bottom = this.ArrayList[`section-0`].getBoundingClientRect().bottom;
        const sec1_bottom = this.ArrayList['section-1'].getBoundingClientRect().bottom;
        const sec2_bottom = this.ArrayList['section-2'].getBoundingClientRect().bottom;
        const sec3_bottom = this.ArrayList['section-3'].getBoundingClientRect().bottom;
        const sec4_bottom = this.ArrayList['section-4'].getBoundingClientRect().bottom;

        if (Math.floor(sec0_bottom) - 100 >= 0) {
          this.watchSection = null
        } else if (Math.floor(sec1_bottom) - 100 >= 0) {
          this.watchSection = 0
        } else if (Math.floor(sec2_bottom) - 100 >= 0) {
          this.watchSection = 1
        } else if (Math.floor(sec3_bottom) - 100 >= 0) {
          this.watchSection = 2
        } else if (Math.floor(sec4_bottom) - 100 >= 0) {
          this.watchSection = 3
        }
      }
    },
    mounted() {
      this.ArrayList = this.$refs;

      this.handleResize()
      window.addEventListener('resize', this.handleResize);
      // 새로고침한 경우를 위해서 함수 사용 Event 전 추가
      this.scrollWatching()
      window.addEventListener('scroll', this.scrollWatching)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.scrollWatching);
    },
  }
</script>

<style>
#animationTxt1{
  transform: scale(0.90);
  animation: scale 2s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

#animationTxt1 span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

#animationTxt1 span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

#animationTxt1 span:nth-child(3) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}


@keyframes scale {
  100% {transform: scale(1);}
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>