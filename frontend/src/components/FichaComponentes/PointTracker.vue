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

            <!-- Basic Allocation Status -->
            <v-alert
              :type="isBasicAllocationComplete ? 'success' : 'info'"
              dense
              class="mb-3"
            >
              <strong>Status:</strong>
              {{
                isBasicAllocationComplete
                  ? 'Alocação básica completa - Pontos de bônus disponíveis!'
                  : 'Defina as prioridades e distribua os pontos'
              }}
            </v-alert>

            <div class="mb-2">
              <strong>Attributes:</strong>
              <div class="ml-4">
                <span>
                  Physical ({{ getPriorityLabel(displayAttributePoints.physical.priority) }}):
                  {{ displayAttributePoints.physical.remaining }}
                  / {{ displayAttributePoints.physical.total }}
                </span><br>
                <span>
                  Social ({{ getPriorityLabel(displayAttributePoints.social.priority) }}):
                  {{ displayAttributePoints.social.remaining }}
                  / {{ displayAttributePoints.social.total }}
                </span><br>
                <span>
                  Mental ({{ getPriorityLabel(displayAttributePoints.mental.priority) }}):
                  {{ displayAttributePoints.mental.remaining }}
                  / {{ displayAttributePoints.mental.total }}
                </span>
              </div>
            </div>
            <div class="mb-2">
              <strong>Abilities:</strong>
              <div class="ml-4">
                <span>
                  Talents ({{ getPriorityLabel(displayAbilityPoints.talents.priority) }}):
                  {{ displayAbilityPoints.talents.remaining }}
                  / {{ displayAbilityPoints.talents.total }}
                </span><br>
                <span>
                  Skills ({{ getPriorityLabel(displayAbilityPoints.skills.priority) }}):
                  {{ displayAbilityPoints.skills.remaining }}
                  / {{ displayAbilityPoints.skills.total }}
                </span><br>
                <span>
                  Knowledges ({{ getPriorityLabel(displayAbilityPoints.knowledges.priority) }}):
                  {{ displayAbilityPoints.knowledges.remaining }}
                  / {{ displayAbilityPoints.knowledges.total }}
                </span>
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
    ...mapGetters('character', [
      'pointsRemaining',
      'pointsSpent',
      'attributePriorities',
      'abilityPriorities',
      'isBasicAllocationComplete',
    ]),
    displayAttributePoints() {
      const priorities = this.attributePriorities;
      return {
        physical: this.getPointsForCategory('attributes', 'physical', priorities.physical),
        social: this.getPointsForCategory('attributes', 'social', priorities.social),
        mental: this.getPointsForCategory('attributes', 'mental', priorities.mental),
      };
    },
    displayAbilityPoints() {
      const priorities = this.abilityPriorities;
      return {
        talents: this.getPointsForCategory('abilities', 'talents', priorities.talents),
        skills: this.getPointsForCategory('abilities', 'skills', priorities.skills),
        knowledges: this.getPointsForCategory('abilities', 'knowledges', priorities.knowledges),
      };
    },
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
    getPointsForCategory(type, category, priority) {
      const remaining = this.pointsRemaining[type]?.[category] || 0;
      let total = 0;

      if (type === 'attributes') {
        if (priority === 'primary') total = this.pointsSpent.attributes.primary;
        else if (priority === 'secondary') total = this.pointsSpent.attributes.secondary;
        else if (priority === 'tertiary') total = this.pointsSpent.attributes.tertiary;
      } else if (type === 'abilities') {
        if (priority === 'primary') total = this.pointsSpent.abilities.primary;
        else if (priority === 'secondary') total = this.pointsSpent.abilities.secondary;
        else if (priority === 'tertiary') total = this.pointsSpent.abilities.tertiary;
      }

      return { remaining, total, priority };
    },
    getPriorityLabel(priority) {
      if (priority === 'primary') return 'Primária';
      if (priority === 'secondary') return 'Secundária';
      if (priority === 'tertiary') return 'Terciária';
      return 'Não definida';
    },
  },
};
</script>

<style scoped>
</style>
