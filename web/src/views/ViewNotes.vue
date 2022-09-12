<template>
  <div class="container">
    <template v-if="storeNotes.notes.length" v-for="note in storeNotes.notes">
      <NoteSheet :note="note" @deleteNote="toggleModal" />
    </template>

    <span v-if="!storeNotes.notes.length" class="p-10 mx-auto text-center">
      Você ainda não adicionou nenhuma nota
    </span>
  </div>
  
  <ConfirmModal v-if="showModal" @handleDeleteNote="deleteNote" />
</template>

<script setup>
  import { ref } from 'vue'

  import { useStoreNotes } from '@/stores/storeNotes' 

  import NoteSheet from '@/components/NoteSheet.vue'

  import ConfirmModal from '@/components/ConfirmModal.vue'

  const storeNotes = useStoreNotes()  

  const showModal = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const deleteNote = (confirm) => {
    toggleModal()
    
    if (confirm) {
      storeNotes.deleteNote(storeNotes.selectedNoteId)
      storeNotes.setLocalNotes()
    }
  }
</script>

<style scoped>
  .container {
    @apply flex items-center flex-wrap
  }
</style>