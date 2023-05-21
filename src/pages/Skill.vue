<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>스킬</Title>

    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8">

        <ul class="flex flex-col gap-3">
          <li v-for="skill in skills" :key="skill" class="flex flex-col gap-5">
              <h3 class="text-2xl text-[#42b983] border-b-2">{{ skill.type }}</h3>
              <ul class="flex gap-10">
                <li v-for="list in skill.list" :key="list"
                  class="flex gap-1 p-2">
                  <img v-if="list.img" :src="list.img" :alt="list.name" class="w-36">
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
          {type: 'Language', list: [{ name: 'Javascript', desc: '', img: '' }, { name: 'Typescript', desc: '', img: '' }]},
          {type: 'Framework / Library', list: [{ name: 'Vue', desc: '', img: '' }, { name: 'Vue Router', desc: '', img: '' }, { name: 'tailwindcss', desc: '', img: '' }]},
          {type: 'MarkUp', list: [{ name: 'HTML', desc: '', img: '' }, { name: 'CSS', desc: '', img: '' }]},
          {type: 'Tools', list: [{ name: 'Git', desc: '', img: '' }, { name: 'Github', desc: '', img: '' }]},
        ]
      }
    },
    mounted() {

    },
  }
</script>

<style>

</style>