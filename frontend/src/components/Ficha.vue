<template>
  <v-container>
    <CharacterBasicInfo />
    <Atributos/>
    <Habilidades/>
    <Mago/>
  </v-container>
</template>

<script>
import Atributos from '@/components/FichaComponentes/Atributos.vue';
import Habilidades from '@/components/FichaComponentes/Habilidades.vue';
import Mago from '@/components/FichaComponentes/Supernatural/Mago.vue';
import CharacterBasicInfo from '@/components/FichaComponentes/CharacterBasicInfo.vue';

export default {
  name: 'FichaPersonagem',
  components: {
    CharacterBasicInfo, Mago, Habilidades, Atributos,
  },
};
</script>
<style>

</style>
