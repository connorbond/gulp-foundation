'use strict';

var gulp = require('gulp');
var path = require('path');
var pngcrush = require('imagemin-pngcrush');

var $ = require('gulp-load-plugins')();

/**
 * Compress images needed for the website
 * Usage: gulp optimizeimages
 */
gulp.task('optimizeimages', function () {
  return gulp.src('assets/ui/**/*.*')
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('assets/ui'));
});

/**
 * Frontend optimization tasks
 * Usage: gulp optimize
 */
gulp.task('optimize', ['optimizeimages']);
