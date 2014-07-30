(function() {
   'use strict';

   require.config({
      paths: {
         jQuery: '../vendor/jquery/dist/jquery.min'
      },
      shim: {
         jQuery: {
            exports: '$'
         }
      }
   });

   require(['main'], function (main) {
      main.run();
   });

})();

