'use strict'

/* eslint-env mocha */
const okFile = require('.')

describe('ok-file', () => {
  it('write this test', () => {
    console.assert(okFile, 'should export something')
  })
})
