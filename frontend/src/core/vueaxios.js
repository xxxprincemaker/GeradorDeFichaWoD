import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';

const instance = axios.create({
  baseURL: 'http://localhost:30000/api',
});

Vue.use(VueAxios, instance);
