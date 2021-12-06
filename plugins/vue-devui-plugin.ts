import { defineNuxtPlugin } from "#app";
import Button from "vue-devui/button";
import "vue-devui/button/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
});
