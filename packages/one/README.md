[![Build Status](https://travis-ci.org/ericprud/mypkg-lerna-container.svg?branch=main)](https://travis-ci.org/ericprud/mypkg-lerna-container)

# @mypkg/one
Sample package managed by [lerna](https://www.npmjs.com/package/lerna)

# import directly

``` js
const One = require('@mypkg/one');
console.assert(One === 1)
```

# import mypkg API

``` js
const Mypkg = require('@mypgk/api')
console.assert(Mypkg.One === 1)
```

# see also
- application programming interface: `@mypkg/api`
- command line interface: `@mypkg/cli`
