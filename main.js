const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder()
.forBrowser('firefox').build();

driver.get('https://dequeuniversity.com/demo/mars/').then(() => {
  new AxeBuilder(driver).include('#main-nav')
  .analyze( (err, results) => {
    if (err) {

      console.error(err)
      // Handle error somehow
   
    }
    console.log(results);
 

 
});


});

