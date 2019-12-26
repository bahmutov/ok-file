# ok-file

> CLI checks if given file exists and is not empty

[![NPM][npm-icon] ][npm-url]

[![renovate-app badge][renovate-badge]][renovate-app]
[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]
![Windows CI](https://github.com/bahmutov/ok-file/workflows/test/badge.svg?branch=master)

Useful to confirm that tools that generate files were successful.

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save-dev ok-file
```

## Use

Check if given file `foo.txt` exists and is not empty

```
$(npm bin)/ok-file foo.txt
```

You can pass several files, each will be checked

```
$(npm bin)/ok-file foo.txt bar.js
```

You can even pass a wild card string to find files

```
$(npm bin)/ok-file 'videos/*.mp4'
```

You can combine filenames with wild cards

```
$(npm bin)/ok-file package.json 'src/*.js'
```

### API

You can check a single filename or wild card using the API

```js
const okFile = require('ok-file')
okFile('file/name') // or okFile('src/*.js')
// returns true or false
```

## Windows

To keep this tool cross platform, if a wildcard pattern has forward slashes, and the
platform path separator `require('path').sep` is a backwards slash `\\` then the
pattern's slashes a flipped before globbing. Thus even on Windows you can use

    $(npm bin)/ok-file package.json 'src/*.js'

## Single quotes

If you pass the wild card pattern with single quotes, they will be automatically removed.

## Debugging

Run program with `DEBUG=ok-file ...` environment variable

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/ok-file/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/ok-file.svg?downloads=true
[npm-url]: https://npmjs.org/package/ok-file
[ci-image]: https://travis-ci.org/bahmutov/ok-file.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/ok-file
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
