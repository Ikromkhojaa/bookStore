<template>
  <section class="container">
    <div class="card">
      <article v-for="(book, index) in topBooks" :key="index.id"
               class="card-item transition-all hover:bg-gray-300 bg-gray-200">
        <div class="w-full">
          <div @click="getSlug(index)" class="box-img">
            <img class="card-item__img" :src="book.img" alt="Photo not found!">
          </div>
          <h3 class="font-bold text-sm inline">{{ book.create }}:</h3>
          <p class="inline text-xs">{{ book.name }}</p>
          <br>
          <p class="text-gray-600 font-sm">{{ book.price }} so'm</p>
        </div>
        <div class="flex-center-between">
          <button @click="addCart(index)" class="card-item__button">Savatga olish</button>
          <LikedBtn />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  import {mapState} from "vuex";
  import LikedBtn from "@/components/childComponents/LikedBtn.vue";

  export default {
    components: {LikedBtn},
    data() {
      return {}
    },
    computed: {
      ...mapState({
        books: state => state?.books,
      }),

      topBooks() {
        return this.books.slice(-4)
      },
    },
    mounted() {
      this.$store.dispatch('fetchBookHome')
      // this.getSlug()
    },
    methods: {
      getSlug(index) {
        this.$store.commit('SET_SLUG', index)
        this.$router.push(`/books/${index}`)
      },
      addCart(index) {
        this.$store.commit('SET_CART_DATA', this.books[index])
      },
      // addLike(index) {
      //   this.$store.commit('SET_LIKE_DATA', this.books[index])
      // }
    }
  }
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

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
      border-radius: 5px;
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
  margin-top: 20px;
}
</style>
