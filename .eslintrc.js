module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', 'jsx'] },
    ],
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/function-component-definition': 0, // 必须是函数声明
    'react/react-in-jsx-scope': 0, // 必须引入React
    'operator-linebreak': 0,
    'react/jsx-curly-brace-presence': 0,
    'arrow-body-style': 0,
  },
}
