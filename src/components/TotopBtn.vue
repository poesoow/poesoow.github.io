<template>
  <div>
    <button 
      @click="scollTop"
      :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'"
      class="fixed right-5 bottom-5 w-12 h-12 border-2 text-[#333] bg-white z-50 rounded transition-all duration-1000">
      <font-awesome-icon icon="circle-arrow-up" class="text-2xl"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ToTop',
    data() {
      return {
        TopBtnChk: false,
        windowScroll: window.scrollY,
      }
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
      scollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }) 
      },
      updateScroll() {
        this.windowScroll = window.scrollY;
        if (this.windowScroll > 600) {
          this.TopBtnChk = true
        } else {
          this.TopBtnChk = false
        }
      }
    },
  }
</script>