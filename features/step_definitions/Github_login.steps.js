
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').setChromeOptions().build();
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')


Given('User is opening login page', async function() {
	await driver.get('https://google.com')
});

When('User is entering username and password', async function() {
	await driver.findElement(By.xpath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input')).sendKeys("ABCD");
});

When('User is clicking login button', function() {});
	
Then('User is logged in', function() {});
 