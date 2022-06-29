import { createStore } from "vuex";
import axios from "@/plugins/axios.js";

const axiosPlugin = (store) => {
  store.$axios = axios;
};

const store = createStore({
  state: {
    slug: undefined,
    books: [],
    cartData: [],
    search: "",
    likeData: [],
  },
  mutations: {
    SET_BOOKS_HOME(state, payload) {
      state.books = payload;
    },
    SET_CART_DATA(state, payload) {
      state.cartData = [payload, ...state.cartData];
    },
    SET_LIKE_DATA(state, payload) {
      state.likeData = [payload, ...state.likeData];
    },
    SET_SLUG(state, payload) {
      state.slug = payload;
    },
    SEARCH(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    fetchBookHome({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/books")
          .then((res) => {
            commit("SET_BOOKS_HOME", res.data);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },

  plugins: [axiosPlugin],
});

export default store;
