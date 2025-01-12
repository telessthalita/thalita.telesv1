<template>
  <footer class="footer">
    <div class="social-links">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        :title="item.title"
        class="social-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i :class="item.icon"></i>
      </a>
    </div>

    <div class="copyright">
      Developed by <strong>Thalita Teles</strong> and <strong>Friday</strong>, its Artificial Intelligence.
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  margin-top: rem;
  background-color: #000000; 
  color: #ffffff; 
  font-size: 12px;
  text-align: center;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
