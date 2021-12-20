module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
  ],
  parserOptions: {
    ecmaVersion: "es2021",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": 0,
  },
};
