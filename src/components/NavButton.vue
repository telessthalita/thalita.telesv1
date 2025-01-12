<template>
  <v-btn
    @click="scrollToTarget"
    class="text-white futuristic-btn py-3 px-8 rounded-lg font-bold uppercase tracking-wide shadow-lg transition-all duration-300 ease-in-out  mt-4"
    elevation="3"
  >
    {{ text }}
  </v-btn>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
});

const scrollToTarget = () => {
  const targetElement = document.getElementById(props.target);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.futuristic-btn {
  background: linear-gradient(45deg, #131313, #8f7df0);
  min-width: 200px; 
  display: flex;
  transition: all 0.3s ease; 
}

.futuristic-btn:hover {
  background: linear-gradient(45deg, #141414, #5005ff);
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.futuristic-btn:focus {
  outline: none;
  border-color: #000000;
}

.futuristic-btn .v-btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
