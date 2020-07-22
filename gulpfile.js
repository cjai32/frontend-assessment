const gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
jshint = require('gulp-jshint'),
uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create();


gulp.task('default', function () {
    browserSync.init({
        server: './'
    });
   gulp.watch('theme/styles/sass/**/*.scss', gulp.series('styles'));
   gulp.watch('theme/scripts/**/*.js', gulp.series('scripts'));
   gulp.watch(['index.html','exercise-2.html']).on('change',browserSync.reload);
  
});

gulp.task('styles', function () {

    return gulp.src('theme/styles/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('master.min.css'))
        .pipe(gulp.dest('theme/dist'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
	return gulp.src([
		'theme/scripts/master.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('master.min.js'))
		.pipe(gulp.dest('theme/dist/'))
		.pipe(browserSync.stream());
});
