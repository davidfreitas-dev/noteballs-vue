<template>
  <div class="container">
    <template v-for="note in storeNotes.notes">
      <NoteSheet :note="note" />
    </template>
  </div>
  
  <ConfirmModal />
</template>

<script setup>
  import NoteSheet from '@/components/layout/NoteSheet.vue'
  import ConfirmModal from '@/components/layout/ConfirmModal.vue'  
  
  import { useStoreNotes } from '@/stores/storeNotes';

  const storeNotes = useStoreNotes()
</script>

<style scoped>
  .container {
    @apply flex items-center flex-wrap
  }
</style>