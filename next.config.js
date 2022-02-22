const removeImports = require('next-remove-imports')()

module.exports = removeImports({
  assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : "",
})
