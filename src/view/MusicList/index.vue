<template>
  <div >
    <div class="top">
      <div class="toporder" style="fontsize: 19px; lineheight: 40px; width: 3%">
        序号
      </div>
      <div
        class="topoption"
        style="fontsize: 19px; lineheight: 40px; width: 12%"
      >
        操作
      </div>
      <div
        class="toptitle"
        style="fontsize: 19px; lineheight: 40px; width: 22%"
      >
        标题
      </div>
      <div
        class="topsonger"
        style="fontsize: 19px; lineheight: 40px; width: 15%"
      >
        歌手
      </div>
      <div
        class="topAlbum"
        style="fontsize: 19px; lineheight: 40px; width: 20%"
      >
        专辑
      </div>
      <div class="toptime" style="fontsize: 19px; lineheight: 40px; width: 10%">
        时间
      </div>
    </div>
    <div class="list" v-for="(item, index) in arr" :key="index" >
      <div class="order" style="backgroundcolor: rgba(246, 253, 253, 0.951)">
        {{ index+1 }}   
      </div>
      <div class="option">
        <el-icon class="svg"><star /></el-icon>
        <el-icon class="svg"><bottom /></el-icon>
        <el-icon class="svg"><share /></el-icon>
      </div>
      <div class="title" style="backgroundcolor: rgba(246, 253, 253, 0.951)">
        {{ item.name }}
      </div>
      <div class="songer">{{ item.ar[0].name }}</div>
      <div class="Album" style="backgroundcolor: rgba(246, 253, 253, 0.951)">
        {{ item.al.name }}
      </div>
      <div class="time">{{ item.time }}</div>
    </div>
  </div>
</template>

<script setup>
import { reqMusicList } from "@/api";
import { ref, reactive, nextTick,watch, onUpdated  } from "vue";
import { useStore } from "vuex";


    let store = useStore();
    //初始化歌单
    //将更新的arr获取过来
    var arr = store.getters["musiclist/getMusicList"];
    // var arr = reactive(store.getters["musiclist/getMusicList"]);
    //根据listID获取所有歌曲
    async function getAllMusic(listId) {
      await reqMusicList(listId).then(
        (data) => {
          store.commit("musiclist/RESETMUSICLIST", data.data.songs);
           arr = reactive(data.data.songs)
          console.log(`根据ID${listId}获取新歌曲`);
           arr.forEach(i => {
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
        },
        (err) => {
          console.log("获取某歌单所有歌曲失败");
        }
      );
    }
    defineExpose({
      getAllMusic
    } )



</script>

<style>
div {
  padding: 0;
  margin: 0;
  border-radius: 4px;
}
.top {
  border-radius: 3px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  background-color: #9b0909;
  color: white;
}
.list {
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* border-bottom: 1px solid black; */
}
.order {
  margin: 5px;
  width: 3%;
  font-size: 15px;
  line-height: 30px;
}
.option {
  margin: 5px;
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.svg {
  margin-top: 5px;
  line-height: 30px;
  font-size: 18px;
}
.title {
  margin: 5px;
  width: 22%;
  line-height: 30px;
}
.time {
  font-size: 10px;
  margin: 5px;
  width: 10%;
  line-height: 30px;
}
.songer {
  margin: 5px;
  width: 15%;
  line-height: 30px;
}
.Album {
  margin: 5px;
  width: 20%;
  line-height: 30px;
}
</style>