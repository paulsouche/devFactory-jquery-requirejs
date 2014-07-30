(function(global) {
   'use strict';

   var spyJqueryCall = jasmine.createSpy('jQueryCall'),
      spyJqueryEvent = jasmine.createSpyObj('jQueryEvent',['preventDefault']),
      spyJqueryElement,
      defaultValue = 'foo';

   function getJqueryElement() {
      var mockJqueryElement = jasmine.createSpyObj('jQueryElement',['ready','on','val','text','append','remove','click']);

      mockJqueryElement.ready.andCallFake(function(callBack) {
         if (typeof callBack === 'function') {
            callBack();
         }
      });

      mockJqueryElement.on.andCallFake(function(event,handlerOrSelector,callBack) {
         if (typeof handlerOrSelector === 'function') {
            handlerOrSelector(spyJqueryEvent);
         }
         if (typeof callBack === 'function') {
            callBack(spyJqueryEvent);
         }
      });

      mockJqueryElement.val.andReturn(defaultValue);
      mockJqueryElement.text.andReturn(defaultValue);

      mockJqueryElement.append.andCallFake(function(callBackOrElement) {
         if (typeof callBackOrElement === 'function') {
            callBackOrElement();
         }
      });

      mockJqueryElement.click.andCallFake(function(handler) {
         if (typeof handler === 'function') {
            handler.call(mockJqueryElement);
         }
      });

      return mockJqueryElement;
   }

   spyJqueryElement = getJqueryElement();

   var mockJquery = function (selector) {
      spyJqueryCall(selector);
      return spyJqueryElement;
   };

   mockJquery.inArray = jasmine.createSpy('inArray');
   mockJquery.inArray.andCallFake(function(item,array) {
      if (jasmine.isArray_(array)) {
         if (array.indexOf) {
            return array.indexOf(item);
         }
         else {
            for(var i = 0; i < array.length; i++) {
               if (array[i] === item) {
                  return i;
               }
            }
         }
      }
      return -1;
   });

   mockJquery.reset = function() {
      mockJquery.inArray.reset();
      spyJqueryCall.reset();
      jasmine.resetSpyObj(spyJqueryElement);
      jasmine.resetSpyObj(spyJqueryEvent);
   };

   mockJquery.getDefaultValue = function () {
      return defaultValue;
   };

   mockJquery.getSpyJqueryCall = function() {
      return spyJqueryCall;
   };

   mockJquery.getSpyJqueryElement = function() {
      return spyJqueryElement;
   };

   mockJquery.getSpyJqueryEvent = function() {
      return spyJqueryEvent;
   };



   global.mockJquery = mockJquery;

})(window);

