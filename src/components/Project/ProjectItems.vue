<template>
  <!-- / 에서 -->
  <div v-if="latestItem">
    <div v-show="CateName2 == 'LATEST'" class="bg-white mb-8 pt-5 px-8 pb-5 rounded-md flex border flex-wrap darkMode group">
      <Item :item="latestItem" />
    </div>
    <div v-show="CateName2 == 'BEST'">
      <div v-for="item in projectItems" :key="item" class="bg-white mb-8 pt-5 px-8 pb-5 rounded-md flex border flex-wrap darkMode group">
        <Item :item="item" />
      </div>
    </div>
  </div>
  <!-- /project 에서 -->
  <div v-else>
    <div v-for="item in filteredData" :key="item" class="bg-white mb-8 pt-5 px-8 pb-5 rounded-md flex border flex-wrap darkMode group">
      <Item :item="item" />
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Project/Item.vue'

  export default {
    name: 'ProjectItems',
    props: {
      projectItems: Object,
      latestItem: Object,
      CateName2: String,
      filterKey: String,
    },
    components: {
      Item
    },
    computed: {
        filteredData() {
        const filterKey = this.filterKey && this.filterKey.toLowerCase()
        let data = this.projectItems
        if (filterKey) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        return data
      }
    }
  }
</script>
