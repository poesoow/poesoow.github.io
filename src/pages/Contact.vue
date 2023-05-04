<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title title="Contact Me" />

    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import Title from '@/components/Title.vue'

  export default {
    name: 'ContactPage',
    components: {
      Title
    }
  }
</script>

<style lang="scss" scoped>

</style>