const fs = require('fs');
const path = require('path');

const savePath = path.join(__dirname, '..', 'results');

function numberOfFiles(){
    return fs.readdirSync(savePath).length;
}

function saveFile(data){
    const filepath = path.join(savePath,`${numberOfFiles()}.json`)
    const file = fs.writeFile(filepath, JSON.stringify(data), ()=>{
        console.log(`file path ${filepath}`)
    })
}

module.exports = {
    saveFile
};