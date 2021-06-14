const RecognizerModel = require('../models/RecognizerModel');

async function recognizeFile(req, res){
    if(!req.files.arquivo || !req.files.arquivo.path){
        return res.json({error: true, message: "Nenhuma imagem enviada!"})
    }

    const lang = req.body.lang;
    const file = req.files.arquivo.path;
    if(!isImage(file)){
        return res.json({error: true, message: "O arquivo enviado não é uma imagem!"})
    }

    const result = await RecognizerModel.recognizeImage(file, lang);
    return res.json({message: result});
}

function isImage(file){
    const ext = file.split('.').pop().toLowerCase();
    
    if(ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'ico'){
        return true;
    }
    return false;
}

module.exports = { recognizeFile }