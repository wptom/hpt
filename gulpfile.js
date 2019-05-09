const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');
const del = require('del');

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

gulp.task('vendor', done => {
    gulp.src('vendor/**')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('js', done => {
    gulp.src('app/**/*.js')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('clean-html', function () {
    return del([
        'output/*.html'
    ]);
});

gulp.task('html', done => {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('images', done => {
    gulp.src('app/**/*.{gif,jpg,png,svg}')
        .pipe(gulp.dest('output'))

        done()
});

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('app'))
});

gulp.task('readJSON', done => {

    const global_config = JSON.parse(fs.readFileSync('./gulp_config.json'));
    for (site of global_config) {
        processSite(site);
    }

    done();
});

function processSite(siteData) {
    // console.log('process site - ',siteData.dest_folder);
    // migrateImages(siteData.images_transfer, siteData.dest_folder);
    // migrateJS(siteData.js_transfer, siteData.dest_folder);
    // migrateCSS(siteData.css_transfer, siteData.dest_folder);
    // migrateFonts(siteData.fonts_transfer, siteData.dest_folder);
    // createCSS(siteData.less_source, siteData.color_module, siteData.dest_folder);

    for (page of siteData.pages) {
        createPage(page, siteData.templates_folder, siteData.common_json, siteData.dest_folder);
    }
    
}

function createPage(pageData, templatesSource, commonJson, outputDirectory) {
    //console.log('create pages');

    return gulp.src(pageData.page)
        .pipe(getData(pageData.data, commonJson))
        .pipe(nunjucksRender({
            path: [templatesSource]
        }))
        .pipe(rename(pageData.output_name))
        .pipe(gulp.dest(outputDirectory))
}

function getData(pageFile, commonFile) {
    const pageData = require(pageFile);    
    const commonData = require(commonFile);
    // console.log(pageData.ORDERS.sectionTitle);
    
    //const sharedProjects = require('./app/json/shared/project-info.js')
    return data({
        PAGE: pageData,
        // PROJECT_SHARED: sharedProjects,
        COMMON: commonData
    });
}

gulp.task('watch', function () {
    browserSync.init({
        watch: true,
        server: {
            baseDir: 'output'
        }
    });
    // gulp.watch('app/*.html', gulp.series(['html']));
    gulp.watch('app/json/**/*.+(js|json)', gulp.series(['clean-html', 'readJSON', 'nunjucks']));
    gulp.watch('app/pages/*.+(html|nunjucks)', gulp.task(['clean-html', 'readJSON', 'nunjucks']));
    gulp.watch('app/templates/**/*.+(html|nunjucks)', gulp.series(['clean-html', 'readJSON', 'nunjucks']));
    gulp.watch('vendor', gulp.series('vendor'));
    gulp.watch('app/**/*.{gif,jpg,png,svg}', gulp.series('images'));
    gulp.watch('app/less/**/*.less', gulp.series('less'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.parallel(
    'vendor',
    'less',
    'js',
    'images',
    'clean-html',
    'readJSON',
    'nunjucks',
    // 'html'
));