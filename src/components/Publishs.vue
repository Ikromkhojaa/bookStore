<template>
  <div>
    <div class="bg-green-600 py-4 px-20">
      <Splide  :options="options" aria-label="My Favorite Images">
        <SplideSlide v-for="(publish, index) in publishs" :key="index.id">
          <button class="text-white py-1 px-4 rounded">{{publish.name}}</button>
        </SplideSlide>
      </Splide>
    </div>
    <div class="container grid-container">
      <div class="bg-gray-200 rounded py-2 item1">
        <div>
          <h3 class="text-center mb-2 italic ">Top Kategoriyalar!</h3>
          <div>
            <button
                class="w-full rounded transition-all px-3 hover:bg-green-400 hover:text-white text-left py-2 float-left"
                    v-for="(category, index) in
            categories"
                    :key="index.id">
              {{index + 1}}. {{category.name}}
            </button>
          </div>
        </div>
      </div>
      <div class="item2 ">
        <Splide :options="{ rewind: true, autoplay: true, pagination: false,  interval: '4000',  width: '80vw',
        height:'80vh'  }"
                aria-label="My Favorite Images">
          <SplideSlide>
            <img class="rounded" src="../assets/photos/image3.jpg" alt="Sample 1">
          </SplideSlide>
          <SplideSlide>
            <img class="rounded" src="../assets/photos/image2.jpg" alt="Sample 2">
          </SplideSlide>
          <SplideSlide>
            <img class="rounded" src="../assets/photos/image4.jpg" alt="Sample 2">
          </SplideSlide>
          <SplideSlide>
            <img class="rounded" src="../assets/photos/image5.jpg" alt="Sample 2">
          </SplideSlide>
        </Splide>
      </div >
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
  import '@splidejs/vue-splide/css/skyblue';
export default {
name: "Publishs",
  components: {Splide, SplideSlide,},
  data() {
    return {
      publishs: [
        {id:1, name: 'Akademnashr'},
        {id:2, name: 'Xilol-nashr'},
        {id:3, name: 'Iftikhor Print '},
        {id:4, name: 'Credo Print '},
        {id:5, name: 'Regbooks'},
        {id:6, name: 'Sharq-Ziyo'},
        {id:7, name: 'Toshkent'},
        {id:8, name: 'Turon Nashr'},
        {id:9, name: 'Yosh Kuch'},
        {id:10, name: 'Yosh Kuch'},
        {id:11, name: 'Al Huda'},
        {id:12, name: 'Arrow Books'},
        {id:13, name: 'ART FLEX'},
      ],
      options: {
        rewind: true,
        autoplay: true,
        interval: 2000,
        perPage: 8,
        // height : '15rem',
        pauseOnFocus: true,
        arrows: false,
        pagination: false,
        perMove: 1

      },
      categories: [
        {id:1, name:'Dasturlash'},
        {id:2, name:'Badiy adabiyoti'},
        {id:3, name:'Jahon adabiyoti'},
        {id:4, name:'Biznes '},
        {id:5, name:'Detektiv va Fantastika'},
        {id:6, name:'Biografiya'},
        {id:7, name:'Top-100 besteller'},
        {id:8, name:'Psixologiya va rivojlanish'},
      ]
    }
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
}

</style>
<style>
.splide__arrow svg path{
  fill: palegreen;
}
.splide__arrow svg {
  width: 24px;
  height: 24px;
}
.splide__arrow {
  opacity: 0;
  visibility: hidden;
  transition: all .3s linear;
}
.splide:hover .splide__arrow{
  opacity: 1;
  visibility: visible;
}
</style>
