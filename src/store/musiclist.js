const state = {
    allMusicList:[]
};
//mutions是唯一修改state的地方
const mutations = {
    RESETMUSICLIST(state,data){
        state.allMusicList = data
    },
    initChangeList(state,data){
        state.allMusicList = data
    }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  
};
//计算属性
const getters = {
  getMusicList(state){
      let gettersList =[]
      state.allMusicList.forEach(item => {
          gettersList.push(item)
      });
      gettersList.forEach(i => {
        if (i.name.length>18) {
          i.name = i.name.slice(0,18)+'...'
        }   
        if (i.al.name.length>30) {
          i.al.name = i.al.name.slice(0,28)+'...'
        }   
        if (i.ar[0].name.length>25) {
          i.ar.name = i.ar.name.slice(0,25)+'...'
        }   
      });
      return gettersList
  }
};
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
};
