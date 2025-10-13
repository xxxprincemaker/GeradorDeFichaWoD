<template>
  <v-container>
    <PointTracker />
    <CharacterBasicInfo />
    <Atributos/>
    <Habilidades/>
    <Mago/>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import Atributos from '@/components/FichaComponentes/Atributos.vue';
import Habilidades from '@/components/FichaComponentes/Habilidades.vue';
import Mago from '@/components/FichaComponentes/Supernatural/Mago.vue';
import CharacterBasicInfo from '@/components/FichaComponentes/CharacterBasicInfo.vue';
import PointTracker from '@/components/FichaComponentes/PointTracker.vue';

export default {
  name: 'FichaPersonagem',
  components: {
    PointTracker, CharacterBasicInfo, Mago, Habilidades, Atributos,
  },
  data: () => ({
    characterSheet: {},
  }),
  methods: {
    ...mapActions('character', ['loadFromLocalStorage', 'initializeCharacter']),
  },
  mounted() {
    // Try to load character from localStorage
    const loaded = this.loadFromLocalStorage();
    // If no character exists, initialize a new one
    if (!loaded) {
      this.initializeCharacter();
    }
  },
};
</script>
<style>

</style>
