/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  plugins: [],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'import/order': 'off',

    // 取消單行100字元限制
    'max-len': 'off',
    // 可以使用 console
    'no-console': 'off',
    // 消除錯誤 '@rushstack/eslint-patch' should be listed in the project's dependencies, not devDependencies.
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    // npm create vite@latest 專案名稱 -- --template vue-ts
    // 產生專案結構所採用的規則
    // 'linebreak-style': 0,
    // 'no-undef': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 0,
      },
    },
  ],
}
