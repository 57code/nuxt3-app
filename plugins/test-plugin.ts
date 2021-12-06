import { defineNuxtPlugin } from '#app'
// 唯一的参数是nuxt实例
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  // console.log(nuxtApp);
  return {
    provide: {
      hello: () => 'world'
    }
  }
})