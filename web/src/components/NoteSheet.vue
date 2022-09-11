<template>
    <div class="note">
        <div class="p-2">
            <textarea 
                rows="5" 
                ref="textarea" 
                v-if="!note.readMode" 
                v-model="note.content" 
                class="note-content"
            >
            </textarea>
            <p v-if="note.readMode">
                {{ note.content }}
            </p>
        </div>
        <div class="footer">
            <p>
                {{ note.dtRegister }}
            </p>
            <span class="actions">
                <button @click="handleEdit">
                    <font-awesome-icon :icon="btnIconClass" class="text-xs" />
                </button>
                <button @click="handleDeleteNote">
                    <font-awesome-icon icon="fa-solid fa-trash" class="text-xs" />
                </button>
            </span>
        </div>
    </div>
</template>

<script setup>  
    import { ref, computed, onMounted } from 'vue'    
    import { useStoreNotes } from '@/stores/storeNotes' 

    const storeNotes = useStoreNotes()

    const emit = defineEmits(['deleteNote'])

    const props = defineProps(['note'])

    const btnIconClass = computed(() => {
        return props.note.readMode 
            ? 'fa-solid fa-pen' 
            : 'fa-solid fa-check'
    })

    const textarea = ref(null)

    onMounted(() => {
        textarea.value.focus()
    })

    const handleEdit = () => {
        props.note.readMode = !props.note.readMode
    }

    const handleDeleteNote = () => {
        storeNotes.selectNote(props.note.id)
        emit('deleteNote')
    }
</script>

<style scoped>
.note {
    @apply bg-amber-200 flex flex-col justify-between rounded-2xl shadow-lg p-3 mx-1 mb-3.5 w-full sm:w-[47%] md:w-[32%] lg:w-[23%] h-[230px]
}
.note-content {
    @apply bg-amber-200 w-full resize-none focus:outline-none
}
.footer {
    @apply flex justify-between items-center mt-5
}
.footer p {
    @apply font-light text-sm px-2
}
.actions button {
    @apply bg-zinc-800 hover:bg-zinc-900 text-white w-8 h-8 mr-1 rounded-full
}
</style>