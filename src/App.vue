<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
body {
  margin: 0;
  font-family: 'Orbitron', sans-serif; 
  color: white;
  background-image: url('/src/assets/background.gif'); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  height: 100vh; 
}
</style>
