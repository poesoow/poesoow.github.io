<template>
  <div>
    <div class="fixed w-full h-full left-0 top-0 z-50 bg-slate-200 flex justify-center items-center px-[2%] box-border">
      <div class="max-w-7xl p-10 bg-white w-full text-center rounded-lg shadow-lg">
        <h3 class="text-[165px] uppercase font-bold mb-12 text-[#262626]">4<span class="text-[#00b7ff]">0</span>4</h3>
        <p class="text-lg font-normal text-[#151515] mt-0 mb-6">해당 페이지를 찾을 수 없습니다.</p>
        <p class="text-lg font-normal text-[#151515] mt-0 mb-6">아래 버튼을 통해 메인으로 이동시거나 <span class="font-bold text-xl">{{ count }}</span>초 뒤 메인으로 자동 이동 됩니다.</p>
        <router-link to="/" class="py-1 px-10 border rounded transition-all hover:text-white hover:shadow-[inset_-60px_0_0_0_#00b7ff,inset_60px_0_0_0_#00b7ff] duration-700">메인</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 5,
      }
    },
    mounted() {
      // 화면이 로딩 다 되고 나면 여기가 첫번째로 실행
      this.countDown();
    },
    methods: {
      countDown() {
        if(this.count > 0){
          // 참고 vue 에서는 settimeinterval 이 동작 안함
            setTimeout(() => {
          this.count--;
          // 반복문을 사용하는 대신 다시 countDown 함수를 호출해서 반복문처럼 사용함
          this.countDown()
        }, 1000);
        }else{
          this.$router.replace('/');
        }

        
        
        
    }
    },
  }
</script>

<style>

</style>