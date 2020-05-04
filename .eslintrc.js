module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha" : true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        
        "ecmaVersion": 2018
    },
   
    "rules": {
        "prefer-arrow-callback": "warn",
        "no-var": "warn",
    }
};