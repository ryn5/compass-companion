const express = require('express')
const app = express()
const port = 3000

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

function selUpass() {
  const {Builder, By, Key, until} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://upassbc.translink.ca/');

    await driver.quit();
})();
}