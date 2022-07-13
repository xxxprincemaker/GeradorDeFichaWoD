<template>
  <v-app>
    <v-app-bar
      app
      color="purple darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Mage The Ascension Logo"
          class="shrink mr-2"
          contain
          src="https://caffeineforge.files.wordpress.com/2014/03/mage20.png"
          transition="scale-transition"
          width="70"
        />

        <v-img
          alt="Mage The Ascension - Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mage_The_Ascension_logo_M20.png/640px-Mage_The_Ascension_logo_M20.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main style="margin-top: 5px">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
