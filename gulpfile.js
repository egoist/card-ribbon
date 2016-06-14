'use strict'
const gulp = require('gulp')
const serve = require('gulp-serve')
const postcss = require('gulp-postcss')
const jade = require('gulp-jade')

gulp.task('serve', serve({
  port: 3099,
  hostname: 'localhost',
  root: './demo'
}))

gulp.task('css', () => {
  return gulp.src('./src/css/card-ribbon.css')
    .pipe(postcss([
      require('postcss-cssnext')({
        browsers: ['ie > 9', 'last 2 versions']
      })
    ]))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('demo'))
})

gulp.task('jade', () => {
  return gulp.src('./src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('demo'))
})

gulp.task('watch', () => {
  gulp.watch('./src/css/*.css', ['css'])
  gulp.watch('./src/jade/*.jade', ['jade'])
})

gulp.task('build', ['css', 'jade'])

gulp.task('default', ['build', 'watch', 'serve'])
