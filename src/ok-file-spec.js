'use strict'

/* eslint-env mocha */
const okFile = require('.')
const la = require('lazy-ass')
const is = require('check-more-types')
const sinon = require('sinon')
const path = require('path')
const glob = require('glob')

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

  describe('wild card', () => {
    it('works with single file', () => {
      la(okFile('*.json'))
    })

    it('works with several files', () => {
      la(okFile('src/*.js'))
    })

    it('fails for non-existent card', () => {
      la(!okFile('*.foo'))
    })

    it('removes single quotes', () => {
      la(okFile("'src/*.js'"))
    })

    context('windows', () => {
      const sandbox = sinon.createSandbox()
      const sep = path.sep

      beforeEach(() => {
        sandbox
          .stub(glob, 'sync')
          .withArgs('src\\*.js')
          .returns(['src/index.js'])
        // like on Windows
        path.sep = '\\'
      })

      afterEach(() => {
        sandbox.restore()
        path.sep = sep
      })

      it('flips forward slashes in pattern', () => {
        const ok = okFile('src/*.js')
        la(glob.sync.calledOnce, 'was called')
        la(ok, 'found source files')
      })
    })
  })
})
