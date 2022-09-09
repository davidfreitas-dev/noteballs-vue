<template>
  <div class="container">
    <template v-for="note in storeNotes.notes">
      <NoteSheet :note="note" @selectNote="handleSelectNote" />
    </template>
  </div>
  
  <ConfirmModal ref="modal" @deleteNote="handleSelectNote" />
</template>

<script setup>
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes' 
  import NoteSheet from '@/components/NoteSheet.vue'
  import ConfirmModal from '@/components/ConfirmModal.vue'

  const storeNotes = useStoreNotes()

  const showModal = ref(false)
  const modal = ref(null)

  const handleSelectNote = () => {
    console.log(modal.value);
  }

</script>

<style scoped>
  .container {
    @apply flex items-center flex-wrap
  }
</style>