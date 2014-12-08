'use strict';

var gulp = require('gulp');

/**
 * Watch files for changes
 * Usage: gulp watch
 */
gulp.task('watch', ['styles', 'copyimages'], function () {
  gulp.watch('assets/scss/**/*.scss', ['styles']);
  gulp.watch('assets/ui/**/*.{jpg,png,gif}', ['copyimages']);
});


/**
 * Watch ONLY style files
 * Usage: gulp watch:styles
 */
gulp.task('watch:styles', ['styles'], function () {
  gulp.watch('assets/scss/**/*.scss', ['styles']);
});
