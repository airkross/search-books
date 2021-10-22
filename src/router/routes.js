const MainPage = () => import('../views/main-page.vue')

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage
    }
]

export default routes