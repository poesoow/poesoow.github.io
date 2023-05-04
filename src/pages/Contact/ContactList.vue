<template>
  <div>
    <div class="max-w-7xl mx-auto my-10">
      
      <div class="flex justify-end pb-2">
        <router-link to="/contact/write" 
          class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm">
          글쓰기
        </router-link>
      </div>

        <ul class="flex justify-between border-green-500 border-t-2 border-b-[1px] p-4 py-2 bg-green-50 text-center font-bold">
          <li class="basis-3/12">번호</li>
          <li class="basis-6/12">제목</li>
          <li class="basis-2/12">글쓴이</li>
          <li class="basis-2/12">날짜</li>
        </ul>
        

        <ul v-for="(data, index) in dataList" :key="index" 
          class="flex justify-between border-b text-center px-4 py-2 even:bg-gray-50 text-xs sm:text-sm hover:font-bold">
          <li class="basis-3/12">{{ dataList.length - index }}</li>
          <li class="basis-6/12 text-left">
            <router-link 
              @click="$store.commit('ContactRead', dataIds[index])" 
              to="/contact/read">{{ data.secret === false ? data.title : '비밀글 입니다.'  }}
            </router-link>
          </li>
          <li class="basis-2/12">{{ data.secret === false ? data.name : '비밀글 입니다.' }}</li>
          <li class="basis-2/12">{{ BoardDate(index) }}</li>
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