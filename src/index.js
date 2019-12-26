'use strict'

const debug = require('debug')('ok-file')
const fs = require('fs')
const path = require('path')

function isWildcard (s) {
  return s.indexOf('*') !== -1
}

function few (list) {
  return list.length < 3
}

function hasForwardSlashes (s) {
  return s.indexOf('/') !== -1
}

function doesOSExpectBackSlashes () {
  return path.sep === '\\'
}

function hasSingleQuotes (s) {
  return (
    typeof s === 'string' &&
    s.length >= 2 &&
    s[0] === "'" &&
    s[s.length - 1] === "'"
  )
}

function removeSingleQuotes (s) {
  return s.substr(1, s.length - 2)
}

function okWildcard (pattern) {
  const globby = require('globby')
  const pluralize = require('pluralize')

  if (hasForwardSlashes(pattern) && doesOSExpectBackSlashes()) {
    pattern = pattern.replace(/\//g, path.sep)
  }

  if (hasSingleQuotes(pattern)) {
    debug('removing single quotes around pattern "%s"', pattern)
    pattern = removeSingleQuotes(pattern)
    debug('removed single quotes, left with "%s"', pattern)
  }

  const filenames = globby.sync(pattern)
  if (!filenames.length) {
    console.error('Could not find any files matching "%s"', pattern)
    return false
  }
  debug(
    'using pattern "%s" found %s',
    pattern,
    pluralize('file', filenames.length, true)
  )
  if (few(filenames)) {
    debug(filenames)
  }
  return filenames.every(okFile)
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
  debug('file "%s" is ok', filename)
  return true
}

module.exports = okFile
