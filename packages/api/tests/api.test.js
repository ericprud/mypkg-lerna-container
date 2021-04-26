const Mypkg = require('../api.js')
const test = require('tape')

test('api test', t => {
  t.equal(Mypkg.One, 1)
  t.equal(Mypkg.Two, 3)
  t.end()
})
