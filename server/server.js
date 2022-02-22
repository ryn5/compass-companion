const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/hellotest/', (req, res) => {
  res.send('Hello World!!!!!!');
});

app.get('/upass/', (req, res) => {
  selUpass();
  res.send('Received request to load UPass'); // ends the 
});

app.get('/balance/', (req, res) => {
  // start puppeteer browser
  res.send('Received request for balance');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  // TODO: create a puppeteer object here?
})


async function selUpass() {
    const {Builder, By, Key, until} = require('selenium-webdriver');
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://upassbc.translink.ca/');

    // select school
    const schools = driver.findElement(By.id('PsiId'));
    schools.click();
    schools.sendKeys(process.env.SCHOOL);
    schools.click();
    driver.findElement(By.id('goButton')).click();

    // login to school portal
    await driver.wait(until.elementLocated(By.id('username')), 10000);
    driver.findElement(By.id('username')).sendKeys(process.env.USERNAME);
    driver.findElement(By.id('password')).sendKeys(process.env.PASSWORD);
    
    // click submit
    const school = process.env.SCHOOL;
    if (school === 'ubc') {
      driver.findElement(By.css("button[type='submit']")).click();
    } else if (school === 'sfu') {
      driver.findElement(By.css("input[type='submit']")).click();
    }

    // check and request
    await driver.wait(until.elementLocated(By.id('chk_1')), 10000); //.catch(driver.quit());
    driver.findElement(By.id('chk_1')).click();
    driver.findElement(By.id('requestButton')).click();
    
    await driver.quit();
}