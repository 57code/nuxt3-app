<template>
  <div>
    <h1>Index Page</h1>
    <!-- 组件自动导入 -->
    <BaseFooButton></BaseFooButton>
    <!-- 组件懒加载 -->
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">显示列表</button>

    <NuxtLink to="/detail">Detail</NuxtLink> |
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink> |
    <NuxtLink to="/parent">/parent/child</NuxtLink> |
    <NuxtLink to="/helloworld">/helloworld</NuxtLink> |
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
