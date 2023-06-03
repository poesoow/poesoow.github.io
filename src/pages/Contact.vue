<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">

    <div v-if="$route.path == '/'">
      <Title>CONTACT</Title>

      <div class="max-w-3xl mx-auto mt-8">
        <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0 py-12 flex flex-col gap-10 text-center relative plane-emogi">
          <ContactComp />
          <router-link to="/contact">
            <p class="p-2">현재 사이트에서도 질문을 남길 수 있습니다.</p>
            <span class="bg-[#38A1FF] py-2 px-3 rounded-md">
              묻고 답하기로 이동하기 <font-awesome-icon icon="arrow-up-right-from-square"></font-awesome-icon>
            </span>
          </router-link>
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

<style scoped>
.plane-emogi::after,
.plane-emogi::before{
  position: absolute;
  content: '';
  background-repeat: no-repeat;
  background-size: 350px;
}
.plane-emogi::after{
  top: 90px;
  right: -300px;
  width: 350px;
  height: 350px;
  background-image: url('/public/images/leader-1.png');
}
.plane-emogi::before{
  top: -80px;
  left: -300px;
  width: 300px;
  height: 300px;
  background-image: url('/public/images/leader-2.png');
}

@media screen and (max-width: 840px) {
  .plane-emogi::after,
  .plane-emogi::before {
    display: none;
  }
}

@media screen and (min-width: 840px) and (max-width: 1300px)  {
  .plane-emogi::after,
  .plane-emogi::before{
    background-size: 250px;
  }
  .plane-emogi::after{
    top: 140px;
    right: -200px;
    width: 250px;
    height: 250px;
  }
  .plane-emogi::before {
    top: -40px;
    left: -230px;
  }
}

</style>