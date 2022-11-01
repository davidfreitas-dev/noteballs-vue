<script setup>
  import { ref, onMounted } from 'vue'  
  import { useStoreNotes } from '@/stores/storeNotes'
  import Sidebar from './components/Sidebar.vue';
  
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

<template> 
  <div class="flex flex-col md:flex-row">
    <Sidebar />
    <RouterView />
  </div> 
</template>