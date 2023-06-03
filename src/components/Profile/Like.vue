<template>
  <p class="flex flex-wrap gap-2 mb-2 last:mb-0 text-sm md:text-base">
    <span v-for="content in like" :key="content"
      class="h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">
      {{ content.item }}
    </span>
  </p>
</template>

<script>
export default {
  name: 'LikeComp',
  props: {
    like: Object
  }
}
</script>