var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var scsslint = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var styleInject = require("gulp-style-inject");
var ignore = require("gulp-ignore");
var del = require('del');
var fileinclude = require('gulp-file-include');

gulp.task('change-css', function() {
  return gulp.src('components/**/*.scss') // Gets all files ending with .scss
    .pipe(ignore.exclude('_*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('processing'))
});

gulp.task('build-css', function() {
  return gulp.src('scss/styles.scss') // Gets all files ending with .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('fileinclude', function() {
  return gulp.src('views/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('inject', ['change-css', 'build-css', 'fileinclude'], function() {
  return gulp.src(['components/**/*.js', 'app/*.js']) // Gets all files ending with .js
    .pipe(styleInject())
    .pipe(gulp.dest('processing'))
});

gulp.task("build-components", ["inject"], function () {
    return gulp.src("processing/**/*.js")
      .pipe(ignore.exclude('app.js'))
      .pipe(concat("components.js"))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest("dist/js"))
});

gulp.task("build-app", ["build-components"], function () {
    return gulp.src("processing/app.js")
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest("dist/js"))
});

gulp.task("move-polyfills", ["build-app"], function () {
    return gulp.src("app/polyfills/*.js")
      .pipe(gulp.dest("dist/js"))
      .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('build', ["move-polyfills"], function () {
  return del([
    'processing'
  ]);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
});

gulp.task('check-css', function() {
  return gulp.src('components/**/*.scss')
    .pipe(scsslint({'config': 'lint.yml'}))
    .pipe(sass().on('error', sass.logError))
});

gulp.task('watch', ['browserSync', 'build'], function (){
    gulp.watch('scss/**/*.scss', ['build']);
    gulp.watch('components/**/*.scss', ['build']);
    gulp.watch('components/**/*.js', ['build']);
});

