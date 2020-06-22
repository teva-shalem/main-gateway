module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'parser': '@typescript-eslint/parser',
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'eslint-config-riot',
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2],
    },
}
