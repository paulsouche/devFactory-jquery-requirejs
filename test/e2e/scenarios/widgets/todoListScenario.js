/*jslint node: true */
'use strict';

exports.run = function(client,rootUrl) {

  var firstIterLength,secondIterLength,thirdIterLength,fourthIterLength;

  client.url(rootUrl)
    .setValue('.todo','TODO', function(err) {})
    .click('button[type=submit]',function(err) {})
    .elements('.todoList li',function(err,res) {
      firstIterLength = res.value.length;
    })
    .setValue('.todo','TODO', function(err) {})
    .click('button[type=submit]',function(err) {})
    .elements('.todoList li',function(err,res) {
      secondIterLength = res.value.length;
    })
    .setValue('.todo','TODONEW', function(err) {})
    .click('button[type=submit]',function(err) {})
    .elements('.todoList li',function(err,res) {
      thirdIterLength = res.value.length;
    })
    .click('.todoList li:first-child',function(err) {})
    .elements('.todoList li',function(err,res) {
      fourthIterLength = res.value.length;
    });

  describe('todoList', function() {

    describe('create todos', function() {

      it('should create a todo', function() {

        waitsFor(function() {
          return firstIterLength;
        },'todoListScenario 1 timeout', 10000);

        runs(function() {
          expect(firstIterLength).toBe(1);
        });

      });

      it('should not create a todo of the same value', function() {

        waitsFor(function() {
          return secondIterLength;
        },'todoListScenario 2 timeout', 10000);

        runs(function() {
          expect(secondIterLength).toBe(1);
        });

      });

      it('should create a todo of a new value', function() {

        waitsFor(function() {
          return thirdIterLength;
        },'todoListScenario 3 timeout', 10000);

        runs(function() {
          expect(thirdIterLength).toBe(2);
        });

      });

    });

    describe('create todos', function() {

      it('should delete a todo', function() {

        waitsFor(function() {
          return fourthIterLength;
        },'todoListScenario 4 timeout', 10000);

        runs(function() {
          expect(fourthIterLength).toBe(1);
        });

      });

    });

  });

};