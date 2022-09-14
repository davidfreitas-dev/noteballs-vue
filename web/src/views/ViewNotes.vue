<template>
  <div class="container">
    <template 
      v-if="storeNotes.notes.length" 
      v-for="note in storeNotes.notes">
      <NoteSheet :note="note" @deleteNote="toggleModal" />
    </template>

    <span class="no-notes" v-if="!storeNotes.notes.length">
      Você ainda não adicionou nenhuma nota
    </span>
  </div>
  
  <DeleteModal ref="modal" @handleDeleteNote="deleteNote" />
</template>

<script setup>
  /* COMPONENTS IMPORTS */
  import NoteSheet from '@/components/NoteSheet.vue'
  import DeleteModal from '@/components/DeleteModal.vue'

  /* IMPORTS */
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'

  const modal = ref(null)

  const toggleModal = () => {
    modal.value?.toggleModal()
  } 

  const storeNotes = useStoreNotes()

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