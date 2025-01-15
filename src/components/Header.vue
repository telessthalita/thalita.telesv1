<template>
  <div>
    <div class="d-flex justify-space-between ">
      <router-link to="/" class="w-2 h-4 ml-16">
      </router-link>

      <div class="d-flex justify-center mt-4 mb-4">
        <Button class="text-white mr-4" text="About" target="About" />
        <Button class="text-white mr-4" text="Projects" target="Projects" />
        <Button class="text-white mr-4" text="Contacts" target="Contacts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
</script>
