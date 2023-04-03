<template>
  <!-- 클래스 네임 jl_wrap : just layout(tailwindcss, css 둘다 없는 상태)  -->
  <!-- 클래스 네임 tl_wrap : layout (tailwindcss) -->
  <!-- 클래스 네임 cl_wrap : layout (css) -->
  <div class="homewrap">
    <!--레이아웃 샘플 <section class="jl_name w-full h-[100vh] relative flex justify-center items-center bg-slate-200">
      <div class="jl_wrap"></div>
    </section> -->
    <section class="tl_intro w-full h-[100vh] relative flex justify-center items-center bg-slate-200">
      <div class="jl_wrap">인트로 영역</div>
    </section>
    <section class="tl_project w-full h-[100vh] relative flex justify-center items-center bg-slate-400">
      <div class=" border border-[red]    tl_wrap flex flex-col text-center max-w-7xl">
        <h2 class=" border border-[blue]">Best 프로젝트</h2>
        <div class="jl_wrap border border-[blue]">
          <ul class="flex flex-wrap basis-[100%] lg:basis-[50%] justify-center gap-[3%]">
            <li class=" border border-[purple]">
              프로젝트1
              <img class="w-[60%] lg:w-[100%]" src="http://placehold.it/500x500" alt="임시이미지">
            </li>
            <li class=" border border-[purple]">
              프로젝트2
              <img class="w-[60%] lg:w-[100%]" src="http://placehold.it/500x500" alt="임시이미지">
            </li>
            <!-- <li class=" border border-[purple]">
              프로젝트3
              <img class="w-[40%] lg:w-[50%]" src="http://placehold.it/400x400" alt="임시이미지">
            </li>
            <li class=" border border-[purple]">
              프로젝트4
              <img class="w-[40%] lg:w-[50%]" src="http://placehold.it/400x400" alt="임시이미지">
            </li> -->
          </ul>
        </div>
        <div>넓이 확인용 lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam necessitatibus officia laborum debitis illo quaerat, amet dignissimos hic similique, tempora cupiditate doloremque ipsa vero. Natus quo rerum eligendi minima.</div>
      </div>
    </section>
    <section class="tl_aboutme w-full h-[100vh] relative flex justify-center items-center bg-slate-600">
      <div class="jl_wrap"></div>
    </section>
    
    
  </div>
</template>

<script>
  // 스크롤 트리거 설치 후 아래 코드작동(공식사이트참고함)
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  

  gsap.utils.toArray("section").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
  ScrollTrigger.create({
    snap: 1 / 2
  });
  // 스크롤 트리거 끝


  // vue 
  export default {
    name: 'HomePage',
    components:{
    }
  }
</script>


<style>

</style>