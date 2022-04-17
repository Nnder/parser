const puppeteer = require('puppeteer');


async function getPageData(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForTimeout(1000);

    
    const result = {
        'Местоположение': await page.$eval('span.location:nth-child(1) > a:nth-child(2)', el=>el.innerText),
        'photo': await page.evaluate(()=> document.querySelector('.imgallery_bigimg').style.backgroundImage.slice(5, -2)),
        'описание': await page.$eval('.main_article_text', el=>el.innerText),
        'категории': 1,

    }

    
    
    await browser.close();

    //console.log(result);

    return result
}



module.exports = {
    getPageData
};
