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
    <section class="sidebar flex justify-between items-center md:justify-center md:items-start w-full md:w-32 md:h-screen shadow-lg">
      <h1 class="text-2xl font-medium mx-5 md:hidden">
        Notas
      </h1>
      
      <span
        @click="handleAddNote"
        class="flex justify-center items-center w-11 h-11 rounded-full bg-zinc-900 text-white text-xl cursor-pointer mx-5 my-3 md:mt-14"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </span>
    </section>

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
  </div>   
  
  <Dialog
    @onModal="deleteNote"
    ref="modal"
  />
</template>