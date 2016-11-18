module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['node_modules/**']
            },
            source: {
                files: {
                    src: ['src/javascript/**/*.js']
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);

};
