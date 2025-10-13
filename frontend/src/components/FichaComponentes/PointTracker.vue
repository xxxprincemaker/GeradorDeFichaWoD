<template>
  <v-container>
    <v-card outlined class="mb-4">
      <v-card-title class="purple darken-3 white--text">
        Point Tracking
      </v-card-title>
      <v-card-text class="pt-4">
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="mb-2">Creation Points</h3>
            <div class="mb-2">
              <strong>Attributes:</strong>
              <div class="ml-4">
                <span>Physical: {{ pointsRemaining.attributes.primary }}</span><br>
                <span>Social: {{ pointsRemaining.attributes.secondary }}</span><br>
                <span>Mental: {{ pointsRemaining.attributes.tertiary }}</span>
              </div>
            </div>
            <div class="mb-2">
              <strong>Abilities:</strong>
              <div class="ml-4">
                <span>Talents: {{ pointsRemaining.abilities.primary }}</span><br>
                <span>Skills: {{ pointsRemaining.abilities.secondary }}</span><br>
                <span>Knowledges: {{ pointsRemaining.abilities.tertiary }}</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="mb-2">Bonus Points</h3>
            <div class="mb-2">
              <strong>Freebie Points:</strong>
              {{ pointsRemaining.freebie }} / {{ pointsSpent.freebie.total }}
            </div>
            <h3 class="mb-2 mt-4">Experience</h3>
            <div class="mb-2">
              <strong>XP Available:</strong> {{ pointsRemaining.experience }}
            </div>
            <div class="mb-2">
              <strong>XP Total:</strong> {{ pointsSpent.experience.total }}
            </div>
            <div class="mb-2">
              <strong>XP Spent:</strong> {{ pointsSpent.experience.spent }}
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <v-btn color="success" @click="addXP" small>
              Add 10 XP
            </v-btn>
            <v-btn color="warning" @click="resetCharacter" small class="ml-2">
              Reset Character
            </v-btn>
            <v-btn color="error" @click="clearStorage" small class="ml-2">
              Clear Storage
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PointTracker',
  computed: {
    ...mapGetters('character', ['pointsRemaining', 'pointsSpent']),
  },
  methods: {
    ...mapActions('character', ['addExperience', 'resetCharacter', 'clearLocalStorage']),
    addXP() {
      this.addExperience(10);
    },
    clearStorage() {
      // eslint-disable-next-line no-alert, no-restricted-globals
      if (confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
        this.clearLocalStorage();
        this.resetCharacter();
      }
    },
  },
};
</script>

<style scoped>
</style>
