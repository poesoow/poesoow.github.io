<template>
  <div class="max-w-7xl mt-5 p-5 mx-auto bg-white rounded-md border darkMode">
    <h3 class="relative after:absolute mx-auto w-max text-[#009688] tracking-widest text-center text-xl sm:text-2xl lg:text-3xl thejamsilBold">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
  export default {
    name: "TitleComponent",
  }
</script>

<style>

</style>