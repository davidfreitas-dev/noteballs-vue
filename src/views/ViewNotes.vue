<template>
  <div class="container">
    <NoteSheet />
    <NoteSheet />
    <NoteSheet />
    <NoteSheet />
  </div>
  
  <ConfirmModal />
</template>

<script setup>
  import NoteSheet from '@/components/layout/NoteSheet.vue'
  import ConfirmModal from '@/components/layout/ConfirmModal.vue'
</script>

<style scoped>
  .container {
    @apply flex justify-between items-center flex-wrap
  }
</style>