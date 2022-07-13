<template>
  <v-container>
    <v-autocomplete
      v-model="crencasSelecionadas"
      :items="crencas"
      item-value="crenca_oid"
      item-text="nome"
      chips
      clearable
      deletable-chips
      dense
      filled
      multiple
      rounded
      small-chips
      solo
      label="Crenças"
      class="accent--text"
    ></v-autocomplete>
    <v-autocomplete
      v-model="praticasSelecionadas"
      :items="praticas"
      item-value="pratica_oid"
      item-text="nome"
      chips
      clearable
      deletable-chips
      dense
      filled
      multiple
      rounded
      small-chips
      solo
      label="Praticas"
    ></v-autocomplete>
    <v-autocomplete
      v-model="instrumentosSelecionados"
      :items="instrumentos"
      item-value="intrumentos_oid"
      item-text="nome"
      chips
      clearable
      deletable-chips
      dense
      filled
      multiple
      rounded
      small-chips
      solo
      label="Instrumentos"
    ></v-autocomplete>
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
    crencas: undefined,
    praticas: [],
    instrumentos: [],
    crencasSelecionadas: [],
    instrumentosSelecionados: [],
    praticasSelecionadas: [],
  }),
  methods: {
    async getPersonagem() {
      return personagemService.getPersonagens('Hermetico', 'Adepto Maior').then((response) => {
        this.x = response.data;
      });
    },
    async getCrencas() {
      return personagemService.getCrencas().then((response) => {
        this.crencas = response.data;
      });
    },

    async getPraticas() {
      return personagemService.getPraticas().then((response) => {
        this.praticas = response.data;
      });
    },

    async getInstrumentos() {
      return personagemService.getInstrumentos().then((response) => {
        this.instrumentos = response.data;
      });
    },

  },
  mounted() {
    this.getPersonagem();
    this.getCrencas();
    this.getPraticas();
    this.getInstrumentos();
  },
};
</script>
<style>
.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: rebeccapurple;
}
</style>
