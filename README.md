## 创建工程

```shell
npx create-react-app [ProjectName] --template typescript
```

## 安装 prettier

```shell
yarn add prettier -D
```

### 根目录增加配置文件 .prettierrc

```
{
 "trailingComma": "es5",
 "tabWidth": 2,
 "semi": false,
 "singleQuote": true
}
```

## 安装 eslint

```shell
yarn add eslint -D

npx eslint --init //初始化Eslint配置文件
```

## This section also starts with installing an npm package called eslint-plugin-prettier, which will help us configure eslint and prettier together. We’ll install it with

```shell
yarn add eslint-plugin-prettier -D
```

```.eslintrc.js
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
  },
}

```

## Also, let’s add two scripts to our package.json file. This will help us to lint files by npm run lint and format our code by npm run pretty 

```package.json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --fix",
    "pretty": "prettier --write ."
  }
```

## .eslintignore
```
node_modules
public
build
```


## .prettierignore
```
# Ignore artifacts:
build
coverage

# Ignore all HTML files:
*.html
```
