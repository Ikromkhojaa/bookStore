import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/plugins/axios.js";
import VueAxios from "vue-axios";
import "@/assets/style/main.scss";
import "./assets/css/fa/css/all.min.css";
import VueSplide from "@splidejs/vue-splide";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSplide);
app.use(VueAxios, axios);

app.mount("#app");
