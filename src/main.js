import { createApp } from 'vue'
import App from './App(작업하다 버림).vue'
import "./index.css"
import router from "./router"
// fontawesome
import  { library } from '@fortawesome/fontawesome-svg-core'
import {faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolderOpen, faCode, faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolderOpen, faCode, faBars)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')