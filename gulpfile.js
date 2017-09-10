var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {  
    gulp.src('assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({includePaths: ['assets/scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
	port: 2000,  
    browserSync.init(["css/*.css", "js/*.js", "index.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("assets/scss/**/*.scss", ['sass']);
});
