'use strict'

/* eslint-env mocha */
const okFile = require('.')
const la = require('lazy-ass')
const is = require('check-more-types')

describe('ok-file', () => {
  it('is a function', () => {
    la(is.fn(okFile))
  })

  it('passes this file', () => {
    la(okFile(__filename))
  })

  it('does not pass non-existent file', () => {
    la(!okFile('does/not/exist'))
  })
})
