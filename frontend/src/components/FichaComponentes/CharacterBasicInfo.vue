<template>
  <v-form v-model="valid">
    <v-container style="padding-left: 150px; padding-right: 150px">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            dense
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
            dense
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
          :items="template"
          item-text="text"
          item-value="value"
          label="Template"
          v-model="templateSelected"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    template: [{ text: 'ₓ', value: 'none' },
      { text: 'Mage', value: 'Mage' }, {
        text: 'Vampire',
        value: 'Vampire',
      }, { text: 'Werecreature', value: 'Werecreature' }, { text: 'Changeling', value: 'Changeling' }, { text: 'Wraith', value: 'Wraith' },
      { text: 'Amenti', value: 'Mummy' }],
    templateSelected: { text: 'x', value: 'none' },
  }),
};
</script>

<style scoped>

</style>
