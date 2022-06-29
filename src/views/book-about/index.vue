<template>
  <section class="container">
    <div class="card">
      <article v-for="(book, index) in  searchFilter" :key="index.id"
               class="card-item flex flex-col gap-4 justify-between transition-all hover:bg-gray-300 bg-gray-200">

        <div>
          <div @click="getSlug(index)" class="box-img">
            <img class="card-item__img" :src="book.img" alt="Photo not found!">
          </div>
          <h3 class="font-bold text-sm inline">{{ book.create }}:</h3>
          <p class="inline text-xs">{{ book.name }}</p>
          <br>
          <p class="text-gray-600 font-sm">{{ book.price }} so'm</p>
        </div>
        <div class="flex-center-between">
          <button @click="addCart(index)" class="card-item__button self-start">Savatga olish</button>
          <LikedBtn @addBook="addLike" />
        </div>
      </article>
    </div>

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import LikedBtn from "@/components/childComponents/LikedBtn.vue";

  export default {
    name: "index",
    components: {LikedBtn},
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        books: state => state?.books,
        key: state => state?.search,
      }),
      searchFilter() {
        return this.books.filter((book) =>
            book.name.toLowerCase().includes(this.key.toLowerCase())
        );
      },
    },
    mounted() {
      this.$store.dispatch('fetchBookHome')
      // this.getSlug()
    },
    methods: {
      addCart(index) {
        this.$store.commit('SET_CART_DATA', this.books[index])
      },
      getSlug(index) {
        this.$store.commit('SET_SLUG', index)
        this.$router.push(`/books/${index}`)
      },
      addLike(index) {
        this.$store.commit('SET_LIKE_DATA', this.books[index])
      }
    }
  }
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  &-item {
    width: 100%;
    //height: 400px;
    align-items: stretch;
    border-radius: 10px;
    padding: 10px 20px 10px;
    transition: all .3s ease-in-out;
    position: relative;

    &:hover {
      //transform: translateY(-4px);
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      margin-bottom: 5px;
      transition: all .3s linear;

      &:hover {
        transform: scale(1.08)
      }
    }
  }
}


.box-img {
  width: 100%;
  height: 230px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}

.card-item__button {
  color: white;
  background-color: #55B74C;
  border-radius: 5px;
  padding: 10px 14px;
  //position: absolute;
  //bottom: 14px;
  //align-items: flex-end;
}
</style>
