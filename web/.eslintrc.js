module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-multi-spaces': 1,
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'comma-spacing': ['error', { before: false, after: true }]
  }
};