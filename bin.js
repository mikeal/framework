var x = require('child_process').spawn(process.argv[0], process.argv.slice(1))
x.stdout.pipe(process.stdout)
x.stderr.pipe(process.stderr)
x.on('exit', function (code) {
  process.exit(code)
})