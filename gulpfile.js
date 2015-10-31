var gulp = require('gulp');
var connect = require("gulp-connect");
var concat = require('gulp-concat');
var cssconcat = require('gulp-concat-css');
var runSequence = require('run-sequence');
var uncss = require('gulp-uncss');

config = {
    SCRIPTS: [
        "./app/directives/**/*.js",
        "./app/firmPage/**/*.js",
        "./app/homePage/**/*.js",
        "./app/kontaktPage/**/*.js",
        "./app/projectPage/**/*.js",
        "./app/realithationPage/**/*.js",
        "./app/videoPage/**/*.js"

    ],
    BOWER_SCRIPTS: [
        "./bower_components/angular/angular.min.js",
        "./bower_components/jquery/dist/jquery.min.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js"
    ],
    BOWER_CSS: [
        "./bower_components/bootstrap/dist/css/bootstrap.min.css"
    ],
    CSS: [
        "./app/**/*.css"

    ]
};

gulp.task('scripts_min', function () {
    gulp.src(config.SCRIPTS)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./production/js'));
});

gulp.task('bower_css_min', function () {
    gulp.src(config.BOWER_CSS)
        .pipe(cssconcat('bower.css'))
        .pipe(gulp.dest('./production/css'));
});


gulp.task('css_min', function () {
    gulp.src(config.CSS)
        .pipe(cssconcat('app.css'))
        .pipe(gulp.dest('./production/css'));
});

gulp.task('copy_html', function(){
    gulp.src('./app/firmPage/firmPage.html')
        .pipe(gulp.dest('./production'));
    gulp.src('./app/homePage/index.html')
        .pipe(gulp.dest('./production'));
    gulp.src('./app/kontaktPage/kontaktPage.html')
        .pipe(gulp.dest('./production'));
    gulp.src('./app/projectPage/projectPage.html')
        .pipe(gulp.dest('./production'));
    gulp.src('./app/videoPage/videoPage.html')
        .pipe(gulp.dest('./production'));
    gulp.src('./app/realithationPage/realithationPage.html')
        .pipe(gulp.dest('./production'))
        .pipe(connect.reload())
});
gulp.task('bower_scripts_min',function () {
    gulp.src(config.BOWER_SCRIPTS)
        .pipe(concat('bower-components.min.js'))
        .pipe(gulp.dest('./production/js'))
});
gulp.task('copy_other', function () {
    gulp.src('./fonts/**')
        .pipe(gulp.dest('./production/fonts'));
    gulp.src('./images/**')
        .pipe(gulp.dest('./production/images'));
});

gulp.task('build', function(){
    runSequence('scripts_min','bower_css_min', 'css_min', 'bower_scripts_min', 'copy_other', 'copy_html',function() {
    });

});

gulp.task('watch', function () {
    gulp.watch([
        './app/*.js',
        './app/**/*.js',
        './app/**/*.html',
        './app/**/*.css'
    ], ['build']);
});
gulp.task('connect', function(){
    connect.server({
        root: 'production',
        livereload: true,
        port: 8000
    })

});
//, 'watch',
gulp.task('default', [ 'connect', 'build', 'watch']);
gulp.task('build_project', ['build']);
