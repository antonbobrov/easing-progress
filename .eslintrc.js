/** @type{import("eslint").Linter.Config} */
module.exports = {
  extends: ['@anton.bobrov/eslint-config'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-nested-ternary': 'off',
  },
  ignorePatterns: ['lib/**', 'build/**'],
};
