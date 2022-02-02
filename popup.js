const {Builder, By, Key, until} = require('selenium-webdriver');

async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://selenium.dev');

    await driver.quit();
}

helloSelenium();

if (localStorage['updated-text']) {
    document.getElementById('updated-text').innerHTML = localStorage['updated-text']; 
}

const homeButton = document.querySelector('#home-btn');

homeButton.addEventListener('click', () => {
    window.open('https://www.compasscard.ca/');
});

const checkButton = document.querySelector('#check-btn');

checkButton.addEventListener('click', () => {
    window.open('https://www.compasscard.ca/ManageCards');
});

const upassButton = document.querySelector('#upass-btn');

upassButton.addEventListener('click', () => {
    window.open('https://upassbc.translink.ca/');
    const date = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateFormat = date.toLocaleString('en-US', options);
    const str = 'Last updated: ' + dateFormat;
    document.getElementById('updated-text').innerHTML = str;
    localStorage['updated-text'] = str;
});