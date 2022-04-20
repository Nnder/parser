const puppeteer = require('puppeteer');

async function getLinks(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.article_image');

    //await page.waitForTimeout(1000);
    const links = await page.$$eval('.article_image', els=>els.map(el=>el.href))
    await browser.close();

    return links
}

//getLinks('https://opoznai.bg/all/sort:popular_ever/page:1')

module.exports = {
    getLinks
};