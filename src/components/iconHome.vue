<template>
  <div class="portfolio-icon mt-4 mb-4 ml-16">
    <router-link to="/" class="center-text">
    <div class="circle-container">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <p>TT</p>
    </div> 
    </router-link>
  </div>
</template>

<style scoped>
.portfolio-icon {
  position: relative;
  width: 120px;
  height: 120px;
}

.circle-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.circle {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 3px solid #863be9;
  animation: expand 2s infinite ease-in-out;
}

.circle:nth-child(1) {
  animation-delay: 0s;
}

.circle:nth-child(2) {
  animation-delay: 0.4s;
}

.circle:nth-child(3) {
  animation-delay: 0.8s;
}

.center-text {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-decoration: none; 
}


@keyframes expand {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
