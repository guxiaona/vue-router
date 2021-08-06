<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "你好",
      path: "/home/news",
    };
  },
  // 创建组件的时候回调
  created() {
    console.log("home create");
    this.$router.push("/home/news");
  },
  destroyed() {
    console.log("home destroyed");
  },

  // 这两个函数，只有该组件保持了状态使用了keep-alive时，才是有效的
  activated() {
    console.log("activated");
    // this.$router.push(this.path);
  },
  deactivated() {
    console.log("deactivated");
    // this.path = this.$router.path;
  },
  // beforeRouteLeave(to, from, next) {
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  //   next();
  // },

  // template挂载到DOM上的时候回调
  // mounted() {
  //   console.log("mounted");
  // },
  // // 界面发生刷新的时候回调
  // updated() {
  //   console.log("updated");
  // },
};
</script>

<style>
</style>