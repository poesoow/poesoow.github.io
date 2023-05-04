<template>
  <div>
    <div ref="section-0">
      <div class="w-full">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap items-center h-[80vh]">
            <div class="basis-full md:basis-full text-center py-3">
              <p 
                v-html="langList.MainTxt[0]" 
                class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:[text-#d9d9d9]">
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
      <Contact />
    </div>

    <div class="fixed top-40 right-0 hidden xl:block dark:text-[#d9d9d9] dark:bg-[#333]">
      <ul class="flex flex-col gap-4">
        <li>
          <button @click="SectionMove('section-0')"><img src="http://via.placeholder.com/120x50" alt="logo" /></button>
        </li>
        <li v-for="(nav, index) in langList.Nav" :key="nav" class="relative">
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
        loc: window.location.href
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
    },
    mounted() {
      this.ArrayList = this.$refs;
    },
  }
</script>

<style>

</style>