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

  async getTalents() {
    const talents = await Vue.axios.get('/talents');
    return talents.data;
  },

  async getSkills() {
    const skills = await Vue.axios.get('/skills');
    return skills.data;
  },

  async getKnowledges() {
    const knowledges = await Vue.axios.get('/knowledges');
    return knowledges.data;
  },
};
