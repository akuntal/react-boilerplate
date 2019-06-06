module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
  },
};
