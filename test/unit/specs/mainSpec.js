define(['squirejs','jasmineAsync'],function(Squire,AsyncSpec) {
   'use strict';

   var app,
      todoListSpy = jasmine.createSpyObj('todoList',['init']),
      spyJqueryCall = window.mockJquery.getSpyJqueryCall(),
      spyJqueryElement = window.mockJquery.getSpyJqueryElement();

   describe('main',function() {
      var async = new AsyncSpec(this);
      var injector = new Squire();

      async.beforeEach(function(done) {
         injector
            .mock('widgets/todoList',todoListSpy)
            .require(['main'], function(module) {
               app = module;
               done();
            });
      });

      describe('App injection', function () {

         it('should return an Object with a run function',function() {
            expect(typeof app.run).toBe('function');
         });

      });

      describe('App run', function () {

         async.beforeEach(function(done) {
            app.run();
            done();
         });

         it('should wait for the document to be ready',function() {
            expect(spyJqueryCall).toHaveBeenCalledWith(window.document);
         });

         it('should call the callBack',function() {
            expect(spyJqueryElement.ready).toHaveBeenCalledWith(jasmine.any(Function));
         });

         it('should init the todolist',function() {
            expect(todoListSpy.init).toHaveBeenCalled();
         });

      });

   });

});
