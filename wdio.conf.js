require('dotenv').config();

const commonCaps = {
  buildName: "Bidi Test",
  projectName: "some_project_name",
  source: "webdriverio:sample-master:v1.2",
};

exports.config = {
    specs: [
      './test/**/*.js'
    ],
    user: process.env.BROWSERSTACK_USERNAME ||"BROWSERSTACK_USERNAME",
    key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
    hostname: "hub.browserstack.com",
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        seleniumBidi: true,
        'seleniumVersion': '4.20.0',
      },
    }],
    services: [
      ['browserstack'],
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
  };

