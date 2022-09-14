<template>
  <div class="container">
    <template 
      v-if="storeNotes.notes.length" 
      v-for="note in storeNotes.notes"
    >
      <NoteSheet :note="note" @deleteNote="toggleModal" />
    </template>

    <span v-if="!storeNotes.notes.length" class="no-notes">
      Você ainda não adicionou nenhuma nota
    </span>
  </div>
  
  <DeleteModal v-if="showModal" @handleDeleteNote="deleteNote" />
</template>

<script setup>
  /* COMPONENTS IMPORTS */
  import NoteSheet from '@/components/NoteSheet.vue'
  import DeleteModal from '@/components/DeleteModal.vue'

  /* IMPORTS */
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes' 

  const storeNotes = useStoreNotes()  

  const showModal = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const deleteNote = (response) => {
    toggleModal()
    
    if (response) {
      storeNotes.deleteNote(storeNotes.selectedNoteId)
      storeNotes.setLocalNotes()
    }
  }
</script>

<style scoped>
  .container {
    @apply flex items-center flex-wrap
  }
  .no-notes {
    @apply p-10 mx-auto text-center
  }
</style>