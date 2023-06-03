<template>
  <div class="mb-2 last:mb-0 text-sm md:text-base font-light">
    <p v-for="content in experience" :key="content" class="mb-2">{{ content.date }} : {{ content.dateDesc }}</p>
  </div>
</template>

<script>
export default {
  name: 'ExperienceComp',
  props: {
    experience: Object
  }
}
</script>