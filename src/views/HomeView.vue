<template>
  <main>
<!--    <Header />-->
    <Publishs />
    <div class="container flex-center-between">
      <h2 class="text-center mt-8 py-4 text-lg text-green-700">Eng ko'p ko'rilgan Kitoblar!</h2>
      <router-link class="transition-all hover:text-green-400" to="/books"> <i class="fas fa-arrow-right fax-1x"></i>
        Ko'proq...</router-link>
    </div>
    <TopBooks/>
    <UnicalType />
    <OrderCarousel />

  </main>
</template>


<script>
  // import Header from "@/components/Header.vue"
  import Publishs from "@/components/Publishs.vue";
  import UnicalType from "@/components/UnicalType.vue";
  import OrderCarousel from "@/components/OrderCarousel.vue";
  import TopBooks from "@/components/TopBooks.vue";
  export default {
    name: 'HomeView',
    components: {
      TopBooks,
      OrderCarousel,
      UnicalType,
      // Header,
      Publishs,
    }
  }
</script>


