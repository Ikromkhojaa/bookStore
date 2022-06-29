<template>
  <Navbar />
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue"
  import Header from "@/components/Header.vue";
  export default {
    components: {Header, Navbar, Footer}
  }
</script>

<style>
</style>
