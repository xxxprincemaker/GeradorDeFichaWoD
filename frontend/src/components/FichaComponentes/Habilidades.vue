<template>
  <v-container>
    <v-card-title class="justify-center">
      Habilidades
    </v-card-title>

    <!-- Priority Selection -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card outlined>
          <v-card-subtitle>Distribuição de Pontos (13/9/5)</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="talentsPriority"
                  label="Talents"
                  dense
                  outlined
                  @change="updatePriority('talents', talentsPriority)"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="skillsPriority"
                  label="Skills"
                  dense
                  outlined
                  @change="updatePriority('skills', skillsPriority)"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="knowledgesPriority"
                  label="Knowledges"
                  dense
                  outlined
                  @change="updatePriority('knowledges', knowledgesPriority)"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Abilities -->
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
    priorityOptions: [
      { text: 'Primária (13)', value: 'primary' },
      { text: 'Secundária (9)', value: 'secondary' },
      { text: 'Terciária (5)', value: 'tertiary' },
    ],
    talentsPriority: null,
    skillsPriority: null,
    knowledgesPriority: null,
  }),
  computed: {
    ...mapGetters('character', ['getAbility', 'abilityPriorities']),
  },
  methods: {
    ...mapActions('character', ['updateAbility', 'setPriority']),
    updatePriority(category, priority) {
      this.setPriority({
        category: 'abilities',
        subcategory: category,
        priority,
      });
    },
    loadPriorities() {
      this.talentsPriority = this.abilityPriorities.talents;
      this.skillsPriority = this.abilityPriorities.skills;
      this.knowledgesPriority = this.abilityPriorities.knowledges;
    },
  },
  mounted() {
    this.loadPriorities();
  },
  watch: {
    abilityPriorities: {
      handler() {
        this.loadPriorities();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>

</style>
