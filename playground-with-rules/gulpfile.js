const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const cleanCSS = require('gulp-clean-css');

const uglify = require('gulp-uglify');

const concat = require('gulp-concat');



// Compile Sass into CSS

gulp.task('styles', function() {

    return gulp.src('src/scss/**/*.scss') // Source files

        .pipe(sass().on('error', sass.logError)) // Compile Sass

        .pipe(cleanCSS()) // Minify CSS

        .pipe(gulp.dest('dist/css')); // Output folder

});



// Minify JavaScript

gulp.task('scripts', function() {

    return gulp.src('src/js/**/*.js') // Source files

        .pipe(concat('all.js')) // Concatenate JS files

        .pipe(uglify()) // Minify JS

        .pipe(gulp.dest('dist/js')); // Output folder

});



// Watch files for changes

gulp.task('watch', function() {

    gulp.watch('src/scss/**/*.scss', gulp.series('styles'));

    gulp.watch('src/js/**/*.js', gulp.series('scripts'));

});



// Default task

gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));
