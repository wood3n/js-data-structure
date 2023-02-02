module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'import/extensions': 0, // node esmodule require extension
  },
};
