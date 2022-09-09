<template>
  <NavBar @handleAddNote="handleAddNote" />
  
  <div class="container">
    <RouterView />    
  </div>
</template>

<script setup>
  import NavBar from '@/components/layout/NavBar.vue' 
   
  import { useStoreNotes } from '@/stores/storeNotes'
  
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