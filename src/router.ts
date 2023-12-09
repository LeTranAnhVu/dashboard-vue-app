// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import Home from '@/views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/views/About.vue'
import PricingTable from '@/views/PricingTable.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/pricing', component: PricingTable },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
