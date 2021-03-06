const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('chieckn but');
});

app.get('/helloworld/', (req, res) => {
  res.send('Hello World!');
});

app.get('/upass/', (req, res) => {
  selUpass();
  res.send('Received request to load UPass');
});

app.get('/balance/', async (req, res) => {
  const balance = await pupBalance();
  res.send(balance);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function pupBalance() {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({ headless: true }); // true by default
  const page = await browser.newPage();
  await page.goto('https://compasscard.ca/');

  // sign in
  page.click('#Content_lbSignIn');
  await page.waitForNavigation();
  await page.type('#Content_emailInfo_txtEmail', process.env.COMPASS_EMAIL); // await prevents both being entered into password
  await sleep(100).then(() => { page.type('#Content_passwordInfo_txtPassword', process.env.COMPASS_PASSWORD); });
  sleep(100).then(() => { page.click('#Content_btnSignIn'); });
  
  // get value
  const element = await page.waitForSelector('#Content_pnlCardDetails > div > div > div.block.stored-values > div.stored-value > div.value-block > div.value-text > span');
  const newBalance = await element.evaluate(e => e.textContent);

  await browser.close();
  return newBalance;


}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    driver.findElement(By.id('username')).sendKeys(process.env.SCHOOL_USERNAME);
    driver.findElement(By.id('password')).sendKeys(process.env.SCHOOL_PASSWORD);
    
    // click submit
    const school = process.env.SCHOOL;
    if (school === 'ubc') {
      driver.findElement(By.css("button[type='submit']")).click();
    } else if (school === 'sfu') {
      driver.findElement(By.css("input[type='submit']")).click();
    }

    // check and request
    await driver.wait(until.elementLocated(By.id('chk_1')), 10000); // .catch(driver.quit()); still crashes
    driver.findElement(By.id('chk_1')).click();
    driver.findElement(By.id('requestButton')).click();
    
    await driver.quit();
}