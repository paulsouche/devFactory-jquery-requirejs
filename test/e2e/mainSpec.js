/*jslint node: true */
'use strict';

var webdriverjs = require('webdriverjs'),
  specs = require('./scenarios/scenarios'),
  root = 'http://localhost:3000';

var client = webdriverjs.remote({
  host: 'localhost',
  port: 4444,
  desiredCapabilities: {
    browserName: 'chrome'
  }
});

jasmine.getEnv().defaultTimeoutInterval = 10000;
client.init();
specs.runScenarios(client,root);
client.end();