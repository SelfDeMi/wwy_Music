<template>
  <div>
    <div class="title">请登录self音乐</div>
    <div class="box">
      <!-- <div style="margin: 20px" /> -->
      <el-form
        label-position="right"
        label-width="100px"
        style="max-width: 460px"
      >
        <el-form-item label="账户">
          <el-input v-model="userInfo.phone" placeholder="手机号/邮箱" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" placeholder="至少8位字符" />
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="userInfo.check" placeholder="6位数字" />
          <div>获取验证码</div>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        round
        class="btn"
        @click="goLogin(userInfo.phone, userInfo.password)"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    let store = useStore();
    let router = useRouter();
    let userInfo = reactive({
      phone: "",
      password: "",
      check: "",
    });
    function goLogin(a, b) {
      store.dispatch("login/goLogin", {
        phone: a,
        password: b,
      });
      console.log(store.state.login.loginType);
      //判断登录状态决定是否跳转
      if (store.state.login.loginType) {
        router.push({ path: "home" });
        // router.push('home')
        // // 命名的路由
        // router.push({ name: 'user', params: { userId: '123' }})
        // // 带查询参数，变成 /register?userId=123
        // router.push({ path: 'register', query: { userId: '123' }})
      }
    }
    return {
      userInfo,
      goLogin,
    };
  },
};
</script>
<style scoped>
.title {
  position: relative;
  width: 100%;
  height: 350px;
  line-height: 350px;
  font-size: 45px;
  font-style: oblique;
  text-align: center;
}
html {
  position: relative;
  width: 100%;
  height: 1000px;
}
.box {
  position: relative;
  background-color: #fff;
  width: 460px;
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.btn {
  width: 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>