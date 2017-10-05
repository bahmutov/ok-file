'use strict'

const fs = require('fs')

function okFile (filename) {
  if (!fs.existsSync(filename)) {
    console.error('Cannot find file', filename)
    return false
  }
  const s = fs.statSync(filename)
  if (!s.size) {
    console.error('File', filename, 'is empty')
    return false
  }
  return true
}

module.exports = okFile
