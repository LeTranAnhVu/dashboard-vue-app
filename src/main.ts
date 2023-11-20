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
} from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

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
)

createApp(App).component('Icon', FontAwesomeIcon).mount('#app')
