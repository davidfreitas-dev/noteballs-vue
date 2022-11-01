<script setup>
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import Dialog from '@/components/Dialog.vue'
  import Note from '@/components/Note.vue'

  const storeNotes = useStoreNotes()

  const handleAddNote = () => {
    storeNotes.addNote()
    storeNotes.setLocalNotes()    
  }

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
  <div class="flex flex-col md:flex-row">
    <section class="sidebar flex justify-end md:justify-center w-full md:w-32 md:h-screen shadow-lg">
      <span
        @click="handleAddNote"
        class="flex justify-center items-center w-11 h-11 rounded-full bg-zinc-900 text-white text-xl cursor-pointer mx-5 my-3"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </span>
    </section>

    <main class="flex items-start flex-wrap w-full p-5 md:p-10">
      <template 
        v-if="storeNotes.notes.length" 
        v-for="note in storeNotes.notes"
      >
        <Note
          :note="note"
          @deleteNote="toggleModal"
        />
      </template>

      <span
        v-if="!storeNotes.notes.length"
        class="no-notes"
      >
        Você ainda não adicionou nenhuma nota
      </span>
    </main>
  </div>   
  
  <Dialog
    @onModal="deleteNote"
    ref="modal"
  />
</template>