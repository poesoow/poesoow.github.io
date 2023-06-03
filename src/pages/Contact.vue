<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">

    <div v-if="$route.path == '/'">
      <Title>CONTACT</Title>

      <div class="max-w-7xl mx-auto mt-8">
        <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0 py-12 flex flex-col gap-10 text-center">
          <ContactComp />
          <router-link to="/contact">현재 사이트에서도 질문을 남길 수 있습니다. 묻고 답하기로 이동하기 <font-awesome-icon icon="arrow-up-right-from-square"></font-awesome-icon></router-link>
        </div>
      </div>
    </div>

    <div v-else>
      <Title>QnA</Title>
      <div class="max-w-7xl mx-auto mt-8">
        <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
          <router-view></router-view>
        </div>
        <Title>CONTACT</Title>
        <div class="max-w-7xl mx-auto mt-8">
          <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0 py-12 flex flex-col gap-10 text-center">
            <ContactComp />
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  import Title from '@/components/Title.vue'
  import ContactComp from '@/components/Contact/ContactComp.vue'

  export default {
    name: 'ContactPage',
    components: {
      Title, ContactComp
    },
    props: {
    loc: String
  },
  }
</script>

<style lang="scss" scoped>

</style>