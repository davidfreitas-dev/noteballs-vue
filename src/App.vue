<template>
  <NavBar @handleAddNote="handleAddNote" />
  
  <div class="container">
    <RouterView />    
  </div>
</template>

<script setup>
  import { useStoreNotes } from '@/stores/storeNotes'
  
  import NavBar from '@/components/NavBar.vue' 
  
  const storeNotes = useStoreNotes()
  
  const handleAddNote = () => {
    storeNotes.addNote()
  }  
</script>

<style scoped>
  .container {
    @apply w-full md:w-11/12 mx-auto px-3 py-5
  }
</style>