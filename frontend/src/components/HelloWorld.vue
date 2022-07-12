<template>
  <v-container>
    <v-text-field
      v-model="x.arquetipo"
      label="Arquetipo"
      persistent-hint
      outlined
      class="mb-3"/>
    <v-text-field
      v-model="x.nivel"
      label="Nivel"
      persistent-hint
      outlined
      class="mb-3"/>
    <v-col>
      <v-row>
        <v-text-field
          v-model="x.paradigma.crencaRandom"
          label="Crença"
          persistent-hint
          outlined
          class="mb-3"/>
        <v-text-field
          v-model="x.paradigma.praticaRandom"
          label="Praticas"
          persistent-hint
          outlined
          class="mb-3"/>
      </v-row>
      <v-text-field v-for="(pratica,i) in this.x.paradigma.instrumentoRandom" :key="pratica"
                    v-model="x.paradigma.instrumentoRandom[i]"
                    :label="'Instrumento ' + (i+1)"
                    persistent-hint
                    outlined
                    class="mb-3">

      </v-text-field>
    </v-col>

  </v-container>
</template>

<script>
import personagemService from '@/services/personagemService';

export default {
  name: 'HelloWorld',

  data: () => ({
    x: {
      paradigma: {},
    },
  }),
  methods: {
    async getPersonagem() {
      return personagemService.getPersonagens('Hermetico', 'Adepto Maior').then((response) => {
        this.x = response.data;
        console.log(response.data);
      });
    },
  },
  mounted() {
    this.getPersonagem();
  },
};
</script>
<style>

</style>
