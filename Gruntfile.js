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
                files: ['*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    interupt: true,
                },
            },
        },
        uglify: {
            build: {
                src: ['js/skrollr.min.js', 'js/jquery-1.11.0.min.js', 'js/lightbox.js', 'js/main.js', 'js/outdatedBrowser.js'],
                dest: 'js/main.min.js'
            }
        },
        cssmin: {
            my_target: {
                src: 'main.css',
                dest: 'main.min.css'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                }
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);
    grunt.registerTask('serve', ['connect', 'watch']);

};
