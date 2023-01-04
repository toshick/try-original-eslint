const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = 'eslint-rules/rules';

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint', 'rulesdir'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'rulesdir/not-pass': 'error',
    'rulesdir/no-camaleao': 'error',
    'rulesdir/uppercase-func': 'error',
  },
};
