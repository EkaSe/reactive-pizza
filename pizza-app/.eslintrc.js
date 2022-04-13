module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 1,
    'react/jsx-filename-extension': 1
  },
};