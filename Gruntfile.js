module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    interupt: true,
                },
            },
            css: {
                files: ['css/*.css'],
                tasks: ['autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                    interupt: true,
                },
            },
        },
        uglify: {
            build: {
                src: ['js/skrollr.min.js', 'js/skrollrinit.js', 'js/jquery-1.11.0.min.js', 'js/lightbox.js', 'js/main.js', 'js/outdatedBrowser.js'],
                dest: 'js/main.min.js'
            }
        },
        cssmin: {
            my_target: {
                src: 'main.css',
                dest: 'main.min.css'
            }
        },
        // connect: {
        //     server: {
        //         options: {
        //             port: 8000,
        //             hostname: 'localhost',
        //         }
        //     }
        // },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['css/*.css', '*.html', 'js/*.js']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        autoprefixer: {
            autoprefix: {
                expand: true,
                flatten: true,
                src: 'css/*.css', // -> src/css/file1.css, src/css/file2.css
                dest: '', // -> dest/css/file1.css, dest/css/file2.css
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');


    // Default task(s).
    grunt.registerTask('compress', ['uglify', 'cssmin']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};
