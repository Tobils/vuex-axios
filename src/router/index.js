import Home from '@/views/Home.vue'
import Details from '@/views/Details.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/details/:tipe/:id',
        component: Details
    }
]

export default routes