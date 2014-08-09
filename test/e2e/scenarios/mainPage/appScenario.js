/*jslint node: true */
'use strict';

exports.run = function(client,rootUrl) {

  var applicationTitle = '',todoListTitle = '',todoListIsVisible;

  client.url(rootUrl)
    .getTitle(function(err,title) {
      applicationTitle = title;
    })
    .isVisible('.container',function(err,res) {
      todoListIsVisible = res;
    })
    .elements('.container h2',function(err,res) {
      res.value.forEach(function(title) {
        client.elementIdText(title.ELEMENT, function(err,res) {
          todoListTitle = res.value;
        });
      });
    });

  describe('application',function() {

    it('should have a title',function() {

      waitsFor(function() {
        return applicationTitle;
      },'appScenario 1 timeout', 10000);

      runs(function() {
        expect(applicationTitle).toBe('Todoliste Jquery + RequireJS');
      });

    });

    it('should display the todolist',function() {

      waitsFor(function() {
        return todoListIsVisible;
      },'appScenario 2 timeout', 10000);

      runs(function() {
        expect(todoListIsVisible).toBeTruthy();
      });

    });

    it('should display the todolist title',function() {

      waitsFor(function() {
        return todoListTitle;
      },'appScenario 3 timeout', 10000);

      runs(function() {
        expect(todoListTitle).toBe('Todo');
      });

    });

  });

};
