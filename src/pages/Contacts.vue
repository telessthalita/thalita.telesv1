<template>
  <div class="contacts-page page px-8 py-16 ">
    <h1 class="text-4xl font-bold text-gradient uppercase mb-8 text-center">
      Contacts
    </h1>

    <div class="flex justify-center ">
      <v-card class="contact-card p-8 w-full sm:w-1/2 md:w-1/3 text-center">
        <v-card-text class="space-y-4">
          <div class="text-xl font-semibold">PHONE</div>
          <div class="text-lg text-pink-400">(79) 999058123</div>
        </v-card-text>
        <v-card-text class="space-y-4">
          <div class="text-xl font-semibold">EMAIL</div>
          <div class="text-lg text-pink-400">telessthalita@outlook.com</div>
        </v-card-text>
        <v-card-text class="space-y-4">
          <div class="text-xl font-semibold">SOCIAL</div>
          <div class="text-lg text-pink-400">
            <a href="https://github.com/telessthalita" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.contacts-page {
  background: linear-gradient(to right, #131313, #1d1d3b);

  min-height: 70vh; 
  background-size: 150% 150%; 
  background-position: center center; 
}

.text-gradient {
  background: linear-gradient(to right, #863be9, #4e398a);
  -webkit-text-fill-color: white;
}

.contact-card {
  background-color: #1e1e2f;
  border-radius: 16px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
}

a {
  color: #4e398a;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #863be9;
}
</style>
