import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'

/* import the vue3Debounce core */
import { vue3Debounce } from 'vue-debounce'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faPlus)

import './assets/css/index.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .directive('debounce', vue3Debounce({ lock: true }))
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
