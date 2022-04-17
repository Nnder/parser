const {getPageNumbers} = require('./src/getPageNumbers');
const {getLinks} = require('./src/getLinks');
const {getPageData} = require('./src/getPageData');
const {saveFile} = require('./src/save');

const url = `https://opoznai.bg/all/sort:popular_ever`;

for(let i = 1; i <= getPageNumbers(url); i++){
    console.log(getLinks(`https://opoznai.bg/all/sort:popular_ever/page${i}`))
}