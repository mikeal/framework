import gulp from 'gulp'
import babel from 'gulp-babel'

gulp.task('default', (...args) => {
  gulp.src('bin.js')
        .pipe(babel({
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
        }))
        .pipe(gulp.dest('dist'))

  gulp.src('test-src/*.js')
      .pipe(babel({
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
      }))
        .pipe(gulp.dest('test'))
})
