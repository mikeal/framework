import t from 'tap'
import Promise from 'bluebird'
import { spawn } from 'child_process'

const node = process.execPath
const bin = require.resolve('../dist/bin.js')

t.test('run ls', async t => {
  await new Promise(resolve => {
    const child = spawn(node, [bin, 'ls', '-laF'])
    child.on('exit', (code, signal) => {
      t.equal(code, 0)
      t.equal(signal, null)
      resolve()
    })
  })

  t.ok(bin)
})
