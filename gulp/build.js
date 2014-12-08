'use strict';

var gulp = require('gulp');
var path = require('path');

var $ = require('gulp-load-plugins')();

/** BUILD
 ** Runs all the build tasks in this file from one command.
 ** Usage: gulp build
 */
gulp.task('build', ['styles', 'copyimages']);

/** CLEAN
 ** Usage: gulp clean
 */
gulp.task('clean', function () {
  return gulp.src(['assets/dist', 'assets/.sass-cache']).pipe($.rimraf());
});



/**
 * Copy images into /dist
 * Usage: gulp copyimages
 */
gulp.task('copyimages', function () {
  return gulp.src('assets/ui/**/*.{jpg,png,gif}')
    .pipe(gulp.dest('assets/dist/ui'));
});

/**
 * Compile website Sass using compass (uses autoprefixer)
 * Usage: gulp styles
 */
gulp.task('styles', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe($.compass({
      project: path.join(__dirname, '../', 'assets'),
      css: 'dist/css',
      sass: 'scss',
//      require: ['compass-normalize'], // include any ruby gems here, so compass knows to require them
      import_path: ['../bower_components/'], // so the compiler knows to look for scss files within the bower directory as well (relative path to the static directory)
      logging  : true,
      comments : false,
      style: 'expanded', // e.g. nested, expanded, compact, or compressed
      sourcemap: false
    }))
    // catch any compilation errors and output to the console and a popup to stop the process needing to be restarted every time there's an error
    .on('error', errorAlert)
    .pipe($.autoprefixer('last 2 version'))
    // catch any compilation errors and output to the console and a popup to stop the process needing to be restarted every time there's an error
    .on('error', errorAlert)
    .pipe($.bless({
      imports: false
    }))
    .pipe($.size({title: 'app.css'}))
    .pipe(gulp.dest('assets/dist/css'));
});


/**
 * Error Alert
 * Outputs any errors to the console and popup. tasks can continue on error, good for watch tasks.
 */

function errorAlert(error) {
  $.notify.onError({title: "Gulp Error", message: "Check your terminal"})(error);
  console.log('Error:', error);
  this.emit("end");
}
