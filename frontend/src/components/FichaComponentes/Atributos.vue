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
          :category="'physical'"
          :value="getAttribute('physical', atributosFisicos[i])"
          @update="updateAttribute"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="atributosSociais[i]"
          :is-attribute="true"
          :category="'social'"
          :value="getAttribute('social', atributosSociais[i])"
          @update="updateAttribute"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="atributosMentais[i]"
          :is-attribute="true"
          :category="'mental'"
          :value="getAttribute('mental', atributosMentais[i])"
          @update="updateAttribute"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NomeValorFicha from '@/components/FichaComponentes/NomeValorFicha.vue';

export default {
  name: 'AtributosFicha',
  components: { NomeValorFicha },
  data: () => ({
    atributosFisicos: ['Strength', 'Dexterity', 'Stamina'],
    atributosSociais: ['Manipulation', 'Charisma', 'Appearance'],
    atributosMentais: ['Perception', 'Intelligence', 'Wits'],
  }),
  computed: {
    ...mapGetters('character', ['getAttribute']),
  },
  methods: {
    ...mapActions('character', ['updateAttribute']),
  },
};
</script>

<style scoped>

</style>
