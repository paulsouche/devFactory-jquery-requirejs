/*jslint node: true */
'use strict';

var mainPageScenarios = require('./mainPage/main'),
  widgetsScenarios = require('./widgets/main');

exports.runScenarios = function(client,rootUrl) {
  mainPageScenarios.runScenarios(client,rootUrl);
  widgetsScenarios.runScenarios(client,rootUrl);
};
