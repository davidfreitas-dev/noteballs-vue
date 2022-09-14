import { createRouter, createWebHashHistory } from "vue-router"
import ViewNotes from "@/views/ViewNotes.vue"

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router