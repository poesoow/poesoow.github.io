<template>
  <div class="w-full px-[2%] bg-white dark:bg-[#333] darkMode dark:border-t dark:border-t-[#3a3b3d] dark:text-[#d9d9d9]">
    <div class="max-w-7xl mx-auto py-7 px-[2%] text-center md:flex md:flex-row md:justify-between">
      <p>Copyright 2023. SongWooSeop. All Right Reserved.</p>
      <div class="">
        <div class="mx-auto w-fit text-left">
          <p class="">최근 수정일 : {{ formatDate(latestCommitdate) }}</p>
          <p class="">작업 내용 : {{ latestCommitMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import modiList from '@/assets/modifylist.json'
  import { Octokit } from 'octokit'

  export default {
    name: "FooterComponent",
    data() {
      return {
        modiList: modiList,
        latestCommit: null,
        latestCommitMessage: '',
        latestCommitdate: '',
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const octokit = new Octokit({
          auth: process.env.VUE_APP_AUTHKEY,
        })
        await octokit.request('GET /repos/poesoow/poesoow.github.io/commits?per_page=1sha=main', {
          owner: 'poesoow',
          repo: 'poesoow.github.io',
          ref: 'main',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }).then((res) => {
          this.latestCommit = res.data[0].commit
          this.latestCommitMessage = this.latestCommit.message
          this.latestCommitdate = this.latestCommit.author.date
        })
      },
      formatDate(date) {
        // return date.replace(/T|Z/g, ' ')
        return date.slice(0, 10)
      }
    }
  }
</script>

<style>

</style>