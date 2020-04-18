import Vue from 'vue'
import VueRouter from 'vue-router'

const ListArticle = () =>
    import ('../views/ListArticle.vue')
const CreateArticle = () =>
    import ('../views/CreateArticle.vue')
const EditArticle = () =>
    import ('../views/EditArticle.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/articles/index'

    },
    {
        path: '/articles/index',
        component: ListArticle
    },
    {
        path: '/articles/create',
        component: CreateArticle

    },
    {
        path: '/articles/:id/edit',
        component: EditArticle
    }
]

const router = new VueRouter({
    routes
})

export default router