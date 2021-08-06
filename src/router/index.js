import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

const Home = () =>
    import ('../components/Home')
const HomeNews = () =>
    import ('../components/HomeNews')
const HomeMessage = () =>
    import ('../components/HomeMessage')

const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')
const ProFile = () =>
    import ('../components/ProFile')


Vue.use(VueRouter)

const originPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originPush.call(this, location).catch(err => err)
}

const routes = [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: { title: '首页' },
            children: [
                // {
                //     path: '',
                //     redirect: 'news'
                // },
                {
                    path: 'news',
                    component: HomeNews
                },
                {
                    path: 'message',
                    component: HomeMessage
                },
            ]
        }, {
            path: '/about',
            component: About,
            meta: { title: '关于' },
            // 路由独享守卫
            beforeEnter: (to, from, next) => {
                // console.log('about beforeEnter');
                next()
            }
        },
        {
            path: '/user/:userId',
            component: User,
            meta: { title: '用户' },
        }, {
            path: '/profile',
            component: ProFile,
            meta: { title: '档案' },
        },
    ]
    // 配置路由和组件的引用关系
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 将router对象传入Vue实例
export default router

// 全局守卫
// 前置导航守卫（guard） 前置钩子hook(回调) 跳转之前调用
router.beforeEach((to, from, next) => {
    // 从from跳转到to
    document.title = to.matched[0].meta.title
        // console.log(to);
        // console.log('++++++++++');
    next()
})

// 后置钩子 跳转之后调用
router.afterEach((to, from) => {
    // console.log('------------');
})