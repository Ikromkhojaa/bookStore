<template>
  <form>
    <input v-model="key" @input="search(key)" class="search" placeholder="Search" type="search">
    <button class="search-btn"><i class="fas fa-search fa-1x"></i></button>
  </form>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        key: ''
      }
    },
    methods: {
      search(key) {
        this.$store.commit('SEARCH', key)
        console.log(this.$store.state.search)
      }
    }
  }
</script>

<style scoped>
.search {
  border: 1px solid #55B74C;
  outline: none;
  padding: 8px 14px;
  border-radius: 5px 0 0 5px;

}

.search-btn {
  color: white;
  padding: 9px 20px;
  border-radius: 0 5px 5px 0;
  background-color: #55B74C;
}
</style>
