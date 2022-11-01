import { createRouter, createWebHashHistory } from "vue-router"
import NotesView from "@/views/NotesView.vue"

const routes = [
    {
        path: '/',
        name: 'notes',
        component: NotesView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router