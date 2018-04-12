var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var jade = require('gulp-jade');
var processors = [
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
];

gulp.task('css', function () {
    gulp.src("./components/**/*.css")
        .pipe(postcss(processors))
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./components'));
});

gulp.task('jade', function() {
    gulp.src('./components/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
    gulp.watch('./components/**/*.css', ['css']);
    gulp.watch('./components/**/*.jade', ['jade']);
});

gulp.task('default', ['css', 'jade', 'watch']);