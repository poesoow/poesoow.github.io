<template>
  <div>
    <div ref="section-0">
      <div 
        class="w-full bg-cover bg-center bg-no-repeat" 
        :style="visual > 1400 ? { 'background-image': 'url(' + require('@/assets/images/visual_desk.jpg') + ')' } : { 'background-image': 'url(' + require('@/assets/images/visual_mobile.jpg') + ')' }">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap items-center h-[103vh]">
            <div class="basis-full md:basis-full text-center py-3">
              <p 
                class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:[text-#d9d9d9]">
                 "안녕하세요.<br>프론트엔드 개발자<br>송우섭 입니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="section-1">
      <Profile />
    </div> 
    <div ref="section-2">
      <Skill />
    </div> 
    <div ref="section-3">
      <Work :loc="loc" />
    </div>
    <div ref="section-4">
      <Contact :loc="loc" />
    </div>

    <div class="fixed top-40 right-3 hidden xl:block dark:text-[#d9d9d9] dark:bg-[#333]">
     
      <!-- 실험 -->
      <div class="container text-xl">
        <label><input @click="SectionMove('section-0')" type="radio" name="e" checked class="watchingForJs"><div>&lt;Yapdiv /&gt;</div></label>
        <template v-for="(nav, index) in Nav" :key="nav" >
          <label><input @click="SectionMove(`section-${(index + 1)}`)"  type="radio" name="e"  class="watchingForJs">{{ nav }}</label>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Profile from '@/pages/Profile.vue'
  import Work from '@/pages/Work.vue'
  import Skill from '@/pages/Skill.vue'
  import Contact from '@/pages/Contact.vue'

  export default {
    name: "HomePage",
    components: {
      Profile,
      Work,
      Skill,
      Contact
    },
    data() {
      return {
        MenuIndex: '',
        ArrayList: '',
        loc: window.location.href,
        visual: 0,
        Nav: [
          "프로필",
          "스킬",
          "작업",
          "연락"
        ],
      }
    },
    methods: {
      // 오른쪽 스크롤 이벤트 때문에 수정      
      SectionMove(index) {
        this.MenuIndex = index;
        const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
        const offset = rect.top + window.scrollY - 60;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        })
      },
      handleResize(){
        this.visual = visualViewport.width
      },
      watching(){

        const sec0_bottom = this.ArrayList[`section-0`].getBoundingClientRect().bottom;
        const sec1_bottom = this.ArrayList['section-1'].getBoundingClientRect().bottom;
        const sec2_bottom = this.ArrayList['section-2'].getBoundingClientRect().bottom;
        const sec3_bottom = this.ArrayList['section-3'].getBoundingClientRect().bottom;
        const sec4_bottom = this.ArrayList['section-4'].getBoundingClientRect().bottom;

        
        const watchs = document.querySelectorAll('.watchingForJs')
  

          if(Math.floor(sec0_bottom) - 100 >= 0){
            watchs[0].checked = true;
          } else if(Math.floor(sec1_bottom) - 100 >= 0) {
            watchs[1].checked = true;
          } else if(Math.floor(sec2_bottom) - 100 >= 0) {
            watchs[2].checked = true;
          } else if (Math.floor(sec3_bottom) - 100 >= 0) {
            watchs[3].checked = true;
          } else if (Math.floor(sec4_bottom) - 100 >= 0) {
            watchs[4].checked = true;
          }



      }
    },
    mounted() {
      this.ArrayList = this.$refs;

      this.visual = visualViewport.width
      window.addEventListener('resize', this.handleResize);
      // 새로고침한 경우를 위해서 함수 사용 Event 전 추가
      this.watching      
      window.addEventListener('scroll', this.watching)

    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.watching)
    },
  }
</script>

<style scoped>

/* https://codepen.io/t_afif/pen/abaYxQj */
  .container {
    --s: 1em;     /* control the size */
    --g: 16px;    /* the gap */
    --c: #009688; /* the active color */
    
    display: grid;
    grid-auto-rows: 1fr;
    gap: var(--g);
    position: relative;
  }
  .container:before {
    content:"";
    position: absolute;
    height: calc(var(--s)/2);
    left: calc(var(--s)/4 + var(--_x,0px));
    top: calc(var(--s)/4);
    background: var(--c);
    border-radius: 50%;
    aspect-ratio: 1;
    transition: .4s,left cubic-bezier(.1,-2000,.7,-2000) .4s;
  }
  label {
    display: inline-flex;
    line-height: var(--s);
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  input {
    height: var(--s);
    aspect-ratio: 1;
    border: calc(var(--s)/8) solid var(--_c,#939393);
    border-radius: 50%;
    outline-offset: calc(var(--s)/10);
    padding: calc(var(--s)/8);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    font-size: inherit;
    margin: 0;
    transition: .3s;
  }
  input:checked {
    --_c: var(--c);
  }
  .container:not(:has(input:checked)):before {
    --_i: -1;
    opacity: 0;
  }
  .container:has(input:checked):before {
    opacity: 1;
    transform: translateY(calc(var(--_i)*(var(--s) + var(--g))))
  }
  .container:has(label:nth-child(1) input:checked):before {--_i:0;--_x:.02px}
  .container:has(label:nth-child(2) input:checked):before {--_i:1;--_x:.04px}
  .container:has(label:nth-child(3) input:checked):before {--_i:2;--_x:.06px}
  .container:has(label:nth-child(4) input:checked):before {--_i:3;--_x:.08px}
  .container:has(label:nth-child(5) input:checked):before {--_i:4;--_x:.1px}
  /* and so on ..*/

  @media print {
    input[type=radio] {
      -webkit-appearance: auto;
      -moz-appearance: auto;
      appearance: auto;
      background: none;
    }
  }
  @supports not selector(:has(*)) {
    .container:before {
      display: none;
    }
    input:checked {
      --_c: var(--c);
      background: var(--c) content-box;
    }
  }



</style>