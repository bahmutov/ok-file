#!/usr/bin/env node

const okFile = require('..')
const filename = process.argv[2]

if (!filename) {
  console.error('usage: ok-file <filename>')
  console.error('checks if file exists and is not empty')
  process.exit(1)
}

if (!okFile(filename)) {
  process.exit(1)
}
