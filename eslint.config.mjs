import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/html-self-closing': 'off',
    'no-shadow': 'off',
    'vue/no-template-shadow': 'off',
  },
})
