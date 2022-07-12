import Vue from 'vue';
// import axios from 'axios';

export default {

  getPersonagens(arquetipo, nivel) {
    return Vue.axios.get(`http://localhost:30000/api/x/${arquetipo}/${nivel}`);
  },

};
