<template>
  <div class="projects-page page px-8 py-16">
    <v-container>
      <v-row justify="center" align="start" class="gap-8">
        <!-- Modificando para exibir 4 projetos em uma fileira -->
        <v-col cols="12" sm="6" md="3" v-for="project in projects" :key="project.id">
          <div class="project-card">
            <div class="card-inner">
              <div class="card-front">
                <v-img :src="project.image" :alt="project.title" class="project-image"></v-img>
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">{{ project.title }}</h2>
                  <p>{{ project.shortDescription }}</p>
                </v-card-text>
              </div>
              <div class="card-back">
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">{{ project.title }}</h2>
                  <p>{{ project.fullDescription }}</p>
                  <v-btn text :href="project.link" target="_blank" class="mt-4">
                    Learn More
                  </v-btn>
               </v-card-text>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';

const projects = ref([
  {
    id: 1,
    title: "MoodTunes",
    image: "/src/assets/moodtunes.png",
    fullDescription:
      "AI Chatbot that creates personalized playlists based on the user's mood.",
    link: "https://example.com/moodtunes",
  },
  {
    id: 2,
    title: "RaceTrack",
    image: "/src/assets/dreamframes.png",
    fullDescription:
      "Front-end application consuming an API to provide real-time race stats, driver performance, and team comparisons for F1 fans.",
    link: "https://example.com/racetrackliv",
  },
  {
    id: 3,
    title: "DreamFrames",
    image: "/src/assets/racetrack.png",
    fullDescription:
      "Explore and interact with unique AI-generated artwork in an immersive, customizable gallery.",
    link: "https://example.com/dreamframes",
  },
  {
    id: 4,
    title: "SpotifyClone",
    image: "/src/assets/scopify.jpeg",
    fullDescription:
      "A project replicating Spotify's core functionality, including music streaming.",
    link: "https://spotify-ykmg.onrender.com/",
  }
]);
</script>

<style scoped>
.project-card {
  perspective: 1000px;
  width: 100%;
  height: 340px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
 
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.project-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}

.card-front {
  background-color: #1e1e2f;
}

.card-back {
  background-color: #29293d;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

.project-image {
  height: 282px;
  object-fit: cover;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.project-image:hover {
  transform: scale(1.1);
  filter: brightness(0.85);
}

.project-image::after {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  mix-blend-mode: multiply;
  transition: opacity 0.5s;
}

.project-image:hover::after {
  opacity: 0;
}
</style>
