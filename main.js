const {By,Key,Builder} = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
      //browser
      await driver.get("http://google.com");
    //navigate to our application 
    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
//add something
var title = await driver.getTitle();
console.log('Title is:',title);
 } finally {
      //close the browser
      await driver.quit();
  }
}

example();