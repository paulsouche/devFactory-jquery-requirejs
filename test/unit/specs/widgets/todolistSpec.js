define(['squirejs','jasmineAsync'],function(Squire,AsyncSpec) {
   'use strict';

   var todoList,
      mockJquery = window.mockJquery,
      spyJqueryCall = mockJquery.getSpyJqueryCall(),
      spyJqueryElement = mockJquery.getSpyJqueryElement(),
      spyJqueryEvent = mockJquery.getSpyJqueryEvent(),
      selectors = {
         todoForm: {
            selector: '.todoForm',
            event: 'submit'
         },
         todoList: {
            selector: '.todoList'
         },
         todoInput: {
            selector: '.todo'
         }
      },
      todo = {
         value: mockJquery.getDefaultValue(),
         markup: '<li><span>' + mockJquery.getDefaultValue() + '</span></li>'
      };

   describe('widget',function() {
      var async = new AsyncSpec(this);
      var injector = new Squire();

      async.beforeEach(function(done) {
         injector
            .require(['widgets/todoList'], function(module) {
               todoList = module;
               done();
            });
      });

      describe('Todolist injection', function () {

         it('should return an Object with an init function',function() {
            expect(typeof todoList.init).toBe('function');
         });

      });

      describe('Todolist initialisation', function () {

         async.beforeEach(function(done) {
            mockJquery.reset();
            todoList.init();
            done();
         });

         it('should select the todoForm',function() {
            expect(spyJqueryCall).toHaveBeenCalledWith(selectors.todoForm.selector);
            expect(spyJqueryCall.timesCalledWith(selectors.todoForm.selector)).toBe(1);
         });

         it('should set the submit handler on todoForm',function() {
            expect(spyJqueryElement.on).toHaveBeenCalledWith(selectors.todoForm.event,jasmine.any(Function));
         });

         describe('todoForm submit handler',function() {

            it('should select the todoList',function() {
               expect(spyJqueryCall).toHaveBeenCalledWith(selectors.todoList.selector);
               expect(spyJqueryCall.timesCalledWith(selectors.todoList.selector)).toBe(1);
            });

            it('should select the todoInput',function() {
               expect(spyJqueryCall).toHaveBeenCalledWith(selectors.todoInput.selector);
               expect(spyJqueryCall.timesCalledWith(selectors.todoInput.selector)).toBe(1);
            });

            it('should find the value of the todoInput',function() {
               expect(spyJqueryElement.val).toHaveBeenCalled();
               expect(spyJqueryElement.val.timesCalled()).toBe(1);
            });

            it('should prevent the event default',function() {
               expect(spyJqueryEvent.preventDefault).toHaveBeenCalled();
               expect(spyJqueryEvent.preventDefault.timesCalled()).toBe(1);
            });

            it('should check if the todo is already in the list',function() {
               expect(mockJquery.inArray).toHaveBeenCalledWith(todo.value,jasmine.any(Array));
            });

            it('should append a todo',function() {
               expect(spyJqueryElement.append).toHaveBeenCalledWith(jasmine.any(Function));
               expect(spyJqueryElement.append.timesCalledWith(jasmine.any(Function))).toBe(1);
            });

            it('should set the todo markup',function() {
               expect(spyJqueryCall).toHaveBeenCalledWith(todo.markup);
               expect(spyJqueryCall.timesCalledWith(todo.markup)).toBe(1);
            });

            it('should set the todo click handler',function() {
               expect(spyJqueryElement.click).toHaveBeenCalledWith(jasmine.any(Function));
               expect(spyJqueryElement.click.timesCalledWith(jasmine.any(Function))).toBe(1);
            });

         });

         describe('todo click handler',function() {

            it('should select the todo',function() {
               expect(spyJqueryCall).toHaveBeenCalledWith(spyJqueryElement);
               expect(spyJqueryCall.timesCalledWith(spyJqueryElement)).toBe(1);
            });

            it('should find the todo value',function() {
               expect(spyJqueryElement.text).toHaveBeenCalled();
               expect(spyJqueryElement.text.timesCalled()).toBe(1);
            });

            it('should splice the todos array',function() {
               expect(mockJquery.inArray.timesCalledWith(todo.value,jasmine.any(Array))).toBe(2);
            });

            it('should remove the todo',function() {
               expect(spyJqueryElement.remove).toHaveBeenCalled();
               expect(spyJqueryElement.remove.timesCalled()).toBe(1);
            });

         });

      });

   });

});





