<template>
  <v-container class="align-self-lg-center justify-center" style="max-width: 300px">
    <v-row>
      <v-col style="border-top-width: 10px; margin-top: 10px;">
        {{ nome }}:
      </v-col>
      <v-col>
        <v-select
        :items="items"
        v-model="selectedAttribute"
        item-text="symbol"
        item-value="valor"
        v-if="isAttribute"
        style="font-size: x-large; text-align: center"
        dense
        color="purple"
        flat
        />
        <v-select
          :items="items"
          v-model="selected"
          item-text="symbol"
          item-value="valor"
          style="font-size: x-large; text-align: center"
          dense
          color="purple"
          flat
          v-else
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NomeValorFicha',
  props: { nome: String, isAttribute: { type: Boolean, default: false } },
  data: () => ({
    speciality: [],
    selected: { valor: 0, symbol: 'ₓ' },
    selectedAttribute: { valor: 1, symbol: '•' },
    items: [
      { valor: 0, symbol: 'ₓ' },
      { valor: 1, symbol: '•' },
      { valor: 2, symbol: '••' },
      { valor: 3, symbol: '•••' },
      { valor: 4, symbol: '••••' },
      { valor: 5, symbol: '•••••' },
      { valor: 6, symbol: '••••• •' },
      { valor: 7, symbol: '••••• ••' },
      { valor: 8, symbol: '••••• •••' },
      { valor: 9, symbol: '••••• ••••' },
      { valor: 10, symbol: '••••• •••••' },
    ],
  }),
};
</script>

<style scoped>

</style>
