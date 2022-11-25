<script setup>
  import { onMounted } from 'vue'  
  import { useStoreNotes } from '@/stores/storeNotes'
  import Sidebar from '@/components/Sidebar.vue';
  
  const storeNotes = useStoreNotes()

  onMounted(() => {
    storeNotes.getLocalNotes()
  })
</script>

<template> 
  <div class="flex flex-col md:flex-row">
    <Sidebar />
    <RouterView />
  </div> 
</template>