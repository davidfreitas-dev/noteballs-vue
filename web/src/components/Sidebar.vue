<script setup>
import { onMounted, ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const addNote = (color) => {
  storeNotes.addNote(color);
  storeNotes.setLocalNotes();    
};

const checkNotes = () => {
  if (!storeNotes.notes.length) return addNote('yellow');
};

const viewColors = ref(false);

const handleAddNote = () => {
  viewColors.value = !viewColors.value;
};

onMounted(() => {
  setTimeout(() => {
    checkNotes();
  }, 100);
});
</script>

<template>
  <section class="sidebar flex justify-between items-center md:justify-center md:items-start w-full md:w-32 md:h-screen shadow-lg">
    <h1 class="text-2xl font-medium mx-5 md:hidden">
      Notas
    </h1>
    
    <div
      class="mx-5 my-3 flex md:flex-col items-center group"
      @click="handleAddNote"
    >
      <span
        :class="viewColors ? 'max-w-xs' : 'max-w-0'"
        class="flex items-center gap-3 mr-3 overflow-hidden transition-all duration-500 ease-linear md:hidden"
      >
        <span
          @click="addNote('yellow')"
          class="w-5 h-5 rounded-full cursor-pointer bg-yellow"
        />
        <span
          @click="addNote('orange')"
          class="w-5 h-5 rounded-full cursor-pointer bg-orange"
        />
        <span
          @click="addNote('green')"
          class="w-5 h-5 rounded-full cursor-pointer bg-green"
        />
        <span
          @click="addNote('blue')"
          class="w-5 h-5 rounded-full cursor-pointer bg-blue"
        />
        <span
          @click="addNote('purple')"
          class="w-5 h-5 rounded-full cursor-pointer bg-purple"
        />
      </span>

      <span
        :class="{ 'rotate-45': viewColors }"
        class="flex justify-center items-center w-11 h-11 rounded-full bg-zinc-900 text-white text-xl cursor-pointer transition-all duration-100 ease-linear md:mt-14"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </span>

      <span
        :class="viewColors ? 'max-h-56' : 'max-h-0'"
        class="hidden md:flex flex-col items-center gap-5 mt-5 mx-auto w-full overflow-hidden transition-all duration-500 ease-linear"
      >
        <span
          @click="addNote('yellow')"
          class="w-5 h-5 rounded-full cursor-pointer bg-yellow"
        />
        <span
          @click="addNote('orange')"
          class="w-5 h-5 rounded-full cursor-pointer bg-orange"
        />
        <span
          @click="addNote('green')"
          class="w-5 h-5 rounded-full cursor-pointer bg-green"
        />
        <span
          @click="addNote('blue')"
          class="w-5 h-5 rounded-full cursor-pointer bg-blue"
        />
        <span
          @click="addNote('purple')"
          class="w-5 h-5 rounded-full cursor-pointer bg-purple"
        />
      </span>
    </div>
  </section>
</template>