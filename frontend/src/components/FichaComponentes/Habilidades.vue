<template>
  <v-container>
    <v-card-title class="justify-center">
      Habilidades
    </v-card-title>
    <v-row v-for="(n, i) in 10" :key="i">
      <v-col>
        <NomeValorFicha
          :nome="talents[i]"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="skills[i]"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="knowledges[i]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NomeValorFicha from '@/components/FichaComponentes/NomeValorFicha.vue';
import personagemService from '@/services/personagemService';

export default {
  name: 'HabilidadesFicha',
  components: { NomeValorFicha },
  data: () => ({
    talents: { nome: '' },
    skills: { nome: '' },
    knowledges: { nome: '' },
  }),
  methods: {
    async getKnowledges() {
      this.knowledges = await personagemService.getKnowledges();
    },
    async getTalents() {
      this.talents = await personagemService.getTalents();
    },
    async getSkills() {
      this.skills = await personagemService.getSkills();
    },
  },
  mounted() {
    this.getTalents();
    this.getSkills();
    this.getKnowledges();
  },
};
</script>

<style scoped>

</style>
