<template>
  <!-- {{ menustate }} -->
  <div @click="f_hamburgermenustate()" class="hamburgerMenu" :class="{on: hamburgermenustate}">
    <span></span>
  </div>
</template>

<script>
  export default {
    name: "HamburgerMenu",
    data() {
      return {
        hamburgermenustate: false,
      }
    },
    methods: {
      f_hamburgermenustate(){
        // return this.menustate === false ? this.menustate = true  : this.menustate = false
        // 아래코드로 줄임
        return this.hamburgermenustate = !this.hamburgermenustate
      }
    },
  }
</script>

<style scoped>
  /* 햄버거 메뉴 */
.hamburgerMenu{
  display: block;
  position: fixed; 
  top: 18px;
  right: 10px;
  width: 30px;
  height: 20px;
  text-decoration: none;
}
.hamburgerMenu span{
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 5px;
  background: rgba(0,0,0,1);
  color: transparent;
  transition: all 0.5s;
  border-radius: 0.3rem;
}
.hamburgerMenu span::before,
.hamburgerMenu span::after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: rgba(0,0,0,1);
  transition: all 0.5s;
  border-radius: 0.3rem;
}
.hamburgerMenu span::before{
  top: -8px;
}
.hamburgerMenu span::after{
  top: 8px;
}
.hamburgerMenu.on span{
  background: rgba(0,0,0,0);
}
.hamburgerMenu.on span::before{
  top: 0px;
  transform: rotate(45deg);
}
.hamburgerMenu.on span::after{
  top: 0px;
  transform: rotate(-45deg);
}
/* 햄버거 메뉴 끝 */



</style>