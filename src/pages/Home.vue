<template>


  
  
  <div class="w-full">
    <div class="max-w-7xl mx-auto pt-32 lg:pt-40">
      <div class="flex flex-wrap items-center">
        <div class="basis-full md:basis-2/4 text-center py-3">
          <p v-html="langList.MainTxt[0]" class="text-green-500 dark:text-green-400 hover:text-green-600 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug ">
            
          </p>
        </div>
        <div class="basis-full md:basis-2/4 text-center">
          <div class="m-3 p-1 lg:p-5">
            <lottie-player :src="require('../assets/ani.json')" background="transparent" loop speed="1" style="margin: 0 auto; max-width: 500px; max-height: 500px;" autoplay />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@lottiefiles/lottie-player";

  export default {
    name: "HomePage",
    props: {
      langList: Object
    },
    data() {
      return {
      }
    },
    components: {
    },
    
  }
</script>

<style>

</style>