const { getEslintConfiguration } = require("js-style/src/eslint")

const conf = getEslintConfiguration({ typescript: { rootDir: __dirname } })
module.exports = { ...conf, env: { ...conf.env, browser: true } }
