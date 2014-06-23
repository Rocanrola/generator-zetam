module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            express: {
                files: ['**/*.js', '!**/node_modules/**', '!**/components/**/view.js', '!**/controllers/**/client.js', '!**/public/*.js'],
                tasks: ['express:dev']
            },
            less: {
                files: ['**/*.less'],
                tasks: ['less','autoprefixer']
            },
            statics: {
                files: ['**/*.html', '**/*.css']
            },
            jsclient: {
                files: ['**/controllers/**/client.js', '**/components/**/view.js'],
                tasks: ['browserify']
            }
        },
        autoprefixer: {
            single_file: {
                src: 'public/css/bundle.css',
                dest: 'public/css/bundle.css'
            },
        },
        less: {
            development: {
                files: {
                    "public/css/controllers/index.css": "controllers/index/bundle.less"
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'public/js/controllers/index.js': ['controllers/index/client.js'],
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'app.js',
                    node_env: 'development'
                }
            }
        }
    });

    grunt.registerTask('default', ['express:dev', 'less', 'browserify', 'watch']);
}