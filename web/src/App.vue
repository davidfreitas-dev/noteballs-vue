<template>
  <NavBar @handleAddNote="handleAddNote" />
  
  <div class="w-full">
    <RouterView />    
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'  
  import { useStoreNotes } from '@/stores/storeNotes'
  import NavBar from '@/components/NavBar.vue' 
  
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