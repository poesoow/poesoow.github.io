<template>
  <div>
    <div ref="box" @click="getBoxSize">Click me to get box size</div>
    <p>The box is {{ boxWidth }} pixels wide and {{ boxHeight }} pixels tall.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxWidth: 0,
      boxHeight: 0
    };
  },
  methods: {
    getBoxSize() {
      const box = this.$refs.box;
      const rect = box.getBoundingClientRect();
      this.boxWidth = rect.width;
      this.boxHeight = rect.height;
      console.log(rect)
    }
  }
}
</script>
