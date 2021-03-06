module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here
  rules: {
    "vue/attributes-order": 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea']
      }
    ],
    'no-console': 'off',
    'arrow-parens': [
      0,
      {
        requireForBlockBody: 'as-needed'
      }
    ],
    'vue/html-self-closing': [
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'any',
        img: 'any'
      }
    ]
  }
}
