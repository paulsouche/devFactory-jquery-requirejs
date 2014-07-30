(function() {
   'use strict';

   var allTestFiles = Object.keys(window.__karma__.files).filter(function (file) {
      return /(Spec)\.js$/.test(file);
   });

   require.config({
      paths: {
         squirejs:     '../vendor/squire/src/Squire',
         jasmineAsync: '../vendor/jasmine.async/src/jasmine.async',
         jQuery:       '../vendor/jquery/dist/jquery.min'
      },
      shim: {
         jasmineAsync: {
            exports: 'AsyncSpec'
         },
         jQuery: {
            exports: 'mockJquery'
         }
      },
      baseUrl: '/base/app/js'
   });

   require(allTestFiles, function() {
      window.__karma__.start();
   });


})();

