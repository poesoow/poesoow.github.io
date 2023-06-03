<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>SKILL</Title>

    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8 skill-emogi">

        <ul class="flex flex-col gap-3">
          <li v-for="skill in skills" :key="skill" class="flex flex-col gap-5">
            <h3 class="text-2xl text-[#38A1FF]">{{ skill.type }}</h3>
            <ul class="flex gap-10 flex-wrap">
              <li v-for="list in skill.list" :key="list"
                class="flex gap-1 p-2 flex-col text-center">
                <img v-if="list.img" :src="list.img" :alt="list.name" class="w-12 inline-block mx-auto">
                <div>
                  <h4>{{ list.name }}</h4>
                  <div>{{ list.desc }}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>


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
        skills: [
          {type: 'Language', list: [{ name: 'Javascript', desc: '', img: '/images/javascript.svg' }, { name: 'Typescript', desc: '', img: '/images/typescript.svg' }]},
          {type: 'Framework / Library', list: [{ name: 'Vue', desc: '', img: '/images/vue.svg' }, { name: 'Vue Router', desc: '', img: '/images/vue-router.png' }, { name: 'Vuex', desc: '', img: '/images/vuex.png' }, { name: 'tailwindcss', desc: '', img: '/images/tailwindcss.svg' }, { name: 'Nuxt', desc: '', img: '/images/nuxtdotjs.svg' }]},
          {type: 'MarkUp', list: [{ name: 'HTML5', desc: '', img: '/images/html5.svg' }, { name: 'CSS3', desc: '', img: '/images/css3.svg' }]},
          {type: 'Tools', list: [{ name: 'Git', desc: '', img: '/images/git.svg' }, { name: 'Github', desc: '', img: '/images/github.png' }]},
          {type: 'Etc', list: [{ name: 'Firebase', desc: '', img: '/images/firebase.svg' }, { name: 'vscode', desc: '', img: '/images/visualstudiocode.svg' }, { name: 'npm', desc: '', img: '/images/npm.svg' }, { name: 'yarn', desc: '', img: '/images/yarn.svg' }, { name: 'figma', desc: '', img: '/images/figma.svg' }, { name: 'axios', desc: '', img: '/images/axios.svg' }]},
        ]
      }
    },
    mounted() {

    },
  }
</script>

<style scoped>
</style>