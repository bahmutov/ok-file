#!/usr/bin/env node

const okFile = require('..')
const filenames = process.argv.slice(2)

if (!filenames.length) {
  console.error('usage: ok-file <filename1> <filename2>')
  console.error("or:    ok-file '<wild card>'")
  console.error('checks if each file exists and is not empty')
  process.exit(1)
}

if (!filenames.every(okFile)) {
  process.exit(1)
}
