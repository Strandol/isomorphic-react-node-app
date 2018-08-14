module.exports = {
  "globals": {
    __CLIENT__: true,
    __SERVER__: true,
    __PRODUCTION__: true,
    __DEV__: true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "strict": 0,
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "multiline-ternary": [
      "error",
      "always-multiline"
    ]
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app"
  ]
}
