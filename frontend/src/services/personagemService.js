import Vue from 'vue';
// import axios from 'axios';

export default {

  getPersonagens(arquetipo, nivel) {
    return Vue.axios.get(`/x/${arquetipo}/${nivel}`);
  },

  getCrencas() {
    return Vue.axios.get('/crencas');
  },

  getPraticas() {
    return Vue.axios.get('/praticas');
  },

  getInstrumentos() {
    return Vue.axios.get('/instrumentos');
  },
};
