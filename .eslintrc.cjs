module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    'prettier'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}