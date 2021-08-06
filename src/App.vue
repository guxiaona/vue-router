<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <h2>hello world</h2>
    <!-- <router-link to="/home" tag="button" replace active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="button" replace active-class="active"
      >关于</router-link
    > -->

    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- 
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- <router-link v-bind:to="'/user/' + userId" tag="button" replace
      >用户</router-link
    >
    <router-link
      :to="{
        path: '/profile',
        query: { name: 'why', age: 18 },
      }"
      tag="button"
      replace
      >档案</router-link
    > -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  methods: {
    //   homeClick() {
    //     console.log("home");
    //     this.$router.push("/home");
    //     // this.$router.replace("/home");
    //   },
    //   aboutClick() {
    //     console.log("about");
    //     this.$router.push("/about");
    //   },
  // 地址命名
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({ path: "/profile", query: { name: "w", age: 1 } });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red;
}
</style>
