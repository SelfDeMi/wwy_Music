import { createStore } from 'vuex';
import login from './login'
import home from './home'
import musiclist from './musiclist'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
    namespaced:true,
    modules: {
        login,home,musiclist
    },
    plugins:[
        //本地存储vuex  vuex持久化
        createPersistedState({
            
            //localStorage.getItem  的key
            key:'',
            //需要做持久化的仓库
            paths:[
                'login','home'
            ]
        })
    ]
})
export default store