var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat');
var ftp = require( 'vinyl-ftp' );


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('serve', ['sass'], function() {

    bs.init({
      server: "./src"
    });

    gulp.watch("src/sass/**/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS 
gulp.task('sass', function() {
 return gulp.src("src/sass/**/*.sass")
   .pipe(sass())
   .pipe(concatCss("style.css"))
   .pipe(gulp.dest("src/css"))
   .pipe(bs.stream());
});

gulp.task('default', ['serve']);
