<template>
  <v-container style="padding-left: 150px; padding-right: 150px">
    <v-row>
      <v-col>
        {{ nome }}:
      </v-col>
      <v-col>
        •••••
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NomeValorFicha',
  props: { nome: String },
  data: () => ({
    speciality: [],
  }),
};
</script>

<style scoped>

</style>
