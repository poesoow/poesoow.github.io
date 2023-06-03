<template>
  <div class="mb-2 last:mb-0 text-sm md:text-base flex gap-4 md:gap-24">
    <div class="mb-2" v-for="content in mind" :key="content">
      <div class="bg-black p-3 mb-6 text-[#38A1FF] font-bold inline-block">{{ content.desc }}</div>
      <div v-html="content.desc2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MindComp',
    props: {
      mind: Object
    }
  }
</script>