<template>
    <div class="note">
        <div class="p-2">
            {{ note.content }}
        </div>
        <div class="footer">
            <p>
                {{ note.dtRegister }}
            </p>
            <span class="actions">
                <button>
                    <font-awesome-icon icon="fa-solid fa-pen" class="text-xs" />
                </button>
                <button>
                    <font-awesome-icon icon="fa-solid fa-trash" class="text-xs" />
                </button>
            </span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['note'])
</script>

<style scoped>
.note {
    @apply bg-amber-200 flex flex-col justify-between rounded-2xl shadow-lg p-3 mx-1 mb-3.5 w-full sm:w-[47%] md:w-[32%] lg:w-[23%] h-[230px]
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