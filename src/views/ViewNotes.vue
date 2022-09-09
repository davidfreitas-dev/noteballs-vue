<template>
  <div class="container">
    <template v-for="note in storeNotes.notes">
      <NoteSheet :note="note" />
    </template>
  </div>
  
  <ConfirmModal />
</template>

<script setup>
  import { useStoreNotes } from '@/stores/storeNotes';
  import NoteSheet from '@/components/NoteSheet.vue'
  import ConfirmModal from '@/components/ConfirmModal.vue'  
  
  const storeNotes = useStoreNotes()
</script>

<style scoped>
  .container {
    @apply flex items-center flex-wrap
  }
</style>