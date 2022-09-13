<template>
    <div class="note">
        <div class="note-content">
            <textarea
                v-model="note.content"
                v-debounce:500ms="handleSave"
                placeholder="Digite aqui..."
                maxlength="180"
                rows="6"
            >
            </textarea>
        </div>

        <div class="footer">
            <span>{{ note.dtRegister }}</span>

            <button @click="handleDeleteNote">
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
        </div>
    </div>
</template>

<script setup> 
    import { useStoreNotes } from '@/stores/storeNotes' 

    const storeNotes = useStoreNotes()

    const emit = defineEmits(['deleteNote'])

    const props = defineProps(['note'])

    const handleSave = () => {
        storeNotes.setLocalNotes()
    }

    const handleDeleteNote = () => {
        storeNotes.selectNote(props.note.id)
        emit('deleteNote')
    }
</script>

<style scoped>
.note {
    @apply bg-amber-200 flex flex-col justify-between rounded-2xl shadow-lg p-3 mx-1 mb-3.5 w-full sm:w-[48%] md:w-[32%] lg:w-[24%] h-[230px]
}
.note-content {
    @apply text-zinc-800 font-semibold p-2
}
.note-content textarea {
    @apply bg-amber-200 placeholder:text-amber-500 w-full resize-none focus:outline-none
}
.footer {
    @apply flex justify-between items-center
}
.footer span {
    @apply text-sm px-2 break-words
}
.footer button {
    @apply bg-zinc-800 hover:bg-zinc-900 text-white text-sm rounded-full w-8 h-8 mr-1
}
</style>