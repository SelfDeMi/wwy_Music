<template>
  <div>
    <Top v-if="route.meta.isShowTop"></Top>
      <router-view></router-view>
    <Bottom v-if="route.meta.isShowTop"></Bottom>
  </div>
</template>

<script>
import Home from "./components/Home/index.vue";
import Bottom from "./components/Bottom/index.vue";
import Top from "./components/Top/index.vue";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router"; 
import { removeToken } from "@/token/token.js"; 
export default {
  name: "App",
  components: {
    Bottom,
    Home,
    Top,
  },
  setup() {
    const route = reactive(useRoute());
    const view = ref(route.meta.keepAlive)
    return {
      route,view
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
