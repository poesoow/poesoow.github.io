<template>
  <div class="px-[2%] mx-auto max-w-3xl shadow-[inset_0_0_15px_#86efac]">
    <h1 class="text-2xl font-bold mb-10">이 영역은 nav.vue에 적힌 내용들(props를 통해 데이터가 넘어옴)</h1>
    <div class="mb-10">
      <!-- props 3단계 -->
      <h2 class="text-xl font-bold">result1</h2>
      <p>{{ mytext }}</p>
    </div>
    <div class="mb-10">
      <h2 class="text-xl font-bold">result2</h2>
      <div class="text-sm">Nav.vue에서 숫자타입으로 지정하더라도 App.vue에서 바인딩을 하지 않을 시 문자열로 인식</div>
      <!-- :로 바인딩을 해주어야 타입에 상관없이 문자열에서 숫자로 바뀜  -->
      <div class="mb-5">
        <h3>App.vue 에서 ": 바인딩"을 한 녀석들 -> 숫자로 인식하여 계산이 가능</h3>
        <p>타입 Number : {{ mynum_num1 + 1234 }}</p>
        <p>타입 String : {{ mynum_str1 + 1234 }}</p>
      </div>
      <div class="">
        <h3>App.vue 에서 ": 바인딩"을 하지 않은 녀석들 -> 숫자로 인식하지 못하여 계산이 불가능</h3>
        <p>타입 Number : {{ mynum_num2 + 1234 }}</p>
        <p>타입 String : {{ mynum_str2 + 1234 }}</p>
      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-xl font-bold">result3</h2>
      <div>{{ data }}</div>
      <div>{{ data[0] }}</div>
      <!-- nav.vue에서 datalist[0].Name 할수도 있고 App.vue 에서 :datalist="DataList[0].Name" 로 바인딩할수도 있음  -->
      <div>{{ datalist[0] }}</div>
      <div>{{ datalist[0].Name }}</div>
    </div>
    
    
    

    <!-- 부모한테 시킬 이벤트 -->
    <!-- $emit('이벤트명') -->
    <!-- $emit('이벤트명', 보낼데이터(함수등)) -->
    <div class="mb-10">
      <h2 class="text-xl font-bold">result4</h2>
      <p>
        <button class="border border-[black]" @click="$emit('calc', totaltestnum + 1234)">클릭해봐 total 값 변경 될거야</button>
        <button class="ml-2 border border-[black]" @click="$emit('text')">클릭해봐 test 내용 바뀔꺼야</button>
      </p>
    </div>
  </div>
</template>

<script>
/*
props 사용 (데이터를 주고 받을 때 사용)

##방법
1. App.vue 에서 작성한 props 데이터 받을 때 스크립트 내 props를 오브젝트 형식으로 작성한다.
2. 프롭스 이름 : 데이터 타입  을 작성
- 프롭스 이름은 App.vue Nav 컴포넌트 에서 보낸 이름(예시에서는 mytext)
- 데이터타입은 String / Number / Object / Array 등
- 문자열 / 숫자 
3. html에 바인딩


##특징
props 의 기본형태는 string

:(콜론)을 안붙이면 문자열로 전달되며, 데이터로 전달하기 위해서는 :바인드를 해주어야 한다.
오브젝트 이름을 사용하면 전체 데이터가 특정 데이터를 적용하면 오브젝트.키값으로 사용

자식이 부모의 데이터를 바꿀 수 없다
props의 데이터도 바꿀 수없다
따라서 부모가 가진 데이터를 자식이 바꾸고 싶다면, 자식 컴포넌트에서 부모에게 명령해야한다.
이를 커스텀 이벤트라고 부른다.

*/
  export default {
    // 컴포넌트 이름
    name: "NavPage",
    // props 1단계 props: {}
    props:{
      // props 2단계
    mytext : String,
    mynum_num1: Number,
    mynum_str1: String,
    mynum_num2: Number,
    mynum_str2: String,
    data: Array,
    datalist: Object,
    totaltestnum: Number
    }
  }
</script>

<style scoped>

</style>