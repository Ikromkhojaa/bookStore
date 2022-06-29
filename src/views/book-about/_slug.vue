<template>
  <section class="bg-gray-100">
    <h1 class="text-center pt-10 my-8 font-semibold text-3xl">Maxsulot haqida.</h1>
    <div class="container">
      <div class="grid-container">
        <article class="box">
          <img class="box-img" :src="books[slug].img" alt="Photo Not found!">
        </article>
        <div>
          <h2 class="my-4"><b>Yozuvchi:</b> {{books[slug].create}}</h2>
          <p class="my-2"><b>Nomi:</b> {{books[slug].name}}</p>
          <p class="my-2"><b>Kitob nomi:</b> {{books[slug].title}}</p>
          <p class="my-2"><b>Tili:</b> {{books[slug].lang}}</p>
          <p class="my-2"><b>Nashriyot:</b> {{books[slug].publish}}</p>
          <p class="text-gray-800">Narxi:{{books[slug].price}}</p>

          <button class="btn-order">Buyurmat berish</button>
        </div>
      </div>
      <p class="py-10">       {{books[slug].text}}</p>
    </div>
  </section>
<!--  books[slug].name-->
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "_slug",

    computed: {
      ...mapState({
        slug: state => state?.slug,
        books: state => state?.books,
      }),
    },

    mounted() {
      this.$store.dispatch('fetchBookHome')
    }
  }
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .box {
    width: 50%;
    height: 300px;
    overflow: hidden;
      margin-left: 200px;

    &-img {
    }
  }
}
</style>
