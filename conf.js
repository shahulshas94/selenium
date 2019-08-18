var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');
var fs = require('fs-extra');

var currentDate = new Date();
var testOutputFolder = 'TestResults/' + currentDate.getDate() + '_' + currentDate.getMonth() + '_' + currentDate.getFullYear() + '_' + currentDate.getHours() + '-' + currentDate.getMinutes() + '-' + currentDate.getSeconds() + '/';

exports.config = {
  //chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.45.exe',
  //seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  
  specs: ['compiledJSFiles/specs/tc001_LogintoApp.js','compiledJSFiles/specs/tc002_AddCreateAssessment.js'],
  capabilities: {
    browserName: 'chrome',
  },

  // suites: {
  //   login: 'compiledJSFiles/specs/tc001_LogintoApp.js',
  //   smoke: [
  //     'compiledJSFiles/specs/tc002_AddCreateAssessment.js',
  //     'compiledJSFiles/specs/smoke/tc002_AddCreateAssessment.js'
  //   ] 
  // },

  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],
 
  params: {
    testOutputFolderPath : testOutputFolder
    },

  onPrepare: function () {
    fs.emptyDir(testOutputFolder+'failedScreenshots/', function (err) {
      console.log('Exception while folder creation : '+ err);
  });
  fs.emptyDir(testOutputFolder+'screenshots/', function (err) {
    console.log('Exception while folder creation : '+ err);
});
  

  jasmine.getEnv().addReporter({
      specDone: function(result) {
          if (result.status == 'failed') {
              browser.getCapabilities().then(function (caps) {
                  var browserName = caps.get('browserName');
                  browser.takeScreenshot().then(function (png) {
                      var stream = fs.createWriteStream(testOutputFolder+'failedScreenshots/' + browserName + '-' + result.fullName+ '.png');
                      stream.write(new Buffer(png, 'base64'));
                      stream.end();
                  });
              });
          }
      }
  });

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: testOutputFolder,
      filePrefix: 'xmlresults'
    }));
  },
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = '64';//caps.get('version');
      platform = 'Angular5';//caps.get('platform');

      testConfig = {
        reportTitle: 'HSO Test Execution Report',
        outputPath: testOutputFolder,
        outputFilename: 'HSOExecutionTestReport',
        screenshotPath: './failedScreenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from(testOutputFolder + 'xmlresults.xml', testConfig);
    });
  }
}