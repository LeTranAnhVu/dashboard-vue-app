import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faGrip,
    faAngleLeft,
    faAngleDown,
    faAnglesRight,
    faAnglesLeft,
    faShop,
    faChartSimple,
    faBullhorn,
    faPeopleGroup,
    faPenToSquare,
    faArrowRightToBracket,
    faIdCard,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { faBell, faCalendarDays, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from '@/router.ts'

library.add(
    faGrip,
    faAngleLeft,
    faAngleDown,
    faAnglesRight,
    faAnglesLeft,
    faCalendarDays,
    faShop,
    faChartSimple,
    faBullhorn,
    faPeopleGroup,
    faPenToSquare,
    faArrowRightToBracket,
    faIdCard,
    faMagnifyingGlass,
    faBell,
    faCommentDots,
)

const app = createApp(App)
app.use(router)
app.component('Icon', FontAwesomeIcon)
app.mount('#app')
