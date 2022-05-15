<template>
  <div class="box">
    <div class="iconm">
      <el-icon><headset /></el-icon>
      self音乐
    </div>

    <div class="input">
      <input type="text" placeholder="音乐/视频/用户/电台" />
      <div class="search">
        <el-icon><search /></el-icon>
      </div>
    </div>

    <div class="myInfo">
      <div>
        <el-avatar
          :src="avatarImg"
          class="img"
        />
      </div>

      <div class="name">
        <span>{{ nickname }}</span>
        <el-icon><arrow-down-bold /></el-icon>
      </div>

      <div class="icon">
        <el-icon><setting /></el-icon>
      </div>

      <div class="icon">
        <el-icon><download /></el-icon>
      </div>

      <div class="icon">
        <el-icon><minus /></el-icon>
      </div>

      <div class="icon">
        <el-icon><close-bold /></el-icon>
      </div>
    </div>
  </div>
</template>


<script>
import { useStore,mapGetters } from "vuex";
import { getToken } from "@/token/token.js";
import { ref, reactive } from "vue";
export default {
  name: "Top",
  setup() {
    let nickname = ref(getToken("nickname"));
    let store = useStore();
    // let avatarImg = store.state.home.userPlayList[0].creator.avatarUrl
    let avatarImg = 'http://p1.music.126.net/fip88hJNgn1C-2D428dbZw==/109951167393690730.jpg'
    // const fun = () => {
    //   console.log(store.state.home.userPlayList);
    // };
    // fun();
    return {
      nickname,avatarImg
    };
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  width: 100%;
  height: 70px;
  background-color: #9b0909;
}
.iconm {
  padding-left: 20px;
  line-height: 70px;
  font-size: 40px;
  font-style: oblique;
}
.input {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  width: 400px;
}
input {
  border-radius: 20px;
  height: 35px;
  width: 400px;
  margin-top: 12px;
}
.myInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70px;
  width: 400px;
  /* background-color: black; */
}
.img {
  margin-top: 15px;
}
.name {
  color: white;
  line-height: 70px;
  font-size: 18px;
}
.icon {
  font-size: 18px;
  line-height: 70px;
}
.search {
  line-height: 70px;
  font-size: 26px;
  color: white;
}
</style>