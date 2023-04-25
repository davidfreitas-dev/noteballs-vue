<script setup> 
import { useStoreNotes } from '@/stores/storeNotes'; 

const props = defineProps({
  notes: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['deleteNote']);

const storeNotes = useStoreNotes();

const handleSave = () => {
  storeNotes.setLocalNotes();
};

const handleDeleteNote = (noteId) => {
  storeNotes.selectNote(noteId);
  emit('deleteNote');
};
</script>

<template>
  <transition-group
    name="list"
    tag="div"
    class="notes"
  >
    <div
      v-for="note in notes"
      :key="note"
      :class="`bg-${note.color}`"
      class="note"
    >
      <div
        class="note-content"
        :class="`bg-${note.color}`"
      >
        <textarea
          v-model="note.content"
          v-debounce:500ms="handleSave"
          :class="`bg-${note.color}`"
          placeholder="Digite aqui..."
          maxlength="215"
          rows="6"
        />
      </div>

      <div class="footer">
        <span>{{ note.dtRegister }}</span>

        <button @click="handleDeleteNote(note.id)">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  </transition-group>
</template>

<style scoped>
.notes {
  @apply flex items-start flex-wrap
}
.note {
  @apply flex flex-col justify-between rounded-2xl shadow-lg p-3 m-2 w-full sm:w-[47%] md:w-[30%] lg:w-[23%] h-[200px]
}
.note-content {
  @apply text-zinc-800 font-normal p-2
}
.note-content textarea {
  @apply placeholder:text-gray-600 text-sm tracking-tight w-full resize-none focus:outline-none
}
.footer {
  @apply flex justify-between items-center
}
.footer span {
  @apply text-xs font-light px-2 break-words
}
.footer button {
  @apply bg-zinc-800 hover:bg-zinc-900 text-white text-sm rounded-full w-8 h-8 mr-1
}
</style>