<template>
  <header class="container flex-center-between">
    <div class="flex-center gap-6">
      <div class="relative">
        <button @click="currentLang" class="lang-btn p-1 px-2 flex-center relative z-[2] gap-2">
          <IconBase :name="selectedLang.flag"/>
          {{ selectedLang.name }}
        </button>
        <ul
            :class="isShowLang?'translate-y-0 opacity-1 visible':'opacity-0 invisible'"
            class="absolute bg-white z-[2] top-9 left-0 right-0 translate-y-[15px]  transition border border-solid border-green-400  rounded-[4px]">
          <li @click="selectLang(index)"
              class="transition hover:bg-green-100 p-1 rounded-[2px] lang-flag flex-center  gap-2"
              v-for="(lang,index) in
          langs"
              :key="lang">
            <IconBase :name="lang.flag"/>
            {{ lang.name }}
          </li>
        </ul>
      </div>
      <ul class="flex-center size-12 gap-6">
        <li v-for="nav in navs" :key="nav" class="text-sm">
          <router-link class="transition-all hover:text-green-500" :to="nav.path">
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <button @click="" class="user-btn">
      <i class="fas fa-user fa-1x"></i>
      Shaxsiy Kabinet
    </button>
  </header>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  // import SiginIn from "@/auth/SiginIn";

  export default {
    name: "Navbar",
    components: { IconBase},
    data() {
      return {
        isShowLang: false,
        navs: [
          {name: 'Bog\'lanish', path: '#'},
          {name: 'Biz Haqimizda', path: '/about'},
          {name: 'Yetkazib berish', path: '#'},
        ],
        langs: [
          {
            name: 'Uzbek',
            flag: 'uz_flag'

          },
          {
            name: 'English',
            flag: 'en_flag'
          },
          {
            name: 'Russian',
            flag: 'ru_flag'
          },
        ],
        selectedLang: {
          name: "Uzbek",
          flag: "uz_flag"
        }
      }
    },
    mounted() {
    },
    methods: {
      currentLang() {
        this.isShowLang = !this.isShowLang
      },
      selectLang(index) {
        this.isShowLang = false
        this.selectedLang.name = this.langs[index].name
        this.selectedLang.flag = this.langs[index].flag


      }
    }

  }
</script>

<style lang="scss" scoped>
$text-color: #55B74C;
.lang-btn {
  background-color: #cbd5e0;
  border-radius: 3px;
}

.user-btn {
  color: $text-color;
}

.lang-flag {
  cursor: pointer;
  font-size: 14px;
}

.nav-list__item {
  color: rgb(90, 82, 82);
  transition: all .2s linear;

  &:hover {
    color: black;
  }
}
</style>
