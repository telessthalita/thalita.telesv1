<template>
    <v-container class="home-page" fluid>
      <v-row class="d-flex justify-center align-center">
        <v-col class="text-center">
          <span class="text-white text-lg text-h1 font-bold break-words">
            Echoes of Tomorrow
          </span>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.home-page {
  padding: 2rem;
}

@media (min-width: 600px) {
  .home-page {
    padding: 4rem;
  }
}

@media (min-width: 960px) {
  .home-page {
    padding: 6rem;
  }
}

@media (min-width: 1280px) {
  .home-page {
    padding: 10rem;
  }
}
</style>
  