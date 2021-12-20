<template>
  <div>
    <h3>hello, nuxt3!</h3>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script lang="ts" setup>
const { $hello } = useNuxtApp()
console.log($hello())
</script>
