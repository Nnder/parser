const puppeteer = require('puppeteer');

async function getPageNumbers(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('a.browse_paging_item:nth-child(8) > b:nth-child(1)');
    const pageNumbers = await page.$eval('a.browse_paging_item:nth-child(8) > b:nth-child(1)', (el)=>el.innerText) 
    await browser.close();
    console.log(`Кол-во страниц ${pageNumbers}`);

    return pageNumbers
}

module.exports = {
    getPageNumbers
};