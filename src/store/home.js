import {reqPlayList} from '@/api'
import {setToken,getToken} from '../token/token'
const state = {
    //所有歌单列表
    userPlayList:[]

};
//mutions是唯一修改state的地方
const mutations = {
    GOREQPLAYLIST(state,data){
        state.userPlayList = data
    },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
   async goreqPlayList({commit},query){
        let res = await reqPlayList(query)
        if(res.status == 200 ){
            commit('GOREQPLAYLIST',res.data.playlist)
        }else{
            console.log("请求歌单列表失败");
        }
   }
};
//计算属性
const getters = {
    getAvatarImg:state=>state.userPlayList[0].creator.avatarUrl,
    getuserPlayList:state => state.userPlayList
};
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
};
