import axios from "axios";
// import i18n from "@/plugnis/i18n";

const $axios = axios.create({
  baseURL: "http://localhost:3004",
  // headers: {
  //     "accept-language": i18n.global.locale,
  // },
});

export default $axios;
