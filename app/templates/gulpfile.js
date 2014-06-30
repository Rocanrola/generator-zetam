'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('less', function() {
    gulp.src('./controllers/**/bundle.less')
        .pipe($.less())
        .pipe($.rename(function(path) {
            path.basename = path.dirname;
            path.dirname = '';
        }))
        .pipe(gulp.dest('./public/css/controllers/'))
        .pipe($.livereload({ auto: false }));
});

gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('./controllers/**/client.js')
        .pipe($.browserify())
        .pipe($.rename(function(path) {
            path.basename = path.dirname;
            path.dirname = '';
        }))
        .pipe(gulp.dest('./public/js/controllers/'))
        .pipe($.livereload({ auto: false }));
});

gulp.task('server', function() {
    $.nodemon({
        script: 'app.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development', 'PORT':3000 }
    })
    .on('restart', function() {
        console.log('restarted!')
    })
});

$.livereload.listen();

gulp.task('watch', function() { 
    
    // $.livereload.listen();

    gulp.watch(['less/**/*.less',
                'components/**/*.less',
                'layouts/**/*.less',
                'controllers/**/*.less'], ['less']);

    gulp.watch(['components/**/*.html', 'layouts/**/*.html']).on('change', $.livereload.changed);
    gulp.watch(['controllers/*/client.js', 'components/*/view.js','!node_modules'], ['browserify']);
});



gulp.task('default', ['less','browserify','watch','server']);