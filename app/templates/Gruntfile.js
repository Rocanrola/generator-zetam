module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            express: {
                files: ['**/*.js', '!**/node_modules/**'],
                tasks: ['express:dev'],
                options: {
                  spawn: false,
                }
            },
            less: {
                files: ['**/*.less'],
                tasks: ['less']
            },
            statics: {
                files: ['**/*.html','**/*.css']
            }
        },
        less: {
            development: {
                files: {
                    "public/css/bundle.css": "less/bundle.less"
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['express:dev', 'watch']);
}