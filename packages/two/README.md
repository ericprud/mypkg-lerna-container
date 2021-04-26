[![Build Status](https://travis-ci.org/ericprud/mypkg-lerna-container.svg?branch=main)](https://travis-ci.org/ericprud/mypkg-lerna-container)

# @mypkg/two
Sample package managed by [lerna](https://www.npmjs.com/package/lerna)

# import directly

``` js
const Two = require('@mypkg/two');
console.assert(Two === 3)
```

# import mypkg API

``` js
const Mypkg = require('@mypgk/api')
console.assert(Mypkg.Two === 3)
```

# see also
- application programming interface: `@mypkg/api`
- command line interface: `@mypkg/cli`
