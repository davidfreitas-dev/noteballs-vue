<template>
  <NavBar />
  
  <div class="container">
    <RouterView />    
  </div>
</template>

<script setup>
  import NavBar from '@/components/layout/NavBar.vue'
</script>

<style scoped>
  .container {
    @apply w-full md:w-11/12 mx-auto px-3 py-5
  }
</style>