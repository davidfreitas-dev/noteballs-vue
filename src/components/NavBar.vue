<template>    
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">
                <span>
                    Noteballs
                </span>
            </a>

            <div class="nav-links">
                <button @click="$emit('handleAddNote')">
                    <font-awesome-icon icon="fa-solid fa-plus" class="text-xl" />
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    @apply p-3 bg-blue-500
}
.container {
    @apply flex flex-wrap justify-between items-center mx-auto
}
.logo {
    @apply flex items-center
}
.logo span {
    @apply self-center text-xl font-semibold whitespace-nowrap text-white
}
.nav-links {
    @apply w-auto
}
.nav-links button {
    @apply w-10 h-10 rounded-full text-white bg-blue-400
}
</style>