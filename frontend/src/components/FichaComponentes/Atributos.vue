<template>
  <v-container>
    <v-card-title class="justify-center">
      Atributos
    </v-card-title>
    <v-row v-for="(n, i) in 3" :key="i">
      <v-col>
        <NomeValorFicha
          :nome="atributosFisicos[i]"
          :is-attribute="true"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="atributosSociais[i]"
          :is-attribute="true"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="atributosMentais[i]"
          :is-attribute="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NomeValorFicha from '@/components/FichaComponentes/NomeValorFicha.vue';

export default {
  name: 'AtributosFicha',
  components: { NomeValorFicha },
  data: () => ({
    atributosFisicos: ['Strentgh', 'Dexterity', 'Stamina'],
    atributosSociais: ['Manipulation', 'Charisma', 'Apperance'],
    atributosMentais: ['Perception', 'Intelligence', 'Wits'],
  }),
};
</script>

<style scoped>

</style>
