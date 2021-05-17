<template>
  <v-container fluid>
    <v-app-bar
            color="deep-purple accent-4"
            dark
    >
      <v-spacer/>

      <router-link to="/">
        <v-btn class="ml-3" outlined>
          Главная
        </v-btn>
      </router-link>
      <router-link to="/photo">
        <v-btn class="ml-3" outlined>
          Фотографии
        </v-btn>
      </router-link>
    </v-app-bar>
  </v-container>

</template>

<script>
  export default {
    methods: {},
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }

</style>
