<template>
  <v-footer height="40" app>
    <a
      :href="items[0].href"
      :title="items[0].title"
      class="inline-block mx-2 text-gray-600 hover:text-blue-500 transition"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon :icon="items[0].icon" :size="16" />
    </a>
    <div class="d-flex justify-end absolute right-4 bottom-2 text-xs text-gray-500">
      &copy; {{ (new Date()).getFullYear() }} 
      <span class="hidden sm:inline-block">
        Developed by Thalita Teles and Friday, its Artificial Intelligence.
      </span>
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'GitHub',
      icon: 'mdi-github',
      href: 'https://github.com/telessthalita',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: inherit
</style>
