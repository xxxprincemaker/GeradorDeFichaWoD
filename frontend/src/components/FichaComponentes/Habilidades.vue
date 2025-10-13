<template>
  <v-container>
    <v-card-title class="justify-center">
      Habilidades
    </v-card-title>
    <v-row v-for="(n, i) in 10" :key="i">
      <v-col>
        <NomeValorFicha
          :nome="talents[i]"
          :category="'talents'"
          :value="getAbility('talents', talents[i].nome)"
          @update="updateAbility"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="skills[i]"
          :category="'skills'"
          :value="getAbility('skills', skills[i].nome)"
          @update="updateAbility"
        />
      </v-col>
      <v-col>
        <NomeValorFicha
          :nome="knowledges[i]"
          :category="'knowledges'"
          :value="getAbility('knowledges', knowledges[i].nome)"
          @update="updateAbility"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NomeValorFicha from '@/components/FichaComponentes/NomeValorFicha.vue';
import talentsData from '@/data/talents';
import skillsData from '@/data/skills';
import knowledgesData from '@/data/knowledges';

export default {
  name: 'HabilidadesFicha',
  components: { NomeValorFicha },
  data: () => ({
    talents: talentsData,
    skills: skillsData,
    knowledges: knowledgesData,
  }),
  computed: {
    ...mapGetters('character', ['getAbility']),
  },
  methods: {
    ...mapActions('character', ['updateAbility']),
  },
};
</script>

<style scoped>

</style>
