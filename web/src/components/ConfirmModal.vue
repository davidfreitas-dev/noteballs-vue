<template>
    <div class="container">
        <div class="modal">
            <div class="modal-container">
                <div class="modal-content">
                    <div class="modal-text">
                        <p>
                            Tem certeza que quer excluir esta nota?
                        </p>
                    </div>
                    <div class="modal-actions">
                        <button class="btn-cancel" type="button" @click="$emit('handleDeleteNote', false)">
                            Cancelar
                        </button>
                        <button class="btn-confirm" type="button" @click="$emit('handleDeleteNote', true)">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-overlay"></div>
    </div>
</template>

<style scoped>
.modal {
    @apply overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex
}
.modal-container {
    @apply relative w-5/6 md:w-1/2 my-6 mx-auto max-w-6xl
}
.modal-content {
    @apply border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
}
.modal-text {
    @apply relative p-6 flex-auto
}
.modal-text p {
    @apply my-4 text-slate-500 text-lg leading-relaxed
}
.modal-actions {
    @apply flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b
}
.modal-actions .btn-cancel {
    @apply text-zinc-500 bg-transparent active:bg-zinc-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
}
.modal-actions .btn-confirm {
    @apply text-white bg-red-500 hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
}
.modal-overlay {
    @apply opacity-25 fixed inset-0 z-40 bg-black
}
</style>