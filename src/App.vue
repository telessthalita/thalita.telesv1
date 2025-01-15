<template>
  <div>
    <Header />
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 50 });
};

const enter = (el, done) => {
  gsap.to(el, { opacity: 1, y: 0, duration: 1, onComplete: done });
};

const leave = (el, done) => {
  gsap.to(el, { opacity: 0, y: 50, duration: 1, onComplete: done });
};
</script>

<style>
body {
  margin-bottom: 4rem;
  font-family: 'Orbitron', sans-serif;
  color: white;
  background-image: url('/src/assets/background.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
