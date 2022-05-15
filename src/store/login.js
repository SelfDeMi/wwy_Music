import {reqLogin} from '../api/index.js'
import {setToken} from '../token/token'
const state = {

};
//mutions是唯一修改state的地方
const mutations = {
    UPDATELOGIN(state,data){
        setToken('Token',data.token)
        setToken('nickname',data.profile.nickname)
        setToken('loginType',1)
        setToken('cookie',data.cookie)
        setToken('userId',data.profile.userId)

    }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
    //登录请求
    async goLogin({commit},params){
       let res = await reqLogin(params)
       if (res.status == 200 ) {
           console.log(res.data);
          commit('UPDATELOGIN',res.data)
       }else{
           console.log("request请求失败了");
       }
    }
};
//计算属性
const getters = {

};
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
};
