const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');

gulp.task('less', done => {
    gulp.src(['app/less/**/*.less',
            'node_modules/normalize.css/normalize.css', 
            'node_modules/bootstrap-less-port/dist/css/bootstrap-grid.css'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('output/css'))

        done();
});

gulp.task('js', done => {
    gulp.src('app/**/*.js')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('html', done => {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('watch', function () {
    browserSync.init({
        watch: true,
        server: {
            baseDir: 'output'
        }
    });
    // gulp.watch('app/json/**/*.json', gulp.series('nunjucks'));
    // gulp.watch('app/pages/**/*.html', gulp.series('nunjucks'));
    // gulp.watch('app/templates/**/*.html', gulp.series('nunjucks'));
    gulp.watch('app/*.html', gulp.series('html'));
    gulp.watch('app/less/**/*.less', gulp.series('less'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.parallel(
    'less',
    'js',
    'html',
    // 'nunjucks'
));