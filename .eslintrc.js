const { getEslintConfiguration } = require("js-style/src/eslint")

const conf = getEslintConfiguration()
module.exports = {
  ...conf,
  env: { browser: true, es6: true },
  overrides: [
    {
      files: ["test/**.js", "main", ".eslintrc.js"],
      env: { node: true, es6: true },
    },
  ],
}
