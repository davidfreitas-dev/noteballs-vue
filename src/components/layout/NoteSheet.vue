<template>
    <div class="note">
        <div class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit distinctio maxime facere sequi ipsa voluptates unde quas inventore!
        </div>
        <div class="footer">
            <p>
                May 15
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

</script>

<style scoped>
.note {
    @apply bg-amber-200 p-3 rounded-2xl shadow-lg mb-3.5 w-full sm:w-[49%] md:w-[32%] lg:w-[24%]
}
.footer {
    @apply flex justify-between items-center mt-5
}
.footer p {
    @apply font-light text-sm px-2
}
.actions button {
    @apply bg-black text-white w-8 h-8 mr-1 rounded-full
}
</style>