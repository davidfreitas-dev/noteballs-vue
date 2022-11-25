<script setup>
  import { onMounted } from 'vue';
  import { useStoreNotes } from '@/stores/storeNotes'

  const storeNotes = useStoreNotes()

  const handleAddNote = () => {
    storeNotes.addNote()
    storeNotes.setLocalNotes()    
  }

  const checkNotes = () => {
    if (!storeNotes.notes.length) return handleAddNote()
  }

  onMounted(() => {
    setTimeout(() => {
      checkNotes()
    }, 100);
  })
</script>

<template>
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
</template>