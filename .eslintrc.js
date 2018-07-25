module.exports = {
  "parser": "babel-eslint",
  //https://github.com/babel/babel-eslint/issues/312#issuecomment-317688758
  "extends": "airbnb",
  "env": {
    "node": true,
    "jest": true,
    "es6": true,
    "browser": true,
    // https://stackoverflow.com/questions/46841788/document-is-not-defined-javascript-error/46841893#46841893
  },
  "rules": {
    "arrow-parens": 0,
    "arrow-body-style": [
      2,
      "as-needed",
    ],
    "class-methods-use-this": 0,
    "comma-dangle": [
      2,
      "always-multiline",
    ],
    "no-console": 1,
    "prefer-template": 2,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "import/first": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "react/jsx-filename-extension": 0,
    "react/require-extension": 0,
    "react/require-default-props": 0,
    "react/prefer-stateless-function": [
      0, {
        "ignorePureComponents": true
      }
    ],
    "semi": 0,
    "array-callback-return": 0,
    "no-underscore-dangle": [
      "error", { 
        "allow": [
          "__REDUX_DEVTOOLS_EXTENSION__"
        ] 
      }
    ]
    // https://github.com/zalmoxisus/redux-devtools-extension/issues/338#issuecomment-355795902
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
  // https://stackoverflow.com/a/42498220
};
