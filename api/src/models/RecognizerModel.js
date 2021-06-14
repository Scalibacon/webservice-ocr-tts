const { createWorker } = require('tesseract.js');

const langToTessdata = {
    'en-US': 'eng',
    'pt-BR': 'por',
    'es-ES': 'spa'
}

async function recognizeImage(image, lang){    
    let text = '';
    const worker = createWorker({
        //logger: msg => console.log(`${msg.workerId}: ${msg.progress}`)
    });
  
    try {
        await worker.load();
        await worker.loadLanguage(langToTessdata[lang]);
        await worker.initialize(langToTessdata[lang]);
        const res = await worker.recognize(image);
        await worker.terminate();
        text = clearText(res.data.text);
    } catch(err){
        console.log(err);
        text = err;
    }
    return text;    
}

function clearText(text){
    return text.replace(/(\r\n|\n|\r)/gm," ");
}

module.exports = { recognizeImage }