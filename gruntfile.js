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
        copy: {

          html: {
            files: [
              {
                expand: true,
                cwd: 'src/',
                src: [ 'index.html' ],
                dest: 'build/'
              }
            ]
          },

        vendorjs: {

          files: [
            {
              expand: true,
              cwd:'node_modules/jquery/dist',
              src: [ 'jquery.js' ],
              dest: 'build/js/'
            }
          ]
        }

      },

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'copy']);

};
