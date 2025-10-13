<template>
  <v-container class="align-self-lg-center justify-center" style="max-width: 300px">
    <v-row>
      <v-col style="border-top-width: 10px; margin-top: 10px;">
        {{ displayName }}:
      </v-col>
      <v-col>
        <DotRating
          :value="localValue"
          :max-dots="10"
          :min-value="isAttribute ? 1 : 0"
          @input="handleDotClick"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DotRating from './DotRating.vue';

export default {
  name: 'NomeValorFicha',
  components: {
    DotRating,
  },
  props: {
    nome: [String, Object],
    isAttribute: { type: Boolean, default: false },
    listaAbilities: { type: Array, default: () => [] },
    category: { type: String, default: '' },
    value: { type: Number, default: 0 },
  },
  computed: {
    localValue() {
      if (this.isAttribute) {
        return this.value || 1;
      }
      return this.value || 0;
    },
    displayName() {
      return typeof this.nome === 'string' ? this.nome : this.nome.nome;
    },
  },
  methods: {
    handleDotClick(newValue) {
      const name = typeof this.nome === 'string' ? this.nome : this.nome.nome;
      this.$emit('update', {
        category: this.category,
        name,
        value: newValue,
      });
    },
  },
};
</script>

<style scoped>

</style>
