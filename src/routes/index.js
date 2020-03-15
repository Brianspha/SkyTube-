import MostPopular from '../components/MostPopular'
import RecentlyAdded from '../components/RecentlyAdded'
import vueRouter from 'vue-router'
import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(vueRouter)

export default new VueRouter({
    routes: [{
            "path": "/",
            redirect: "popular"
        },
        {
            path: "/popular",
            name: "popular",
            component: MostPopular
        },
        {
            path: "/recents",
            name: "recents",
            component: RecentlyAdded
        }
    ]
})