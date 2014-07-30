module.exports = function (config) {

   "use strict";

   config.set({
         basePath: '../../../',
         frameworks: ['jasmine','requirejs'],
         files: [
            {pattern: 'app/vendor/squire/src/Squire.js', included: false},
            {pattern: 'app/vendor/jasmine.async/src/jasmine.async.js', included: false},
            {pattern: 'app/vendor/jquery/dist/jquery.min.js', included: false},
            {pattern: 'app/js/*.js', included: false},
            {pattern: 'app/js/**/*.js', included: false},
            {pattern: 'test/unit/**/*Spec.js', included: false},
            'test/unit/mockFactory/*.js',
            'test/unit/test-config.js'
         ],
         exclude: [
            'js/config.js'
         ],
         reporters: ['progress', 'coverage'],
         port: 9877,
         colors: true,
         logLevel: config.LOG_INFO,
         autoWatch: true,
         //browsers: ['Chrome','Firefox','PhantomJS'],
         browsers: ['Chrome'],
         captureTimeout: 6000,
         plugins: [
            'karma-jasmine',
            'karma-requirejs',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher'
         ],
         singleRun: false
      }
   )
   ;
}
;