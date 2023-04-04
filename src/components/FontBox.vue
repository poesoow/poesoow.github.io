<template>
  <div :class="device === 'mobile' ? 'block md:hidden' : 'hidden md:block'" class="z-50">
    <div :class="isOpen && 'top-50' || device === 'mobile' && 'top-0'"
      class="darkMode text-center  cursor-pointer transition-all duration-500">
      <font-awesome-icon @click="!isOpen ? isOpen = true : isOpen = false" icon="pencil" class="text-2xl" />
    </div>
    <ul :class="isOpen && '!right-8' || device === 'mobile' && 'mt-[700px]'"
      class="absolute w-40 -right-44 bg-white darkMode trasition-all duration-500">
      <li @click="FontSelect(index)" @mouseleave="FontRemove(index)" @mouseover="FontView(index)"
        v-for="(e, index) in FontList" :key="e" class="cursor-pointer text-left py-2" :class="e.font">{{ e.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FontBox",
  props: {
    device: String
  },
  data() {
    return {
      isOpen: false,
      FontList: [
        {
          title: "더잠실체",
          font: "thejamsil5"
        },
        {
          title: "코레일 둥근고딕",
          font: "korailroundgothic"
        },
        {
          title: "제주돌담체",
          font: "jejudoldam"
        },
        {
          title: "카페24 써라운드",
          font: "cafe24ssurround"
        },
      ]
    }
  },
  methods: {
    FontSelect(index) {
      // console.log(index)
      // document.querySelector("body").classList = []; 필요한 이유는 클래스가 쌓이는 것을 없앰
      document.querySelector("body").classList = [];
      document.querySelector("body").classList.add(this.FontList[index].font);
      localStorage.setItem("font", this.FontList[index].font)
    },
    FontView(index) {
      document.querySelector("body").style.fontFamily = this.FontList[index].font
      // 내방법
      // html 에 주게되면 폰트는 작동하지만 다크모드가 작동안함
      // document.querySelector("body").classList.add(this.FontList[index].font)
    },
    FontRemove() {
      document.querySelector("body").classList = [];
    }
  },
}
</script>

<style></style>