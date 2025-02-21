<template>
  <div class="about-page page px-8 py-16">
    <v-container>
      <v-row justify="center" align="start" class="gap-8">
        <v-col cols="12" sm="6" md="3">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">Level Up in Technology</h2>
                </v-card-text>
              </div>
              <div class="card-back">
                <v-card-text class="text-justify">
                  <p>
                    Technology has always been my refuge—a place where I challenge myself and grow. From games to
                    coding, I developed logic, strategy, and adaptability. Every challenge has shaped me into a
                    problem-solver, always seeking innovative solutions
                  </p>
                </v-card-text>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">My Skills</h2>
                </v-card-text>
              </div>
              <div class="card-back">
                <v-card-text class="text-center">
                  <div class="skills-grid">
                    <div class="skill">JavaScript</div>
                    <div class="skill">Python</div>
                    <div class="skill">SQL</div>
                    <div class="skill">React</div>
                    <div class="skill">AI Fundamentals</div>
                    <div class="skill">Agile Methodologies</div>
                  </div>
                </v-card-text>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">My Purpose</h2>
                </v-card-text>
              </div>
              <div class="card-back">
                <v-card-text class="text-justify">
                  <p>
                    Technology has the power to transform realities.
                    I want to continue creating innovative solutions that drive businesses forward and impact lives.
                    Growing, learning, and building the future—one line of code at a time.
                  </p>
                </v-card-text>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="card contact-card">
            <div class="card-inner">
              <div class="card-front">
                <v-card-text class="text-center">
                  <h2 class="text-lg font-bold text-pink-400">Let's Connect!</h2>
                </v-card-text>
              </div>
              <div class="card-back">
                <v-card-text class="text-justify">
                  <p>
                    If you share this vision and want to exchange ideas, my DM is always open!
                  </p>
                  <div class="contact-info mt-4">
                    <p> +55 (79) 99905-8123</p>
                    <div class="text-lg text-pink-400">
                      <p><a rel="noopener noreferrer" href="mailto:telessthalita@outlook.com">Email</a></p>
                    </div>

                    <div class="text-lg">
                      <a href="https://github.com/telessthalita" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
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
</script>

<style scoped>
.card {
  perspective: 1000px;
  width: 100%;
  height: 380px;
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

.card:hover .card-inner {
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-back {
  background-color: #29293d;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: justify;
}
</style>