const puppeteer = require('puppeteer');

const links = [];


async function getLinks(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('a.browse_paging_item:nth-child(8) > b:nth-child(1)');

    //await page.waitForTimeout(5000);
    const pageNumbers = await page.$eval('a.browse_paging_item:nth-child(8) > b:nth-child(1)', (el)=>el.innerText) 
    await browser.close();
    console.log(`Кол-во страниц ${pageNumbers}`);

    return pageNumbers
}

module.exports = {

};