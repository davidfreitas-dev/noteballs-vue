<script setup>
  import { onMounted, ref } from 'vue';
  import { useStoreNotes } from '@/stores/storeNotes'

  const storeNotes = useStoreNotes()

  const handleAddNote = (color) => {
    storeNotes.addNote(color)
    storeNotes.setLocalNotes()    
  }

  const checkNotes = () => {
    if (!storeNotes.notes.length) return handleAddNote('yellow')
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
    
    <div class="mx-5 my-3 flex md:flex-col items-center group">
      <span class="flex items-center gap-3 mr-3 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear md:hidden">
        <span @click="handleAddNote('yellow')" class="w-5 h-5 rounded-full cursor-pointer bg-yellow"></span>
        <span @click="handleAddNote('orange')" class="w-5 h-5 rounded-full cursor-pointer bg-orange"></span>
        <span @click="handleAddNote('green')" class="w-5 h-5 rounded-full cursor-pointer bg-green"></span>
        <span @click="handleAddNote('blue')" class="w-5 h-5 rounded-full cursor-pointer bg-blue"></span>
        <span @click="handleAddNote('purple')" class="w-5 h-5 rounded-full cursor-pointer bg-purple"></span>
      </span>

      <span class="flex justify-center items-center w-11 h-11 rounded-full bg-zinc-900 text-white text-xl cursor-pointer md:mt-14">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </span>

      <span class="hidden md:flex flex-col items-center gap-5 mt-5 mx-auto w-full max-h-0 overflow-hidden group-hover:max-h-56 transition-all duration-500 ease-linear">
        <span @click="handleAddNote('yellow')" class="w-5 h-5 rounded-full cursor-pointer bg-yellow"></span>
        <span @click="handleAddNote('orange')" class="w-5 h-5 rounded-full cursor-pointer bg-orange"></span>
        <span @click="handleAddNote('green')" class="w-5 h-5 rounded-full cursor-pointer bg-green"></span>
        <span @click="handleAddNote('blue')" class="w-5 h-5 rounded-full cursor-pointer bg-blue"></span>
        <span @click="handleAddNote('purple')" class="w-5 h-5 rounded-full cursor-pointer bg-purple"></span>
      </span>
    </div>
  </section>
</template>