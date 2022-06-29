<template>
  <div class=" container">
    <Splide :options="options">
      <SplideSlide v-for="(order, index) in orders" :key="index">
        <img :src="order.img" alt="Photo not found!">
        <p class="text-center">{{order.text}}</p>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
export default {
name: "OrderCarousel",
  components: {
    Splide,
    SplideSlide,
  },
    data() {
      return {
        options: {
          rewind: true,
          autoplay: true,
          interval: 3000,
          perPage: 4,
          pauseOnFocus: true,
          arrows: false,
          pagination: false,
          perMove: 1

        },
        orders: [
          {
            id: 1,
            text: "Yunusobod Unversamdagi do'konimizdan eng yangi kitoblarni sotadigan ulgurji do'konimiz mavjud.",
            img: "src/assets/photos/star.png"
          },
          {
            id:2,
            text: "Yetkazib berishdan oldin" +
                "biz sizga tayyor kitobning fotosuratini yuboramiz.",
            img: "src/assets/photos/photo.png"
          },
          {
            id:3,
            text: "Ha, bizda eng arzon narxlar mavjud" +
                "onlayn! Odatdagidan 2-3 barobar arzon!",
            img: "src/assets/photos/price.png"
          },
          {
            id:4,
            text: "Biz 2 soatdan boshlab yetkazib beramiz! (Haqiqiy vaqt," +
                "marketing hiylasi emas)" +
                "Buyurtmalarni 24/7 qabul qilamiz.",
            img: "src/assets/photos/order.png"
          },
          {
            id:5,
            text: "Bizning xodimimiz siz bilan bog'lanadi." +
                "Buyurtmangiz kitobingiz tafsilotlarini aniqlashtirish uchun, ishni yanada sifatli tayyorlanishi uchun.",
            img: "src/assets/photos/orderAbout.png"
          },
          {
            id:6,
            text:
                "Maxsulot  yetkazib berilgandan keyin bank kartasi, naqd pul yoki Click o'tkazmasi to'lash imkoniyati mavjud.",
            img: "src/assets/photos/checkcard.png"
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
.splide__slide {
  width: 200px;
  height: 240px;
  padding: 15px 20px;
  text-align: center;
  transition: all .3s ease;
  margin: 1px;

  &:hover {
    border: 1px solid #55B74C;
    border-radius: 3px ;
  }

  img {
    margin-left: 94px;
    margin-bottom: 30px;
  }
}
</style>
