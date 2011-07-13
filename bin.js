require('child_process')
.spawn(process.argv[0],
       process.argv.slice(1),
       { customFds: [ 0, 1, 2 ] })
.on('exit', process.exit)
