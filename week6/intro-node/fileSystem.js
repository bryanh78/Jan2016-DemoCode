var fs = require('fs')

// console.log(fs)
var sourceFile = process.argv[2]
var destinationFile = process.argv[3]
// console.log(sourceFile)
var notesText = fs.readFileSync(sourceFile, 'utf-8')
console.log(notesText)

fs.writeFileSync(destinationFile, notesText)
