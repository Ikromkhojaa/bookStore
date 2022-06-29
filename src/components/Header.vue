<template>
  <header class="container  flex-center-between">
    <router-link class="text-green-900 flex-center-center italic font-bold text-2xl" to="/">
      <img class="w-25 h-20" src="src/assets/photos/logo11.jpg" alt="Not Found!">
    </router-link>

    <div>
      <p class="text-gray-900"> Yunusobod 7kv</p>
      <p class="text-green-400 mr-1"><i class="fas fa-phone"></i> +99871 000 11 22</p>
    </div>

    <ul class="flex-center gap-8">
      <li>
        <Search/>
      </li>
      <li class="color-green-400">
        <router-link to="/cart" class="inline-block text-green-500 relative"
        ><i class="fas fa-cart-plus fa-2x"></i></router-link>
        <span class="absolute text-red-600 -mt-3 ml-1">({{ this.$store.state.cartData.length }})</span>
      </li>
      <li>
        <router-link to="/like" class="inline-block text-green-500 relative">
          <i class="fas fa-heart fa-2x"></i>
        </router-link>
        <span class="absolute text-red-600 -mt-3 ml-1">({{ this.$store.state.likeData.length }})</span>
      </li>
    </ul>
  </header>
</template>

<script>
  import Search from "@/components/Search.vue";

  export default {
    name: "Header",
    components: {Search}
  }
</script>

<style lang="scss" scoped>
.fas {
  color: #55B74C;
}
</style>
