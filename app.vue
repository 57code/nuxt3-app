<template>
  <div>
    <h3>hello, nuxt3!</h3>
    <d-button>xxx</d-button>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script lang="ts" setup>
  const { $hello } = useNuxtApp()
  console.log($hello());
  
</script>