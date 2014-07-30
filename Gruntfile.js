module.exports = function(grunt) {
   'use strict';

   require('load-grunt-tasks')(grunt);

   grunt.initConfig({
      assetsDir: 'app',
      distDir: 'dist',
      testsDir: 'test',
      availabletasks: {
         tasks: {
            options: {
               filter: 'include',
               groups: {
                  'Development': ['dev', 'test:unit', 'test:e2e']
               },
               sort: ['dev', 'test:unit', 'test:e2e'],
               descriptions: {
                  'dev' : 'Launch the static server and watch tasks',
                  'test:unit' : 'Run unit tests and show coverage report',
                  'test:e2e' : 'Run end-to-end tests using webdriverJS'
               },
               tasks: ['dev', 'test:unit', 'test:e2e']
            }
         }
      },
      browserSync: {
         dev: {
            bsFiles: {
               src : []
            },
            options: {
               watchTask: true,
               ghostMode: {
                  clicks: true,
                  scroll: true,
                  links: false,
                  forms: false
               },
               server: {
                  baseDir: "<%= assetsDir %>"
               }
            }
         }
      },
      csslint: {
         options: {
            csslintrc: '.csslintrc'
         },
         all: {
            src: ['<%= assets_dir %>/css/*.css']
         }
      },
      jasmine_node: {
         options: {
            forceExit: true,
            match: '.',
            matchall: false,
            extensions: 'js',
            specNameMatcher: 'spec'
         },
         all: ['test/e2e/']
      },
      jshint: {
         options: {
            jshintrc: '.jshintrc'
         },
         all : {
            src : [
               '<%= assetsDir %>/js/*.js','<%= testsDir %>/**/*.js'
            ]
         }
      },
      karma: {
         dev_unit: {
            options: {
               configFile: 'test/unit/conf/unit-test-conf.js',
               background: true,
               singleRun: false,
               autoWatch: true,
               reporters: ['progress']
            }
         },
         dist_unit: {
            options: {
               configFile: 'test/unit/conf/unit-test-conf.js',
               background: false,
               singleRun: true,
               autoWatch: false,
               reporters: ['progress', 'coverage'],
               coverageReporter : {
                  type : 'html',
                  dir : 'reports/coverage'
               }
            }
         }
      },
      watch: {
         options : {
            interrupt: true
         },
         js: {
            files: ['<%= assetsDir %>/**/*.js','<%= testsDir %>/**/*.js'],
            tasks: ['newer:jshint','karma:dev_unit:run']
         },
         css: {
            files: ['<%= assetsDir %>/scss/**/*.scss'],
            tasks: ['newer:sass']
         }
      }
   });

   grunt.registerTask('dev', [
      'browserSync',
      'karma:dev_unit:start',
      'watch'
   ]);

   grunt.registerTask('test:unit', [
      'karma:dist_unit:start'
   ]);

   grunt.registerTask('test:e2e', [

   ]);

   grunt.registerTask('ls', ['availabletasks']);

};
