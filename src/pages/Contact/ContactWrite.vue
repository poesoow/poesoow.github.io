<template>
  <div class="basis-full relative">
      <div class="max-w-7xl mx-auto my-10">
        <div class="flex flex-wrap gap-x-3 gap-y-3 items-center text-2xl mx-auto px-3">
          <label class="text-3xl">
            <input v-model="title" type="text" placeholder="제목"
              class="border"/>
          </label>
          <label class="">
            <input v-model="name" type="text" placeholder="이름"
            class="border w-40 px-3">
          </label>
          <label class="">
            <input v-model="password" type="password" placeholder="비밀번호"
            class="border w-40 px-3">
          </label>
          <label class="grow text-right">
            <input v-model="secret" type="checkbox">
            비밀글 여부
          </label>
        </div>
        <textarea v-model="content" class="mt-3 border w-full p-3" cols="100" rows="10"></textarea>

      </div>
      <button
        @click="write"
        class="bg-indigo-400 hover:bg-indigo-600 focus:ring-indigo-400 py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm absolute right-1 -bottom-9">
        작성 완료 {{ errorMsg }}
      </button>
    </div>
</template>

<script>
   import { db } from '@/firebase'
   import { auth } from '@/firebase'

  export default {
    name: 'ContactWrite',
    data() {
      return {
        title: '',
        content: '',
        name: '',
        password: '',
        secret: false,
        date: new Date(),
        errorMsg: ''
      }
    },
    methods: {
      write() {
        if(!this.name){
          alert('이름을 입력해주세요')
        } else if (!this.password) {
          alert('비밀번호를 입력해주세요')
        } else if (!this.title) {
          if(this.name.includes('wooseop@')){
            auth.signInWithEmailAndPassword(this.name, this.password).then((() => {
              this.$store.commit("loginToken");
              this.$router.replace('/contact')
            }),
              ((error) => {
                this.errorMsg = error.message
              }))
            } else {
              alert('title을 입력해주세요')
            }
          } else {
            // firebase database 에 쓰기
            db.collection('contact').add({
              'name': this.name,
              'password': this.password,
              'title': this.title,
              'content': this.content,
              'date': this.date,
              'secret': this.secret,
              'complete': false,
              'reples': new Array()
            })
            // 쓰고 페이지 이동
            this.$router.replace('/contact')
          }


      },
    },
  }
</script>

<style lang="scss" scoped>

</style>