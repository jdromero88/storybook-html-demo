const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');

// use synchronous rendering for Dart Sass. eg: SASS.sync()
function buildStyles() {
  // return gulp.src('./src/stories/assets/_scss/**/*.scss')
  return gulp.src('./src/stories/**/**/*.scss')
  .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./src/stories/assets/css'));
};

function nanoCss() {
  return gulp.src('./src/stories/assets/css/**/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('./out'));
}

exports.buildStyles = buildStyles;
exports.nanoCss = nanoCss;
exports.watch = function () {
  gulp.watch('./src/stories/assets/_scss/**/*.scss', ['sass']);
};