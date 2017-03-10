require('babel-core/register')({
  'plugins': [
    [
      'transform-es2015-modules-commonjs',
      {
        'allowTopLevelThis': true
      }
    ]
  ],
  'presets': [
    'es2017'
  ]
})

require('./gulpfile.babel.js')
