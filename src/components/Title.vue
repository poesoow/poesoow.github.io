<template>
  <div class="max-w-7xl mt-5 p-5 mx-auto bg-white rounded-md border darkMode">
    <h3 class="relative after:absolute mx-auto w-max after:w-[80%] after:h-[2px] after:bg-black after:dark:bg-[#d9d9d9] after:-bottom-1 after:left-2/4 after:-translate-x-2/4 tracking-widest text-center text-xl sm:text-2xl lg:text-3xl">
      {{ title }}
    </h3>
  </div>
</template>

<script>
  export default {
    name: "TitleComponent",
    props: {
      title: String
    }
  }
</script>

<style>

</style>