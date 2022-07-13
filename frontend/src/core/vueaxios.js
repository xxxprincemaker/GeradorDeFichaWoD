import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

Vue.use(VueAxios, instance);
