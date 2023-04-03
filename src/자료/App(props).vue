<template>

  <div class="px-[2%] mx-auto max-w-3xl mb-20 shadow-[inset_0_0_15px_yellow]">
    <div class="mb-10">
      <h2 class="text-2xl font-bold">이영역은 부모컴포넌트(App.vue)에 적힌 내용(설명)</h2>
      <div>
        <div>props는 컴포넌트 관계에서 실행된다 부모컴포넌트 - 자식컴포넌트 (ex App.vue - Nav.vue)</div>
        <div class="text-sm">아래내용은 컴포넌트 설정은 되었있다는 가정하에서 설명</div>
      </div>
    </div>
    <div class="mb-10">
      <h3 class="text-xl">1. 부모컴포넌트(App.vue) 에서 props를 받고 사용하기 위해서는</h3>
      <div>
        <div>1-1. 태그형식으로 사용된 컴포넌트에</div>
        <div>mytext="props" 와 같이 프롭스 이름 = "프롭스 내용" 입력(기본 타입은 문자열)</div>
        <div>-> 사용예 {{ propsContent1 }}</div>
      </div>
    </div>
    <div class="mb-10">
      <h3 class="text-xl">2. 자식컴포넌트(Nav.vue) 에서 props를 제공하기 위해서는</h3>
      <div>
        <div>
          <div>2-1. 부모컴포넌트(App.vue) 에서 작성한 props 데이터 받을 때 스크립트 내 props를 오브젝트 형식으로 작성</div>
          <div>-> {{ propsContent2 }}</div>
        </div>
        <div class="mt-5">
          <div>2-2. props내에 프롭스 이름 : 데이터 타입 을 작성</div>
          <div>- 프롭스 이름은 부모컴포넌트(App.vue)의 Nav 컴포넌트(태그)에서 보낸 이름(예시에서는 mytext)</div>
          <div>- 데이터타입은 String / Number / Object / Array 등</div>
          <div>-> 사용예 {{ propsContent3 }}</div>
        </div>
        <div class="mt-5">
          <div>2-3. 자식컴포넌트(Nav.vue) html에 바인딩 필요</div>
          <div>-> 사용예 {{ propsContent4 }}</div>
          <div>- 결과 -> <span class="font-bold">result1</span></div>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <h3 class="text-xl">3. 문자열 제외 데이터 타입 활용</h3>
      <div>
        <div>3-1. props를 숫자형으로 사용하기 위해서는(즉 계산을 하기 위해서)</div>
        <div>자식컴포넌트(Nav.vue)의 - props에서 데이터 타입을 Number 하는 것 뿐만 아니라 부모컴포넌트(App.vue) 에서 바인딩이 필요함 </div>
        <div>-> 사용예 {{ propsContent5 }}</div>
      </div>
      <div class="mt-5">
        <div>3-2. 계산을 하기 위해서는</div>
        <div>자식컴포넌트(Nav.vue) 에서 계산이 되어지고 자식컴포넌트(Nav.vue)의 html에 바인딩 한 부분에 계산식 들어감</div>
        <div>-> 사용예 {{ propsContent6 }}</div>
        <div>- 결과 -> <span class="font-bold">result2</span></div>
      </div>
      <div class="mt-5">
        <div>3-3. 숫자형이 아니더라도 문자열이 아니라면</div>
        <div>자식컴포넌트(Nav.vue)의 - props에서 데이터 타입을 해당 데이터 부모컴포넌트(App.vue)에서 바인딩이 필요함 </div>
        <div>-> 사용예 {{ propsContent7 }}</div>
        <div>- 결과 -> <span class="font-bold">result3</span></div>
      </div>
    </div>
    <!-- 위에 내용 이해하고 나서 아래에 대해 보기 -->
    <div class="mb-10">
      <h3 class="text-xl">4. 커스텀 이벤트 이해하기</h3>
      <div>
        <div>4-1. 기본적으로 자식컴포넌트는 부모컴포넌트의 데이터뿐 아니라 props 데이터도 바꿀 수 없다.</div>
        <div>따라서 부모가 가진 데이터를 자식이 바꾸고 싶다면, 자식 컴포넌트에서 부모에게 명령이 필요 이 특별한 이벤트를 커스텀 이벤트라고 한다.</div>
        <div>$emit('이벤트명') 또는 $emit('이벤트명', 보낼데이터(함수등)) 을 사용</div>
        <div>-> 사용예
          <div>
            <div>자식 컴포넌트에는 <span class="font-bold">{{ propsContent8 }}</span> 추가</div>
            <div>부모 컴포넌트에는 자식 컴포넌트 태그에 <span class="font-bold">{{ propsContent9 }}</span> 추가</div>
          </div> 
          <div class="mt-3">
            <div>자식 컴포넌트에는 <span class="font-bold">{{ propsContent10 }}</span> 추가</div>
            <div>부모 컴포넌트에는 자식 컴포넌트 태그에 <span class="font-bold">{{ propsContent11 }}</span> 추가</div>
          </div>
          <div>- 결과 -> <span class="font-bold">result4의 버튼을 클릭 시 아래 tatal 과 텍스트가 변경됨</span> </div>
        </div>
      </div>
      <div class="mt-5">
        <div>total : {{ Total }}</div>
        <div>테스트메세지 {{ MsgChk }}</div>
      </div>
    </div>
  </div>





  <!-- nav.vue에서 숫자타입으로 지정하더라도 App.vue에서 바인딩을 하지 않을 시 문자열로 인식 -->
  <Nav mytext="props 기본 형태는 문자열" 
  :mynum_num1="1234" mynum_num2="1234" :mynum_str1="1234" mynum_str2="1234" 
  :data="['abdc','efgh']" 
  :datalist="DataList"
  @text="MsgChk='text 이벤트로 내용이 바뀜'"    
  @calc="Total = $event"
  :totaltestnum="1234"/>


</template>

<script>
import ListItem from './assets/company.json'


import Nav from './components/nav.vue'
/* 다른 컴포넌트 불러오는 방법
1. 임포트 해준다 누구를? 가지고 올 컴포넌트를 
import 사용할이름(작명) from '컴포넌트 위치' 
주의) 1번만 하면 일단 에러 발생 > 임포트 한 컴포넌트를 사용하지 않으면 에러가 발생!!!

2. 스크립트 component 공간에 작명한 이름을 등록해준다.
주의) 컴포넌트를 추가적으로 작성하기 위해서는 반드시 , 를 이용해서 등록한다
예) HelloWorld Nav (x) HelloWorld, Nav (o)

3. 등록이 완료된 컴포넌트는 html 원하는 공간에 태그형식으로 사용할 수 있다. 
예) <Nav></Nav>, <Nav />
*/


export default {
  name: 'App',
  components: {
    Nav,
  },
  // ListItem을 바로 사용할수도 있으나 data로 저장하는것을 권장
  data() {
    return {
      // props 작동을 보기위한 코드 3줄
      DataList: ListItem,
      Total: 0,
      MsgChk : '테스트중',
      // 아래는 설명을 위한 코드
      propsContent1: '<Nav mytext="props 기본 형태는 문자열" />',
      propsContent2: "props: { }",
      propsContent3: 'props:{mytext : String}',
      propsContent4: '<p>{{ mytext }}</p>',
      propsContent5: ':mynum_num1="1234"',
      propsContent6: '<p>타입 String : {{ mynum_num1 + 1234 }}</p>',
      propsContent7: '<Nav mytext="props 기본 형태는 문자열" :mynum_num1 = "1234" :datalist="DataList[0].Name" :data="["abdc","efgh"]"',
      propsContent8: '<button @click="$emit("text")">클릭해봐 test 내용 바뀔꺼야</button>',
      propsContent9: '@text="MsgChk=text 이벤트로 내용이 바뀜"',
      propsContent10: '<button @click="$emit("calc", totaltestnum + 1234)">클릭해봐 total 값 변경 될거야</button>',
      propsContent11: '@calc="Total = $event"'
    }
  },
}



</script>

<style>

</style>
