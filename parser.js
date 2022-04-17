// const {getPageNumbers} = require('./src/getPageNumbers');
// const {getLinks} = require('./src/getLinks');
//const {getPageData} = require('./src/getPageData');
const {saveFile} = require('./src/save');

// const url = `https://opoznai.bg/all/sort:popular_ever`;

const puppeteer = require('puppeteer');

const urls = [
    'https://opoznai.bg/view/orlovo-oko-iagodina',
    'https://opoznai.bg/view/etnografski-kompleks-damastzena',
    'https://opoznai.bg/view/chudnite-mostove',
    'https://opoznai.bg/view/ekopateka-iskar-panega',
    'https://opoznai.bg/view/ekopateka-diavolskata-pateka',
    'https://opoznai.bg/view/krushunski-vodopadi',
    'https://opoznai.bg/view/peshterata-diavolskoto-garlo',
    'https://opoznai.bg/view/vodopad-skoka-kaleitza',
    'https://opoznai.bg/view/vilno-selishte-azareia',
    'https://opoznai.bg/view/vodopad-orfei-i-kaniona-na-vodopadite-smolian',
    'https://opoznai.bg/view/ekopateka-pateka-na-zdraveto-bankia',
    'https://opoznai.bg/view/iazovir-vacha',
    'https://opoznai.bg/view/vodopad-zlaten-vodopad',
    'https://opoznai.bg/view/natzionalen-park-pirin',
    'https://opoznai.bg/view/banderishki-ezera-muratovo-ezero',
    'https://opoznai.bg/view/zookat-alis',
    'https://opoznai.bg/view/sedemte-rilski-ezera',
    'https://opoznai.bg/view/kleptuza',
    'https://opoznai.bg/view/trigradsko-jdrelo',
    'https://opoznai.bg/view/vodopad-liastovichi-vir-ili-vodopad-na-liastovitzite',
    'https://opoznai.bg/view/delfinarium-varna',
    'https://opoznai.bg/view/peshterata-snejanka',
    'https://opoznai.bg/view/zamakat-v-ravadinovo',
    'https://opoznai.bg/view/peshtera-prohodna',
    'https://opoznai.bg/view/ekopateka-biala-reka-kalofer',
    'https://opoznai.bg/view/vrah-snejanka-pamporovo',
    'https://opoznai.bg/view/vodopad-raisko-praskalo',
    'https://opoznai.bg/view/baikushevata-mura',
    'https://opoznai.bg/view/ekoselishte-omaia',
    'https://opoznai.bg/view/krepostta-tzarevetz',
    'https://opoznai.bg/view/emenski-kanion',
    'https://opoznai.bg/view/krepost-tzari-mali-grad-belchin',
    'https://opoznai.bg/view/ekopateka-beli-iskar',
    'https://opoznai.bg/view/velianova-kashta-grad-bansko',
    'https://opoznai.bg/view/vodopad-vidimsko-praskalo-vidima',
    'https://opoznai.bg/view/krepost-ovech-provadiia',
    'https://opoznai.bg/view/muzei-neofit-rilski-grad-bansko',
    'https://opoznai.bg/view/kamennite-kashti-krai-karlukovo',
    'https://opoznai.bg/view/park-za-tantzuvashti-mechki-belitza',
    'https://opoznai.bg/view/postoianna-ikonna-izlojba-banska-hudojestvena-shkola',
    'https://opoznai.bg/view/iagodinska-peshtera',
    'https://opoznai.bg/view/peshtera-orlova-chuka',
    'https://opoznai.bg/view/bekovi-skali',
    'https://opoznai.bg/view/ekopateka-pod-praskite-na-vodopada-teteven',
    'https://opoznai.bg/view/nos-emine-prirodna-zabelejitelnost'
]

const data = []


async function getPageData(urls) {
    const browser = await puppeteer.launch();
    let arr = [];

    for(let i = 0; i<= urls.length-1; i++){
        const page = await browser.newPage();
        await page.goto(urls[i]);
        await page.bringToFront();
        await page.waitForTimeout(1000);

        arr.push({
            'Местоположение': await page.$eval('span.location:nth-child(1) > a:nth-child(2)', el=>el.innerText),
            'photo': await page.evaluate(()=> document.querySelector('.imgallery_bigimg').style.backgroundImage.slice(5, -2)),
            'описание': await page.$eval('.main_article_text', el=>el.innerText),
            'категории': 1,
            
        })

        await page.close();
    }   
    await browser.close();

    return arr
}

getPageData(urls).then(data=>console.log(data))