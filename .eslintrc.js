module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    quotes: ['error', 'single'],
    'indent': ['error', 2],
    semi: ['error', 'always'],
  }
};
