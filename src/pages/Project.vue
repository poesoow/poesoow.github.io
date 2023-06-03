<template>
  <div class="w-full pt-12 mt-6 px-[2%] pb-8 ">
    <Title>
      PROJECT
      <template v-if="$route.path == '/'" #subTitle>
        <router-link to="/project">
          상단 메뉴바 PROJECT에서 더 많은 작업물을 확인하실 수 있습니다.<font-awesome-icon icon="arrow-up-right-from-square"></font-awesome-icon>
        </router-link>
      </template>
    </Title>

    <!-- /project 에서 -->
    <div v-if="$route.path == '/project'" class="flex justify-between max-w-7xl mx-auto mt-8">
      <div
        class="max-w-7xl">
        <ul class="flex ml-0">
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-[#42b983]'">전체</button>
          </li>
          <li v-for="e in CateList" :key="e" class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-[#42b983] underline'">{{ e.type }}</button>
          </li>
        </ul>
      </div>
      <!-- 검색 -->
      <div class="mr-0 border rounded-md bg-white">
        <label class="relative rounded-md bo h-full">
          <input type="text" class="h-full px-4 rounded-md">
          <font-awesome-icon icon="magnifying-glass" class="cursor-pointer absolute top-0 right-4" />
        </label>
      </div>
    </div>

    <!-- 홈 화면에서 -->
    <div v-else class="flex justify-between max-w-7xl mx-auto mt-8">
      <div
        class="max-w-7xl">
        <ul class="flex ml-0">
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName2 = 'BEST'" :class="CateName2 === 'BEST' && 'font-bold text-[#42b983]'">BEST</button>
          </li>
          <li class="mr-4 border darkMode bg-white rounded-md">
            <button class="py-2 px-5" @click="CateName2 = 'LATEST'" :class="CateName2 === 'LATEST' && 'font-bold text-[#42b983]'">LATEST</button>
          </li>
        </ul>
      </div>
    </div>


    <div class="max-w-7xl mx-auto mt-8">
      <ProjectItems v-if="$route.path == '/'" :projectItems="BestandLatestItems.BEST" :latestItem="BestandLatestItems.LATEST" :CateName2="CateName2" />
      <ProjectItems v-else :projectItems="CateItems" />
    </div>
  </div>
</template>

<script>
import projectlist from '@/assets/projectlist.json'
import Title from '@/components/Title.vue'
import ProjectItems from '@/components/Project/ProjectItems.vue'

export default {
  name: "ProjectPage",
  data() {
    return {
      CateName: "전체",
      CateName2: "BEST",
      ProjectList: projectlist,
    }
  },
  components: {
    Title, ProjectItems
  },
  props: {
    loc: String
  },
  methods: {

  },
  computed: {
    CateList() {
      return this.ProjectList.filter((item, i) => {
        return (
          this.ProjectList.findIndex((item2) => {
            return item.type === item2.type
          }) === i
        )
      })
    },
    CateItems() {
      return this.ProjectList.filter((data) => {
        if (this.CateName !== '전체') {
          return data.type === this.CateName
        } else {
          return data.type
        }
      }).sort((prev, next) => next.orderDate - prev.orderDate)
    },
    BestItems() {
      return this.ProjectList.filter((data) => data.best)
    },
    BestandLatestItems() {

      const latestItem = this.ProjectList.filter(()=>true).sort((prev, next) => next.orderDate - prev.orderDate).shift()
      const bestItems = this.ProjectList.reduce((acc, project) => {
        if(project.best){
          acc = [...acc ,project]
        }
        return acc
      }, [])
      return {BEST: bestItems, LATEST: latestItem }
    }
  },

}
</script>