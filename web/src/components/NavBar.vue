<template>    
    <nav class="navbar">
        <a href="#" class="nav-logo">
            <span>Noteballs</span>
        </a>

        <div class="nav-links">
            <button class="group" @click="handleAddNote">
                <font-awesome-icon icon="fa-solid fa-plus" />

                <span class="btn-text">
                    <span class="pl-2"></span>
                    Novo
                </span>
            </button>
        </div>
    </nav>
</template>

<script setup>
    const emit = defineEmits(['handleAddNote'])

    const handleAddNote = () => {
        emit('handleAddNote')
    }
</script>

<style scoped>
.navbar {
    @apply bg-blue-500 flex flex-wrap justify-between items-center mx-auto px-5 md:px-20 py-3
}
.nav-logo {
    @apply flex items-center
}
.nav-logo span {
    @apply self-center text-xl font-semibold whitespace-nowrap text-white
}
.nav-links {
    @apply w-auto
}
.nav-links button {
    @apply bg-blue-400 rounded-full px-3.5 h-10 text-white flex items-center
}
.btn-text {
    @apply max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear
}
</style>