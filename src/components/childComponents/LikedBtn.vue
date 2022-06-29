<template>
  <div>
    <button :class="isLoading ? 'is-green' : 'is-red '" @click="$emit('addBook', likeBooks())"
            class="is-green "><i
        class="far fa-heart fa-2x"></i></button>
  </div>
</template>

<script>
  export default {
    name: "LikedBtn",
    props: {
      likeBooks: {
        type: Function
      }
    },
    data() {
      return {
        isLoading: true,
      }
    },
    methods: {
      likeBooks() {
        this.isLoading = !this.isLoading
        console.log('bla bla')
      }
    }

  }
</script>

<style lang="scss" scoped>
.is-green {
  color: #55B74C;
  user-select: none;
  user-focus: none;
}

.is-red {
  color: red;
}
</style>
