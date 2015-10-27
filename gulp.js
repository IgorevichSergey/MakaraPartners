
var gulp = require('gulp');
var connect = require("gulp-connect");
var concat = require('gulp-concat');
var cssmin = require('gulp-concat-css');
var runSequence = require('run-sequence');

config = {
    SCRIPTS: [


    ],
    BOWER_SCRIPTS: [
        "./bower_components/angular/angular.min.js",
        "./bower_components/angular-resource/angular-resource.min.js",
        "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "./bower_components/angular-ui-router-styles/ui-router-styles.js",
        "./bower_components/jquery/dist/jquery.min.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js"
    ],
    CSS: [
        "./app/*.css",
        "./app/components/**/*.css",
        "./bower_components/bootstrap/dist/css/bootstrap.min.css"
    ]
};

gulp.task('scripts_min', function () {
    gulp.src(config.SCRIPTS)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./production/js'));
});

gulp.task('css_min', function () {
    gulp.src(config.CSS)
        .pipe(cssmin('app.css'))
        .pipe(gulp.dest('./production/css'));
});

gulp.task('copy_html', function(){
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./production'))
        .pipe(connect.reload())
});
gulp.task('bower_scripts_min',function () {
    gulp.src(config.BOWER_SCRIPTS)
        .pipe(concat('bower-components.min.js'))
        .pipe(gulp.dest('./production/js'))
});

gulp.task('build', function(){
    runSequence('scripts_min', 'css_min', 'bower_scripts_min', 'copy_html',function() {
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
