<template>
  <v-container class="home-page" fluid>
    <v-row class="d-flex justify-start align-center">
      <v-col class="text-left">
        <span class="text-white text-lg text-h1 break-words name">Thalita Teles</span>
        <p class="text-white subtitle">Desenvolvedora Fullstack | Engenheira de IA</p>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-start align-start mt-4">
      <v-col cols="12" md="6" class="d-flex align-center">
        <p class="text-white description">Aqui estão alguns dos meus projetos no GitHub.</p>
      </v-col>

      <v-col cols="12" md="6">
        <div class="carousel-wrapper">
          <v-carousel hide-delimiters v-if="repos.length" height="auto" class="custom-carousel">
            <v-carousel-item v-for="repo in repos" :key="repo.id" class="carousel-item-content pa-2">
              <v-card class="project-card elevation-5 mx-auto" max-width="500">
                <v-card-title class="text-gradient">{{ repo.name }}</v-card-title>
                <v-card-text class="text-body py-3">{{ repo.description || 'Sem descrição' }}</v-card-text>
                <v-card-actions>
                  <v-btn text @click="openRepo(repo.html_url)">Ver no GitHub</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
          </v-carousel>
          <p v-if="!repos.length" class="text-left text-white">Carregando projetos...</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const repos = ref([]);

const fetchRepos = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/telessthalita/repos');
    repos.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar repositórios:', error);
  }
};

const openRepo = (url) => {
  window.open(url, '_blank');
};

onMounted(() => {
  fetchRepos();
});
</script>

<style scoped>
.home-page {
  padding: 2rem;
}

.name {
  font-size: 40px;
  font-weight: bold;
}

.subtitle {
  font-size: 20px;
  color: #888;
}

.text-gradient {
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 28px;
}

.project-card {
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 28px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.1);
  min-height: 250px;
  max-width: 500px;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 700px;
  padding: 0 60px;
}

.custom-carousel {
  width: 100%;
}

.carousel-item-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 20px 0;
}

.v-carousel__prev,
.v-carousel__next {
  background: rgba(255, 255, 255, 0.3) !important;
  border-radius: 50%;
  color: white !important;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 2;
}

.v-carousel__prev:hover,
.v-carousel__next:hover {
  background: rgba(255, 255, 255, 0.5) !important;
}

@media (max-width: 768px) {
  .home-page {
    padding: 1.5rem;
  }

  .carousel-wrapper {
    max-width: 100%;
    padding: 0 50px;
  }

  .project-card {
    width: 100%;
    max-width: 450px;
    padding: 20px;
    min-height: 220px;
  }

  .v-carousel__prev,
  .v-carousel__next {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .project-card {
    max-width: 320px;
    padding: 16px;
    min-height: 200px;
  }

  .carousel-wrapper {
    padding: 0 40px;
  }
}

.description {
  font-size: 18px;
  color: #ddd;
  max-width: 700px;
  margin: 0;
  line-height: 1.5;
}
</style>
