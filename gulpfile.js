var gulp = require('gulp');
var guppy = require('git-guppy')(gulp);
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('scripts/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest(''));
});

gulp.task('pre-commit', function () {
  return guppy.src('pre-commit', ['js']);
});

gulp.task('default', ['js']);
