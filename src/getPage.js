const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://opoznai.bg/all/sort:popular_ever');
    await page.waitForTimeout(1000);
    await page.waitForSelector('');

    await browser.close();
})();

module.exports = {

};