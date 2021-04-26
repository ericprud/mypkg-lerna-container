const Mypkg = require('@mypkg/api')
module.exports = [Mypkg.One, Mypkg.Two]

if (typeof module !== 'undefined' && !module.parent) {
  console.log(module.exports)
}

