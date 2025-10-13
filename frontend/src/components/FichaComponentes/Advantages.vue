<template>
  <v-container>
    <v-card-title class="justify-center">
      Advantages
    </v-card-title>

    <!-- Backgrounds -->
    <v-row>
      <v-col cols="12">
        <v-card outlined class="mb-3">
          <v-card-subtitle>Backgrounds (7 points)</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" v-for="bg in backgroundList" :key="bg">
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="6">
                      {{ bg }}:
                    </v-col>
                    <v-col cols="6">
                      <DotRating
                        :value="getBackgroundValue(bg)"
                        :max-dots="5"
                        :min-value="0"
                        @input="updateBackground(bg, $event)"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Willpower -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card outlined class="mb-3">
          <v-card-subtitle>Willpower (Base: 5)</v-card-subtitle>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  Willpower:
                </v-col>
                <v-col cols="6">
                  <DotRating
                    :value="willpower"
                    :max-dots="10"
                    :min-value="5"
                    @input="updateWillpower"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Arete (for mages) -->
      <v-col cols="12" md="6">
        <v-card outlined class="mb-3">
          <v-card-subtitle>Arete (Base: 1)</v-card-subtitle>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  Arete:
                </v-col>
                <v-col cols="6">
                  <DotRating
                    :value="arete"
                    :max-dots="10"
                    :min-value="1"
                    @input="updateArete"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Spheres (for mages) -->
    <v-row>
      <v-col cols="12">
        <v-card outlined class="mb-3">
          <v-card-subtitle>Spheres (6 points)</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" v-for="sphere in sphereList" :key="sphere">
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="6">
                      {{ sphere }}:
                    </v-col>
                    <v-col cols="6">
                      <DotRating
                        :value="getSphereValue(sphere)"
                        :max-dots="5"
                        :min-value="0"
                        @input="updateSphere(sphere, $event)"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DotRating from './DotRating.vue';

export default {
  name: 'AdvantagesSheet',
  components: {
    DotRating,
  },
  data: () => ({
    backgroundList: [
      'Allies',
      'Arcane',
      'Avatar',
      'Contacts',
      'Destiny',
      'Dream',
      'Influence',
      'Library',
      'Mentor',
      'Node',
      'Resources',
      'Sanctum',
    ],
    sphereList: [
      'Correspondence',
      'Entropy',
      'Forces',
      'Life',
      'Matter',
      'Mind',
      'Prime',
      'Spirit',
      'Time',
    ],
  }),
  computed: {
    ...mapGetters('character', ['advantages']),
    willpower() {
      return this.advantages.willpower || 5;
    },
    arete() {
      return this.advantages.arete || 1;
    },
  },
  methods: {
    ...mapActions('character', ['updateAdvantage']),
    getBackgroundValue(name) {
      return this.advantages.backgrounds?.[name] || 0;
    },
    getSphereValue(name) {
      return this.advantages.spheres?.[name] || 0;
    },
    updateBackground(name, value) {
      this.updateAdvantage({
        type: 'backgrounds',
        name,
        value,
      });
    },
    updateSphere(name, value) {
      this.updateAdvantage({
        type: 'spheres',
        name,
        value,
      });
    },
    updateWillpower(value) {
      this.updateAdvantage({
        type: 'willpower',
        name: 'willpower',
        value,
      });
    },
    updateArete(value) {
      this.updateAdvantage({
        type: 'arete',
        name: 'arete',
        value,
      });
    },
  },
};
</script>

<style scoped>

</style>
