<template>
  <div>
    <div class="max-w-7xl mx-auto my-10">

      <div class="flex justify-end pb-2">
        <router-link to="/contact/write"
          class="bg-[#38A1FF] hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">
          글쓰기
        </router-link>
      </div>

      <div class="flex justify-between border-green-500 border-t-2 border-b-[1px] p-4 py-2 bg-green-50 text-center font-bold">
        <span class="basis-2/12 shrink-0">번호</span>
        <span class="basis-5/12 shrink-0">제목</span>
        <span class="basis-1/12 shrink-0">글쓴이</span>
        <span class="basis-1/12 shrink-0">날짜</span>
        <span class="basis-1/12 shrink-0">답변여부</span>
      </div>


      <ul class="">
        <li v-for="(data, index) in dataList" :key="index" class="even:bg-gray-50 cursor-pointer">
          <div @click="chkAndViewData(data.secret, dataIds[index], data.password)">
            <div class="flex justify-between border-b text-center px-4 py-2 text-xs sm:text-sm hover:text-green-500">
              <span class="basis-2/12 shrink-0">{{ dataList.length - index }}</span>
              <span class="basis-5/12 shrink-0 text-left"><font-awesome-icon icon="lock" v-if="data.secret"></font-awesome-icon>{{ data.secret === false ? data.title : '비밀글 입니다.' }}</span>
              <span class="basis-1/12 shrink-0">{{ data.name }}</span>
              <span class="basis-1/12 shrink-0">{{ BoardDate(index) }}</span>
              <span class="basis-1/12 shrink-0">{{ data.complete ? '답변완료' : '답변대기' }}</span>
            </div>
          </div>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
  import { db } from '@/firebase'

  export default {
    name: 'ContactList',
    data() {
      return {
        dataList: [],
        dataIds: []
      }
    },
    mounted() {
      db.collection('contact').orderBy('date', 'desc').limit(10).get().then((data) => {
        data.forEach((e) => {
        this.dataIds.push(e.id)
        this.dataList.push(e.data())
        })
      })
    },
    methods: {
      BoardDate(index) {
        const date = this.dataList[index].date.seconds * 1000 + this.dataList[index].date.nanoseconds / 1000000
        const formattingDate = new Date(date).toLocaleDateString()
        return formattingDate
      },
      chkAndViewData(chkSecret, id, password){

        if(this.$store.state.loginChk){
          // 관리자는 비밀여부 상관없이 들어갈 수 있도록
          this.$router.push({ name: 'ContactRead', query: { docId: id } })
        } else if (!chkSecret) {
          // 비밀글이 아닌 글은 누구나 바로 들어가도록 
          this.$router.push({ name: 'ContactRead', query: { docId: id }})
        } else {
          // 비밀번호 확인 및 비밀글 작성자만 들어가지도록
          const inputPwd = prompt('비밀번호를 입력해주세요')
          inputPwd != password ? alert('비밀번호를 다시 입력해주세요') : this.$router.push({ name: 'ContactRead', query: { docId: id } })
        }


      }
    },
    computed:{
      NamingDate() {
        const date = new Date();
        const RanNum = Math.floor(Math.random() * 999) + 100;
        console.log(RanNum)
        const result = ('' + date.getFullYear() + ''
          + ('0' + (date.getMonth() + 1)).slice(-2) + ''
          + ('0' + date.getDate()).slice(-2) + '-'
          + ('0' + date.getHours()).slice(-2) + ''
          + ('0' + date.getMinutes()).slice(-2) + ''
          + ('0' + date.getSeconds()).slice(-2) + '-' + RanNum
        )
        return result
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>