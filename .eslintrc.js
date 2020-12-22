module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:vue/vue3-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": 'babel-eslint',
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};