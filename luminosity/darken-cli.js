var darkenUtil = require('./colorutil.js')
var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]
console.log(darkenUtil.darken(r, g, b))