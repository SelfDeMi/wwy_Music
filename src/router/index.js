import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'/home',
            // component: () => import('../components/Home'),
        },
        {
            path: '/home',
            component: () => import('../components/Home'),
            meta: {
                isShowTop: true,
                keepAlive:true
            },
            children: [
                {
                    path:'/home/',
                    redirect:'/home/init'
                },
                {
                    path:"/home/init",
                    component:()=>import('../view/init'),
                    meta: {
                        isShowTop: true,
                        keepAlive:true
                    },
            
                },
                {
                    path: '/home/musiclist',
                    component: () => import('../view/MusicList'),
                    meta: {
                        isShowTop: true,
                        keepAlive:true
                    },
                }
            ]
        },
        {
            path: '/login',
            component: () => import('../view/Login'),
            meta: {
                isShowTop: false,
                keepAlive:true
            },
        },
    ],
    //返回的这个y=0，代表的滚动条在最上方
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 };
    },
})
// router.beforeEach((to, from, next) => {
//     if (!to.name == 'login') {
//         next('/login')
//     } else {
//         next()
//     }
// })
export default router