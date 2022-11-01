<template>  
  <RouterView />
</template>

<script setup>
  import { ref, onMounted } from 'vue'  
  import { useStoreNotes } from '@/stores/storeNotes'
  
  const storeNotes = useStoreNotes()

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