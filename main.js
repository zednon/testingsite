const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const assert = require("assert");

const driver = new WebDriver.Builder().forBrowser('firefox').build();

driver.get('https://dequeuniversity.com/demo/mars/').then(() => {
  new AxeBuilder(driver).analyze((err, results) => {
    if (err) {
     
      // Handle error somehow
    }
    console.log(results);
  });
});

