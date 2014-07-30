define(['jQuery'],function($) {
   'use strict';

   return {
      init: function() {
         var todos = [];

         $('.todoForm').on('submit',function(event) {
            var todolist = $('.todoList'),
               todoVal = $('.todo').val(),
               remove = function () {
                  var todo = $(this);
                  todos.splice($.inArray(todo.text(),todos),1);
                  todo.remove();
               };

            event.preventDefault();
            if (todoVal && $.inArray(todoVal,todos) < 0) {
               todos.push(todoVal);
               todolist.append(function() {
                  return $('<li><span>' + todoVal + '</span></li>').click(remove);
               });
            }

         });
      }
   };

});