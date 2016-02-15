var colorutil = require('./colorutil.js') //requires the objects from colorutil.js

var r = process.argv[2] //argv is declared in the file that is being run by node
var g = process.argv[3]
var b = process.argv[4]

console.log(colorutil.luminosity(r, g, b))//logs the result of the function