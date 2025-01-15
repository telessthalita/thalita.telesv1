<template>
  <div class="about-page page d-flex flex-col items-center justify-center px-8 py-16">
    <div class="text-4xl font-bold text-gradient uppercase ">
      About TT
    </div>

    <v-container>
      <v-row justify="space-between" align="center" class="gap-8">
        <v-col cols="12" md="4" class="text-center">
          <h2 class="text-lg font-semibold text-pink-400 mb-4">Who Am I?</h2>
          <p class="text-sm leading-relaxed">
            I am a FullStack developer driven by curiosity and a passion for creation. 
            I consider myself an explorer, whether it's unraveling lines of code, seeking balance in my routine, or venturing into the unknown. 
            I have been called the "Goddess of Technology," a title that reflects the deep connection I have with what I do. 
            I work with authenticity, innovation, and a constant focus on making a positive impact through technology.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <h2 class="text-lg font-semibold text-pink-400 mb-4">My Interests</h2>
          <p class="text-sm leading-relaxed">
            Technology is my greatest passion, especially in areas like artificial intelligence, data engineering, software engineering, automation, and management. 
            I love exploring innovative solutions that transform ideas into realities and shape the future.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <h2 class="text-lg font-semibold text-pink-400 mb-4">What Drives Me</h2>
          <p class="text-sm leading-relaxed">
            I am motivated by challenges that allow me to grow and continuously learn. 
            For me, every project is an opportunity to experiment, collaborate, and create something that has a real and lasting impact.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page {
  background: linear-gradient(to right, #131313, #1d1d3b);
  color: white;
  
}

.text-gradient {
  background: linear-gradient(to right, #863be9, #4e398a);
    -webkit-text-fill-color: transparent;
}
</style>
