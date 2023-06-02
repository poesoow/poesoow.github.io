<template>
  <div>
    <div ref="section-0">
      <div
        class="w-full bg-cover bg-center bg-no-repeat"
        :style="visual > 1400 ? { 'background-image': 'url(' + require('@/assets/images/visual_desk.jpg') + ')' } : { 'background-image': 'url(' + require('@/assets/images/visual_mobile.jpg') + ')' }">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap items-center h-[103vh]">
            <div class="basis-full md:basis-full text-center py-3">
              <p  id="animationTxt1"
                class="text-white text-4xl lg:text-5xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:[text-#d9d9d9]">
                <span>안녕하세요.</span><br><span>프론트엔드 개발자<br>송우섭 입니다.</span>
              </p>

            </div>
          </div>
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
          "PFOFILE",
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