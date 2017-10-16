'use strict'

const debug = require('debug')('ok-file')
const fs = require('fs')

function isWildcard (s) {
  return s.indexOf('*') !== -1
}

function okWildcard (pattern) {
  const globby = require('globby')
  const filenames = globby.sync(pattern)
  if (!filenames.length) {
    console.error('Could not find any files matching "%s"', pattern)
    return false
  }
  return true
}

function okFile (filename) {
  if (isWildcard(filename)) {
    debug('checking wild card "%s"', filename)
    return okWildcard(filename)
  }

  debug('checking individual file %s', filename)
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
