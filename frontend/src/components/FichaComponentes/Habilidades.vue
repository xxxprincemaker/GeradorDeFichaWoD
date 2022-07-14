<template>
  <v-container>
    <v-card-title class="justify-center">
      Habilidades
    </v-card-title>
    <v-row v-for="(n, i) in 8" :key="i">
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

export default {
  name: 'HabilidadesFicha',
  components: { NomeValorFicha },
  data: () => ({
    talents: ['Strentgh', 'Dexterity', 'Stamina'],
    skills: ['Manipulation', 'Charisma', 'Apperance'],
    knowledges: ['Perception', 'Intelligence', 'Wits'],
  }),
};
</script>

<style scoped>

</style>
