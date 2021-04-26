const Cli = require('../cli.js')
const test = require('tape')

test('cli test', t => {
  t.deepEqual(Cli, [1, 3])
  t.end()
})
