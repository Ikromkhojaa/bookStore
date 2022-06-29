<template>
  <div class="footer">
    <div class="container">
      <div class="grid-container">
        <div class="my-10" v-for="foot in footers " :key="foot">
          <h3 class="text-center mb-4 text-green-500">{{ foot.title }}</h3>
          <a href="#" class="text-gray-500 block my-2 ml-10"> <i class="fas text-gray-600 fa-arrow-right fa-1x"></i> {{
              foot.item
            }}</a>
          <a href="#" class="text-gray-500 block my-2 ml-10"> <i class="fas text-gray-600 fa-arrow-right fa-1x"></i>
            {{ foot.item1 }}</a>
          <a href="#" class="text-gray-500 block my-2 ml-10"> <i class="fas text-gray-600 fa-arrow-right fa-1x"></i>
            {{ foot.item2 }}</a>
        </div>
      </div>
      <div class="flex-center-between">
        <div class="flex-center">
          <a class="mr-5" v-for="card in cards" key="card" href="#">
            <img class="block" :src="card.src" :alt="card.alt">
          </a>
          <br>
          <a class="mr-5" href="#">
            <img class="uzcards" src="src/assets/photos/footer/humo.png" alt="Photo not Found!">
          </a>
          <a class="mr-5" href="#">
            <img class="uzcards" src="src/assets/photos/footer/uzcard.jpg" alt="Photo not Found!">
          </a>
        </div>
        <div>
          <a class="mx-3" href="https://www.youtube.com/channel/UCI9HAIHwQijdBO3POxHyqOw/featured"><i
              class="fab text-red-600 fa-youtube fa-2x"></i></a>
          <a class="mx-3" href="#"><i class="fab fa-whatsapp fa-2x text-green-500"></i></a>
          <a class="mx-3" href="https://t.me/emro_me"><i class="fab fa-telegram fa-2x text-blue-500"></i></a>
          <a class="mx-3"
             href="https://www.instagram.com/ikromkhoja.me/"><i class="fab fa-instagram fa-2x text-red-400"></i></a>
          <a class="mx-3" href=""> <i class="fab fa-tiktok fa-2x text-gray-400"></i></a>
        </div>
      </div>

      <p class="text-center mt-20 pb-5 text-sm text-gray-600">webook@yandex.com 2022</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        footers: [
          {
            title: "Ma'lumot",
            item: "Yetkazib berish",
            item1: "Bog'lanish",
            item2: "Biz haqimizda"
          },
          {
            title: "Shaxsiy kabinet",
            item: "Shaxsiy kabinet",
            item1: "Xaridor savati",
            item2: "Sevimli maxsulotlar"
          },
          {
            title: "Manzilimiz",
            item: "Yunusobod 7 kv",
            item1: "Yunusobod, Unversam",
            item2: "MegaPlanet"
          },
          {
            title: "Telefon raqam",
            item: "+99871 000 11 22",
            item1: "+99893 009 44 62",
            item2: "Email: webook@yandex.com"
          }
        ],
        cards: [
          {
            src: "src/assets/photos/footer/master.png", alt: "Photo not Found!"
          },
          {
            src: "src/assets/photos/footer/paypal.png", alt: "Photo not Found!"
          },
          {
            src: "src/assets/photos/footer/qiwi.png", alt: "Photo not Found!"
          },
          {
            src: "src/assets/photos/footer/visa.png", alt: "Photo not Found!"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  background-color: #2B2B2B;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .block {
      transition: all .2s linear;

      &:hover {
        transform: translateX(6px);
        color: white;
      }
    }

    .fas {
      transition: all .2s linear;
      margin-right: 10px;
    }
  }
}

.uzcards {
  width: 80px;
  height: 40px;
  object-fit: cover;
}

.block:hover .fas {
  color: #55B74C;
}

</style>
