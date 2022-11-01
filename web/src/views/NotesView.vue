<script setup>
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import Dialog from '@/components/Dialog.vue'
  import Note from '@/components/Note.vue'

  const storeNotes = useStoreNotes()

  const modal = ref(null)

  const toggleModal = () => {
    modal.value?.toggleModal()
  } 

  const deleteNote = (response) => {
    toggleModal()
    
    if (response) {
      storeNotes.deleteNote(storeNotes.selectedNoteId)
      storeNotes.setLocalNotes()
    }
  }
</script>

<template>  
  <main class="w-full p-5 md:p-10">
    <div class="header text-5xl font-medium p-5 hidden md:block">
      Notas
    </div>

    <div class="notes flex items-start flex-wrap">
      <template 
        v-if="storeNotes.notes.length" 
        v-for="note in storeNotes.notes"
      >
        <Note
          :note="note"
          @deleteNote="toggleModal"
        />
      </template>
    </div>

    <div
      v-if="!storeNotes.notes.length"
      class="ml-5"
    >
      Clique no botão 
      <span class="m-1 px-1.5 rounded-full text-white bg-zinc-900">+</span>
        para criar uma nova nota
    </div>
  </main>
  
  <Dialog
    @onModal="deleteNote"
    ref="modal"
  />
</template>