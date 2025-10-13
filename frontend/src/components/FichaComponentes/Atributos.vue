<template>
  <v-container>
    <v-card-title class="justify-center">
      Atributos
    </v-card-title>

    <!-- Priority Selection -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card outlined>
          <v-card-subtitle>Distribuição de Pontos (7/5/3)</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="physicalPriority"
                  label="Physical"
                  dense
                  outlined
                  @change="updatePriority('physical', physicalPriority)"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="socialPriority"
                  label="Social"
                  dense
                  outlined
                  @change="updatePriority('social', socialPriority)"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="priorityOptions"
                  v-model="mentalPriority"
                  label="Mental"
                  dense
                  outlined
                  @change="updatePriority('mental', mentalPriority)"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Attributes -->
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
    priorityOptions: [
      { text: 'Primária (7)', value: 'primary' },
      { text: 'Secundária (5)', value: 'secondary' },
      { text: 'Terciária (3)', value: 'tertiary' },
    ],
    physicalPriority: null,
    socialPriority: null,
    mentalPriority: null,
  }),
  computed: {
    ...mapGetters('character', ['getAttribute', 'attributePriorities']),
  },
  methods: {
    ...mapActions('character', ['updateAttribute', 'setPriority']),
    updatePriority(category, priority) {
      this.setPriority({
        category: 'attributes',
        subcategory: category,
        priority,
      });
    },
    loadPriorities() {
      this.physicalPriority = this.attributePriorities.physical;
      this.socialPriority = this.attributePriorities.social;
      this.mentalPriority = this.attributePriorities.mental;
    },
  },
  mounted() {
    this.loadPriorities();
  },
  watch: {
    attributePriorities: {
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
