<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "ProFile",
};
</script>

<style>
</style>