<template>
  <el-container class="layout-container-demo" style="height: 800px">
    <el-aside width="200px" height="1000px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>个人中心</template>
            <el-menu-item-group>
              <router-link to="#" style="text-decoration: none"
                ><el-menu-item index="1-1">视频</el-menu-item></router-link
              >
              <router-link to="#" style="text-decoration: none"
                ><el-menu-item index="1-2">关注</el-menu-item></router-link
              >
              <router-link to="#" style="text-decoration: none"
                ><el-menu-item index="1-3">直播</el-menu-item></router-link
              >
              <router-link to="#" style="text-decoration: none"
                ><el-menu-item index="1-4">私人</el-menu-item></router-link
              >
            </el-menu-item-group>

            <el-menu-item-group title="我的音乐">
              <el-menu-item index="1-5">本地下载</el-menu-item>
              <el-menu-item index="1-6">最近下载</el-menu-item>
              <el-menu-item index="1-7">我的云盘</el-menu-item>
              <el-menu-item index="1-8">我的收藏</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2" @click.once="changRouter">
            <template #title >我创建的歌单</template>
            <el-menu-item :index="`2-${index}`"  v-for="(item, index) in songSheetList" :key="index"  @click="getlist(item.id)" >
                <el-icon v-if="index!=0"><expand /></el-icon>{{ item.name }}
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>我收藏的歌单</template>
            <el-menu-item index="3-1">睡眠</el-menu-item>
            <el-menu-item index="3-2">学习</el-menu-item>
            <el-menu-item index="3-3">运动</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: left; font-size: 14px" v-if="true">
        <div>展示栏</div>
      </el-header>

      <el-main>
        <router-view v-if="isshow"></router-view>
        <MusicList ref="son" :key="index" v-show="!isshow"></MusicList>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MusicList from "@/view/MusicList/index.vue";
import Init from "@/view/init";
import { reqMusicList } from "@/api";
import { ref, reactive, mounted, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "home",
  components: {
    MusicList,
    Init,
  },
  setup(props, context) {
    // let listIdofset = ref(null)
    let isshow = ref(true)
    let index = ref(null)
    let store = useStore();
    let router = useRouter();
    let songSheetList = store.state.home.userPlayList;
    let allMusicList = [];
    let son = ref(null);
    //初始化歌单
    let id = store.getters["home/getuserPlayList"][1].id;

    //初始化获取第一个歌单
    reqMusicList(id).then(
      (data) => {
        store.commit("musiclist/initChangeList", data.data.songs);
      },
      (err) => {
        console.log("初始化歌单失败");
      }
    );
    //字符串切割
    songSheetList.forEach((i) => {
      if (i.name.length > 5) {
        i.name = i.name.slice(0, 5) + "...";
      }
    });
    //成功请求全部歌单
    store.dispatch("home/goreqPlayList", localStorage.getItem("userId")).then(
      (value) => {
        //  console.log("成功请求全部歌单");
      },
      (err) => {
        console.log("失败");
      }
    );

   //根据ID获取音乐列表
    async function getlist(listId) {
      son.value.getAllMusic(listId);
      index.value  = index.value + 2;
    }
    //展开歌单进行路由跳转
    let changRouter = ()=>{
      // son.value.getAllMusic();
      // index.value  = index.value + 1
      isshow.value = !isshow.value
      if (isshow.value == false) {
        router.push('/home/musiclist')
      }else
      {
        router.push('/home/init')
      }
      
    }

    return {
      allMusicList,
      getlist,
      store,
      songSheetList,
      son,
      index,
      changRouter,isshow
    };
  },
};
</script>



<style scoped>
#musicName {
  width: 80px;
}
.layout-container-demo .el-header {
  height: 150px;
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  background-color: white;
}
.layout-container-demo .el-aside {
  height: 800px;
  background-color: #333333;
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
  /* background-color: #333333; */
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
  /* background-color: #333333; */
}
</style>