<template>
  <NavBar @handleAddNote="handleAddNote" />
  
  <div class="container">
    <RouterView />    
  </div>
</template>

<script setup>
  /* COMPONENTS IMPORTS */
  import NavBar from '@/components/NavBar.vue' 

  /* IMPORTS */
  import { ref, onMounted } from 'vue'  
  import { useStoreNotes } from '@/stores/storeNotes'
  
  const storeNotes = useStoreNotes()
  
  const handleAddNote = () => {
    storeNotes.addNote()
    storeNotes.setLocalNotes()    
  }

  const notes = ref(null)
  
  const getNotes = () => {
    const json = localStorage.getItem('notes')
    const array = JSON.parse(json) || []
    notes.value = Array.isArray(array) ? array : []
  } 

  onMounted(() => {
    getNotes() 
    storeNotes.setNotes(notes)
  })
</script>

<style scoped>
  .container {
    @apply w-full md:w-11/12 mx-auto px-3 py-5
  }
</style>