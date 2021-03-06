module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/strongly-recommended',
      'eslint:recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': 'off',
      'no-async-promise-executor':'off'
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  };