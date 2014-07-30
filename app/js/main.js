define(['jQuery','widgets/todoList'],function($,todoList) {
   'use strict';

   return {
      run: function() {
         $(window.document).ready(function() {
            todoList.init();
         });
      }
   };

});