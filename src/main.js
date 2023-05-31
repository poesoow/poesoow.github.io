import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import router from "./router"
import store from './store'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolderOpen, faCode, faBars, faPalette, faCircleArrowUp, faMessage, faMagnifyingGlass, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolderOpen, faCode, faBars, faPalette, faCircleArrowUp, faMessage, faMagnifyingGlass, faEnvelope, faArrowUpRightFromSquare, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
