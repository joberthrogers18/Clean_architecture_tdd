/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

module.exports = {
  extends: "standard-with-typescript",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/camelcase": "off",
  },
};
