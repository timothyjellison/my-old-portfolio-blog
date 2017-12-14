var gulp = require('gulp');
var guppy = require('git-guppy')(gulp);
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('pre-commit', guppy.src('pre-commit', function () {
  return gulp.src('scripts/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest(''));
  }
));

gulp.task('default', function() {
  return gulp.src('scripts/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(''));
});
