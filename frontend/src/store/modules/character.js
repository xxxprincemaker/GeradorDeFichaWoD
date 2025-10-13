import talents from '@/data/talents';
import skills from '@/data/skills';
import knowledges from '@/data/knowledges';
import { STARTING_POINTS } from '../constants';

const STORAGE_KEY = 'wod_character_sheet';

// Helper function to initialize attributes
const initializeAttributes = () => ({
  physical: {
    Strength: 1,
    Dexterity: 1,
    Stamina: 1,
  },
  social: {
    Manipulation: 1,
    Charisma: 1,
    Appearance: 1,
  },
  mental: {
    Perception: 1,
    Intelligence: 1,
    Wits: 1,
  },
});

// Helper function to initialize abilities
const initializeAbilities = () => {
  const result = {
    talents: {},
    skills: {},
    knowledges: {},
  };

  talents.forEach((talent) => {
    result.talents[talent.nome] = 0;
  });

  skills.forEach((skill) => {
    result.skills[skill.nome] = 0;
  });

  knowledges.forEach((knowledge) => {
    result.knowledges[knowledge.nome] = 0;
  });

  return result;
};

// Helper function to create default state
const getDefaultState = () => ({
  // Basic info
  basicInfo: {
    firstName: '',
    lastName: '',
    email: '',
    template: 'none',
  },

  // Attributes
  attributes: initializeAttributes(),

  // Abilities
  abilities: initializeAbilities(),

  // Advantages
  advantages: {
    backgrounds: {},
    willpower: 5,
    arete: 1,
    spheres: {},
  },

  // Point tracking
  points: {
    // Creation points
    attributes: {
      primary: STARTING_POINTS.attributes.primary,
      secondary: STARTING_POINTS.attributes.secondary,
      tertiary: STARTING_POINTS.attributes.tertiary,
      spent: {
        physical: 0,
        social: 0,
        mental: 0,
      },
      priorities: {
        physical: null, // 'primary', 'secondary', or 'tertiary'
        social: null,
        mental: null,
      },
    },
    abilities: {
      primary: STARTING_POINTS.abilities.primary,
      secondary: STARTING_POINTS.abilities.secondary,
      tertiary: STARTING_POINTS.abilities.tertiary,
      spent: {
        talents: 0,
        skills: 0,
        knowledges: 0,
      },
      priorities: {
        talents: null, // 'primary', 'secondary', or 'tertiary'
        skills: null,
        knowledges: null,
      },
    },
    freebie: {
      total: STARTING_POINTS.freebie,
      spent: 0,
    },
    experience: {
      total: 0,
      spent: 0,
    },
  },

  // Character creation step
  creationStep: 0,

  // Character sheet metadata
  createdAt: null,
  lastModified: null,
});

const state = getDefaultState();

const getters = {
  // Basic info
  basicInfo: (stateArg) => stateArg.basicInfo,

  // Attributes
  attributes: (stateArg) => stateArg.attributes,
  getAttribute: (stateArg) => (category, name) => (
    stateArg.attributes[category]?.[name] || 1
  ),

  // Abilities
  abilities: (stateArg) => stateArg.abilities,
  getAbility: (stateArg) => (category, name) => (
    stateArg.abilities[category]?.[name] || 0
  ),

  // Advantages
  advantages: (stateArg) => stateArg.advantages,

  // Points
  pointsRemaining: (stateArg) => {
    const attributePoints = {};
    const abilityPoints = {};

    // Calculate attribute points based on priorities
    ['physical', 'social', 'mental'].forEach((category) => {
      const priority = stateArg.points.attributes.priorities[category];
      let available = 0;
      if (priority === 'primary') {
        available = stateArg.points.attributes.primary;
      } else if (priority === 'secondary') {
        available = stateArg.points.attributes.secondary;
      } else if (priority === 'tertiary') {
        available = stateArg.points.attributes.tertiary;
      }
      attributePoints[category] = available - stateArg.points.attributes.spent[category];
    });

    // Calculate ability points based on priorities
    ['talents', 'skills', 'knowledges'].forEach((category) => {
      const priority = stateArg.points.abilities.priorities[category];
      let available = 0;
      if (priority === 'primary') {
        available = stateArg.points.abilities.primary;
      } else if (priority === 'secondary') {
        available = stateArg.points.abilities.secondary;
      } else if (priority === 'tertiary') {
        available = stateArg.points.abilities.tertiary;
      }
      abilityPoints[category] = available - stateArg.points.abilities.spent[category];
    });

    return {
      attributes: attributePoints,
      abilities: abilityPoints,
      freebie: stateArg.points.freebie.total - stateArg.points.freebie.spent,
      experience: stateArg.points.experience.total - stateArg.points.experience.spent,
    };
  },

  pointsSpent: (stateArg) => stateArg.points,

  // Get priorities
  attributePriorities: (stateArg) => stateArg.points.attributes.priorities,
  abilityPriorities: (stateArg) => stateArg.points.abilities.priorities,

  // Check if basic allocation is complete
  isBasicAllocationComplete: (stateArg) => {
    // Check if all priorities are assigned
    const attrPriorities = stateArg.points.attributes.priorities;
    const abilPriorities = stateArg.points.abilities.priorities;

    const allAttrPrioritiesSet = attrPriorities.physical
      && attrPriorities.social
      && attrPriorities.mental;

    const allAbilPrioritiesSet = abilPriorities.talents
      && abilPriorities.skills
      && abilPriorities.knowledges;

    return allAttrPrioritiesSet && allAbilPrioritiesSet;
  },

  creationStep: (stateArg) => stateArg.creationStep,

  // Complete character data for export
  characterSheet: (stateArg) => stateArg,
};

/* eslint-disable no-param-reassign */
const mutations = {
  // Basic info mutations
  SET_BASIC_INFO(stateArg, info) {
    stateArg.basicInfo = { ...stateArg.basicInfo, ...info };
    stateArg.lastModified = Date.now();
  },

  // Attribute mutations
  SET_ATTRIBUTE(stateArg, { category, name, value }) {
    if (!stateArg.attributes[category]) return;

    const oldValue = stateArg.attributes[category][name] || 1;
    stateArg.attributes[category][name] = value;

    // Auto-track spent points (attributes start at 1, so count dots above 1)
    const currentSpent = stateArg.points.attributes.spent[category];
    const valueDiff = (value - 1) - (oldValue - 1);
    stateArg.points.attributes.spent[category] = currentSpent + valueDiff;

    stateArg.lastModified = Date.now();
  },

  // Ability mutations
  SET_ABILITY(stateArg, { category, name, value }) {
    if (!stateArg.abilities[category]) return;

    const oldValue = stateArg.abilities[category][name] || 0;
    stateArg.abilities[category][name] = value;

    // Auto-track spent points
    const currentSpent = stateArg.points.abilities.spent[category];
    const valueDiff = value - oldValue;
    stateArg.points.abilities.spent[category] = currentSpent + valueDiff;

    stateArg.lastModified = Date.now();
  },

  // Advantage mutations
  SET_ADVANTAGE(stateArg, { type, name, value }) {
    if (type === 'willpower' || type === 'arete') {
      stateArg.advantages[type] = value;
    } else {
      if (!stateArg.advantages[type]) {
        stateArg.advantages[type] = {};
      }
      stateArg.advantages[type][name] = value;
    }
    stateArg.lastModified = Date.now();
  },

  // Point tracking mutations
  SET_POINTS_SPENT(stateArg, { category, subcategory, value }) {
    if (stateArg.points[category] && stateArg.points[category].spent) {
      if (subcategory) {
        stateArg.points[category].spent[subcategory] = value;
      } else {
        stateArg.points[category].spent = value;
      }
    }
    stateArg.lastModified = Date.now();
  },

  // Set attribute or ability priority
  SET_PRIORITY(stateArg, { category, subcategory, priority }) {
    if (stateArg.points[category] && stateArg.points[category].priorities) {
      // Clear the priority from other subcategories
      Object.keys(stateArg.points[category].priorities).forEach((key) => {
        if (stateArg.points[category].priorities[key] === priority) {
          stateArg.points[category].priorities[key] = null;
        }
      });
      // Set the new priority
      stateArg.points[category].priorities[subcategory] = priority;
    }
    stateArg.lastModified = Date.now();
  },

  ADD_EXPERIENCE_POINTS(stateArg, amount) {
    stateArg.points.experience.total += amount;
    stateArg.lastModified = Date.now();
  },

  SPEND_EXPERIENCE_POINTS(stateArg, amount) {
    stateArg.points.experience.spent += amount;
    stateArg.lastModified = Date.now();
  },

  // Creation step mutation
  SET_CREATION_STEP(stateArg, step) {
    stateArg.creationStep = step;
    stateArg.lastModified = Date.now();
  },

  // Reset character
  RESET_CHARACTER(stateArg) {
    const defaultState = getDefaultState();
    Object.keys(defaultState).forEach((key) => {
      stateArg[key] = defaultState[key];
    });
    stateArg.createdAt = Date.now();
    stateArg.lastModified = Date.now();
  },

  // Load character from storage
  LOAD_CHARACTER(stateArg, data) {
    Object.keys(data).forEach((key) => {
      if (stateArg[key] !== undefined) {
        stateArg[key] = data[key];
      }
    });
  },

  // Set metadata
  SET_METADATA(stateArg, { createdAt, lastModified }) {
    if (createdAt) stateArg.createdAt = createdAt;
    if (lastModified) stateArg.lastModified = lastModified;
  },
};
/* eslint-enable no-param-reassign */

const actions = {
  // Initialize character
  initializeCharacter({ commit }) {
    commit('RESET_CHARACTER');
    commit('SET_METADATA', { createdAt: Date.now(), lastModified: Date.now() });
  },

  // Update basic info
  updateBasicInfo({ commit, dispatch }, info) {
    commit('SET_BASIC_INFO', info);
    dispatch('saveToLocalStorage');
  },

  // Update attribute
  updateAttribute({ commit, dispatch }, payload) {
    commit('SET_ATTRIBUTE', payload);
    dispatch('saveToLocalStorage');
  },

  // Update ability
  updateAbility({ commit, dispatch }, payload) {
    commit('SET_ABILITY', payload);
    dispatch('saveToLocalStorage');
  },

  // Update advantage
  updateAdvantage({ commit, dispatch }, payload) {
    commit('SET_ADVANTAGE', payload);
    dispatch('saveToLocalStorage');
  },

  // Update points spent
  updatePointsSpent({ commit, dispatch }, payload) {
    commit('SET_POINTS_SPENT', payload);
    dispatch('saveToLocalStorage');
  },

  // Set priority for attributes or abilities
  setPriority({ commit, dispatch }, payload) {
    commit('SET_PRIORITY', payload);
    dispatch('saveToLocalStorage');
  },

  // Add experience points
  addExperience({ commit, dispatch }, amount) {
    commit('ADD_EXPERIENCE_POINTS', amount);
    dispatch('saveToLocalStorage');
  },

  // Spend experience points
  spendExperience({ commit, dispatch }, amount) {
    commit('SPEND_EXPERIENCE_POINTS', amount);
    dispatch('saveToLocalStorage');
  },

  // Set creation step
  setCreationStep({ commit, dispatch }, step) {
    commit('SET_CREATION_STEP', step);
    dispatch('saveToLocalStorage');
  },

  // Save to localStorage
  saveToLocalStorage({ state: stateArg }) {
    try {
      const data = JSON.stringify(stateArg);
      localStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error saving to localStorage:', error);
    }
  },

  // Load from localStorage
  loadFromLocalStorage({ commit }) {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        commit('LOAD_CHARACTER', parsed);
        return true;
      }
      return false;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error loading from localStorage:', error);
      return false;
    }
  },

  // Reset character
  resetCharacter({ commit, dispatch }) {
    commit('RESET_CHARACTER');
    dispatch('saveToLocalStorage');
  },

  // Clear localStorage
  clearLocalStorage() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error clearing localStorage:', error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
