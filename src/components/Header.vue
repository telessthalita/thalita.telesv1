<template>
  <div>
    <div class="d-flex justify-space-between mt-8">
      <router-link to="/" class="w-2 h-4 ml-16">
        <img src="/src/assets/icone.jpeg" alt="Profile Image" class="w-2 h-4" />
      </router-link>

      <div class="d-flex justify-center mt-8">
        <NavButton class="text-white mr-4" text="About" target="about" />
        <NavButton class="text-white mr-4" text="Projects" target="projects" />
        <NavButton class="text-white mr-4" text="Contact" target="contact" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavButton from './NavButton.vue';
</script>
