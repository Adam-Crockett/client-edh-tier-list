module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 'react/function-component-definition': 0,
    // 'react/boolean-prop-naming': 0,
    // 'react/prop-types': 0,
    // 'react-hooks/exhaustive-deps': 1,
    // 'react/react-in-jsx-scope': 0,
    // 'no-unused-vars': 1,
    // 'react/display-name': [0]
    'no-console': 1, // Means warning
    'prettier/prettier': 2 // Means error
  }
};
