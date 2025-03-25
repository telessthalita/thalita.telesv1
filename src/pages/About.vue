<template>
  <div class="about-page">
    <v-container>
      <v-row justify="center" align="start" class="gap-6">
        <v-row class="gap-6" style="width: 100%;">
          <v-col cols="12" md="6">
            <v-card class="about-card elevation-5">
              <v-card-title class="text-gradient">Meu Caminho</v-card-title>
              <v-card-text class="text-body">
                Desde cedo, aprendi a me reinventar e buscar novas formas de crescer. A tecnologia sempre foi meu
                refúgio e inspiração, desde os jogos que me ensinaram estratégia até o desenvolvimento de software.
                Minha missão é transformar ideias em soluções eficientes e escaláveis.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="about-card elevation-5">
              <v-card-title class="text-gradient">Meu Propósito</v-card-title>
              <v-card-text class="text-body">
                Acredito que a tecnologia não é apenas código, mas um meio para resolver problemas reais. Meu objetivo é
                construir aplicativos intuitivos e impactantes, combinando inovação, eficiência e colaboração.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="gap-6" style="width: 100%;">
          <v-col cols="12" md="6">
            <v-card class="about-card elevation-5">
              <v-card-title class="text-gradient">Hard Skills</v-card-title>
              <v-card-text>
                <v-row class="skills-grid" justify="center">
                  <v-col v-for="skill in hardSkills" :key="skill" cols="10" sm="4" md="4">
                    <span class="skill-text">{{ skill }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="about-card elevation-5">
              <v-card-title class="text-gradient">Soft Skills</v-card-title>
              <v-card-text>
                <v-row class="skills-grid" justify="center">
                  <v-col v-for="skill in softSkills" :key="skill" cols="12" sm="6" md="4">
                    <span class="skill-text">{{ skill }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-col cols="12">
          <v-card class="about-card elevation-5 text-center">
            <v-card-title class="text-gradient"> Vamos Conectar</v-card-title>
            <v-card-text>
              <div class="contact-icons">
                <a href="mailto:telessthalita@outlook.com" target="_blank" class="icon-link">
                  <v-icon>mdi-email</v-icon>
                </a>
                <a href="https://github.com/telessthalita" target="_blank" class="icon-link">
                  <v-icon>mdi-github</v-icon>
                </a>
                <a href="https://wa.me/5579999058123?text=Olá,%20Gostaria%20de%20conversar!" target="_blank"
                  class="icon-link">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const hardSkills = [
  'JavaScript', 'Python', 'SQL', 'React', 'Vue', 'Node.js', 'C#', 'APIs', 'Git/GitHub',
  'Automação', 'MultiCloud (em andamento)', 'DevOps (em andamento)', 'Scrum', 'IA Generativa'
];

const softSkills = [
  'Proatividade', 'Trabalho em equipe', 'Resiliência', 'Planejamento', 'Comunicação', 'Adaptabilidade'
];
</script>

<style scoped>
.about-page {
  background: linear-gradient(135deg, #1e1e2f, #121212);
  padding: 40px 0;
}

.about-card {
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 28px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.text-gradient {
  background: linear-gradient(90deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 22px;
}

.skills-grid {
  gap: 10px;
}

.skill-text {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  width: 120%;
  text-transform: uppercase;
  transition: background 0.3s ease, transform 0.2s ease;
}

.skill-text:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.icon-link {
  color: #ffffff;
  font-size: 26px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-link:hover {
  color: #cccccc;
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .about-card {
    padding: 20px;
  }

  .skill-text {
    font-size: 14px;
    padding: 8px 12px;
  }

  .contact-icons {
    gap: 12px;
  }
}
</style>
