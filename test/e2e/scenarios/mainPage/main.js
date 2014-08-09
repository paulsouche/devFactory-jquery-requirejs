/*jslint node: true */
'use strict';

var appScenario = require('./appScenario');

exports.runScenarios = function(client,rootUrl) {
  appScenario.run(client,rootUrl);
};
