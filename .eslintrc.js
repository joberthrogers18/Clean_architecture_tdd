/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true
  },
  rules: {},
};
