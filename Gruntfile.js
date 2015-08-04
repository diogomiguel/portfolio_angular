module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        clean: ["dist", '.tmp'],
 
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!*/*.js', '!scss/**', '!lib/**', '!**/*.css'],
                dest: 'dist/'
            },
            shims: {
                expand: true,
                cwd: 'app/lib/webshim/shims',
                src: ['**'],
                dest: 'dist/js/shims'
            }
        },

        // Sass files
        compass: {
            dev: {
                options: {
                    sassDir: 'app/scss',
                    cssDir: 'app/assets/css',
                    outputStyle: 'expanded',
                    environment: 'development',
                    require: ['breakpoint']
                },
            },

            build: {
                options: {
                    sassDir: 'app/scss',
                    cssDir: 'dist/assets/css',
                    outputStyle: 'compressed',
                    environment: 'production',
                    require: ['breakpoint']
                }
            }

        },

        watch: {
            scss: {
                files: 'app/**/*.scss',
                tasks: 'compass:dev'
            },
        },
 
        rev: {
            files: {
                src: ['dist/**/*.{js,css}', '!dist/js/shims/**']
            }
        },
 
        useminPrepare: {
            html: 'app/index.html'
        },
 
        usemin: {
            html: ['dist/index.html']
        },
 
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
 
    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'copy', 'compass', 'useminPrepare', 'concat', 'uglify', 'rev', 'usemin', 'watch'
    ]);
};