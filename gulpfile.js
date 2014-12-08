'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

// Default task
gulp.task('default', ['clean'], function (foo) {
  gulp.start('build', foo);
});
