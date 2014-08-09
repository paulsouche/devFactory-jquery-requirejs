/*jslint node: true */
'use strict';

var todoListScenarios = require('./todoListScenario');

exports.runScenarios = function(client,rootUrl) {
  todoListScenarios.run(client,rootUrl);
};
