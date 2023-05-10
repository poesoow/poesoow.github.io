<template>
  <div>
    <div ref="section-0">
      <div 
        class="w-full bg-cover bg-center bg-no-repeat" 
        :style="visual > 1400 ? { 'background-image': 'url(' + require('@/assets/images/visual_desk.jpg') + ')' } : { 'background-image': 'url(' + require('@/assets/images/visual_mobile.jpg') + ')' }">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap items-center h-[103vh]">
            <div class="basis-full md:basis-full text-center py-3">
              <p 
                class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:[text-#d9d9d9]">
                 "안녕하세요.<br>프론트엔드 개발자<br>송우섭 입니다."
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
      <Work :loc="loc" />
    </div>
    <div ref="section-4">
      <Contact :loc="loc" />
    </div>

    <div class="fixed top-40 right-3 hidden xl:block dark:text-[#d9d9d9] dark:bg-[#333]">
      <ul class="flex flex-col gap-4">
        <li>
          <button @click="SectionMove('section-0')"> 
            <div class="text-xl logo py-1">
              &lt;Yapdiv /&gt;
            </div>
          </button>
        </li>
        <li v-for="(nav, index) in Nav" :key="nav" class="relative">
          <button @click="SectionMove(`section-${(index + 1)}`)">{{ nav }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Profile from '@/pages/Profile.vue'
  import Work from '@/pages/Work.vue'
  import Skill from '@/pages/Skill.vue'
  import Contact from '@/pages/Contact.vue'

  export default {
    name: "HomePage",
    props: {
      langList: Object,
    },
    components: {
      Profile,
      Work,
      Skill,
      Contact
    },
    data() {
      return {
        MenuIndex: '',
        ArrayList: '',
        loc: window.location.href,
        visual: 0,
        Nav: [
          "프로필",
          "스킬",
          "작업",
          "연락"
        ],
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
      }
    },
    mounted() {
      this.ArrayList = this.$refs;

      this.visual = visualViewport.width
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
  }
</script>

<style>


</style>