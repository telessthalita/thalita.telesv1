<template>
  <div>
    <div class="d-flex justify-space-between align-center px-4">

      <iconHome class="ml-2 ml-sm-4" />

 
      <div class="d-none d-md-flex align-center gap-3 mr-md-8">
        <Button class="text-white" text="About" target="About" />
        <Button class="text-white" text="Projects" target="Projects" />
      </div>

      <v-menu v-if="$vuetify.display.mdAndDown">
        <template v-slot:activator="{ props }">
          <v-btn
            variant="text"
            icon="mdi-menu"
            color="white"
            v-bind="props"
            class="d-md-none mr-2"
          ></v-btn>
        </template>

        <v-list  class="px-2">
          <v-list-item
            v-for="(item, index) in ['About', 'Projects', 'Contacts']"
            :key="index"
          >
            <Button 
              class="text-white" 
              :text="item" 
              :target="item" 
              block 
              variant="text"
            />
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import iconHome from './iconHome.vue';
</script>

<style scoped>
.gap-3 {
  gap: 12px;
}

/* Ajustes para mobile */
@media (max-width: 960px) {
  .px-4 {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  
  .ml-2 {
    margin-left: 4px !important;
  }
}
</style>