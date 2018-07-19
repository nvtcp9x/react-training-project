# Installation
  * Required Node.js
  * Latest webpack v4.14.0
  * Install via NPM

# Getting Started

## Basic Setup
  - npm init -> pakage.json
  - npm install webpack & webpack-cli
    *liC stand for command Line Interface*
    *CLI to configure and tnteract with our build.*
  - run webpack-cli init
  - edit webpack.config.js
  - setting up HtmlWebpackPlugin
    *Create Html file and inject bundle js file*
  - install babel to transpiling javascript ES2015+ to ES5
  - create .babelrc

## Setup React
  - install react react-dom babel-preset-react
    *babel-preset-react to compile react code -> js*
  - edit .babelrc for react

## Setup Redux
  - install redux react-redux
  - install webpack dev server
  - add <Provider> and wrap <App/> component in index
  - create component flag with reducer and view files
  - create compine reducer file, and add flag reducer to combine
  - install babel-preset-stage-0 vì không hiểu sao ko chạy được toán tử "..." trong flag reducer
  - edit .babelrc, add "stage-0"
  - create store with combine reducer
  - add redux devtools extension
  - create constant, actions in flag component
  - create flag container and map state, dispatch to props
  - edit webpack resolve https://webpack.js.org/configuration/resolve/#resolve-modules
  
## Setup react router v4
  - install react router v4
  - wrap Route in BrowserRouter
  - create public layout
  - add header to pulic layout
  - create private layout
  - copy fake authen code

## Setup Lint
  - install babel-eslint estlint eslint-config-airbnb eslint-loader eslint-plugin-import
    eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch style-lint stylelint-config-standard
    stylelint-webpack-plugin
  - add script run lint in package.json
  - edit webpack config, add loader ['babel-loader', 'eslint-loader']
    add plugin new StyleLintPlugin()
  - create .eslintrc.js stylelint.config.js

## Authentication
  - Go app, app has a state `logged: false` to management app auth, check token local storage
    - No token -> logged: false
      - Private layout access base on logged state -> no access
      - Go login -> success -> set local storage (token, idUser) -> set logged: true
    - Has token -> logged: true -> fetch userInfo by id and token in local storage
      - response 401 -> unauthorized -> Token expired -> set logged: false
      - response ok -> ok 
