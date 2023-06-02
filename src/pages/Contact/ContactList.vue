<template>
  <div>
    <div class="max-w-7xl mx-auto my-10">
      
      <div class="flex justify-end pb-2">
        <router-link to="/contact/write" 
          class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">
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
        <li v-for="(data, index) in dataList" :key="index" class="even:bg-gray-50 ">
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
    <ContactComp />
  </div>
</template>

<script>
  import { db } from '@/firebase'
  import ContactComp from '@/components/Contact/ContactComp.vue'

  export default {
    name: 'ContactList',
    components: {
      ContactComp
    },
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

        if(chkSecret) {
          const inputPwd = prompt('비밀번호를 입력해주세요')
          if(inputPwd != password){
            alert('비밀번호를 다시 입력해주세요')
          } else {
            this.$router.push({ name: 'ContactRead', query: { docId: id } })
          }
        } else {
          this.$router.push({ name: 'ContactRead', query: { docId: id }})
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