(function(global) {
   'use strict';

   global.resetSpyObj = function(spyObj) {
      for (var spy in spyObj) {
         if (spyObj.hasOwnProperty(spy) && typeof spyObj[spy] === 'function' && typeof spyObj[spy].reset === 'function') {
            spyObj[spy].reset();
         }
      }
   };

   global.Spy.prototype.timesCalled = function() {
      return this.calls.length;
   };

   global.Spy.prototype.timesCalledWith = function() {
      var total = 0,assertsArgs = arguments,theSame;

      this.calls.forEach(function(call) {
         theSame = true;
         for (var i = 0; i <= assertsArgs.length; i++) {
            if (typeof assertsArgs === 'object') {
               if (!jasmine.getEnv().equals_(assertsArgs[i],call.args[i])) {
                  theSame = false;
                  break;
               }
            }
            else {
               if (assertsArgs[i] !== call.args[i]) {
                  theSame = false;
                  break;
               }
            }
         }

         if (theSame) {
            total++;
         }
      });
      return total;
   };

})(jasmine);


