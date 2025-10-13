<template>
  <v-container class="align-self-lg-center justify-center" style="max-width: 300px">
    <v-row>
      <v-col style="border-top-width: 10px; margin-top: 10px;">
        {{ displayName }}:
      </v-col>
      <v-col>
        <v-select
          :items="items"
          v-model="localValue"
          item-text="symbol"
          item-value="valor"
          style="font-size: x-large; text-align: center"
          dense
          color="purple"
          flat
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NomeValorFicha',
  props: {
    nome: [String, Object],
    isAttribute: { type: Boolean, default: false },
    listaAbilities: { type: Array, default: () => [] },
    category: { type: String, default: '' },
    value: { type: Number, default: 0 },
  },
  data: () => ({
    speciality: [],
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
  computed: {
    localValue: {
      get() {
        if (this.isAttribute) {
          return this.value || 1;
        }
        return this.value || 0;
      },
      set(newValue) {
        const name = typeof this.nome === 'string' ? this.nome : this.nome.nome;
        this.$emit('update', {
          category: this.category,
          name,
          value: newValue,
        });
      },
    },
    displayName() {
      return typeof this.nome === 'string' ? this.nome : this.nome.nome;
    },
  },
};
</script>

<style scoped>

</style>
