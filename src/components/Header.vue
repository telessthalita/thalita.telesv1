<template>
  <div>
    <div class="d-flex justify-space-between  ">
        <iconHome />
      <div class="d-flex justify-center mt-4 mb-4 mr-8">
        <Button class="text-white mr-4" text="About" target="About" />
        <Button class="text-white mr-4" text="Projects" target="Projects" />
        <Button class="text-white mr-4" text="Contacts" target="Contacts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import iconHome from './iconHome.vue'; 
</script>
<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
