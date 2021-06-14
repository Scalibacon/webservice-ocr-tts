import React, { useState } from 'react';

import './style.css';
import { showButtons, hideButtons, loadImage } from './script';

function FileForm(){
    const langs = {
        'English': {cod: 'en-US', loadingMsg: 'Loading...'}, 
        'Português': {cod: 'pt-BR', loadingMsg: 'Carregando...'}, 
        'Español': {cod: 'es-ES', loadingMsg: 'Cargando...'}, 
    }

    const [text, setText] = useState('');
    const [lang, setLang] = useState(langs['English']);    

    let speechLoop;

    function sendImage(){
        const formData = new FormData();
        const arquivo = document.getElementById("file").files[0];
        formData.append("arquivo", arquivo);  
        formData.append("lang", lang.cod);      
        
        showLoadingMsg();

        fetch('http://localhost:3333/recognize', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(res => {           
            setText(res.message);  
            showButtons();     
            startToSpeak(res.message);                      
        })
    }    

    function setSpeechLanguage(){
        let speech = new SpeechSynthesisUtterance();
        speech.lang = lang.cod;
    }
    
    function startToSpeak(txt){      
        let speech = new SpeechSynthesisUtterance();

        speech.lang = lang.cod;
        speech.text = txt;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;                

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech); 

        speech.onend = function(){
            clearInterval(speechLoop);
            // console.log('parou');
        }
        
        speechLoop = setInterval(continueToSpeak, 5000);
        continueToSpeak();       
    }
    
    function continueToSpeak(){
        // console.log('continuou');
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
    }
    
    function stop(e){
        window.speechSynthesis.cancel();
    }

    function replay(e){
        startToSpeak(text);
    }

    function showLoadingMsg(){
        setText(lang.loadingMsg);
        hideButtons();
    }

    return (
        <div className='container'>
            <div className='file-container'>
                <input type='file' id='file' onChange={loadImage}/>
                <select onChange={ e => { 
                    setLang( langs[e.target.value] );
                    setSpeechLanguage();
                } }>
                    <option>English</option>
                    <option>Português</option>
                    <option>Español</option>
                </select>
                <button onClick={sendImage}>Enviar</button>
                <img alt='img' id='img'></img>
            </div>
            <div className='text-container'>
                <p>{text}</p>
                <div>
                    <button id='btnReplay' onClick={ (e) => replay(e) }>Replay</button>
                    <button id='btnStop' onClick={ (e) => stop(e) }>Parar</button>
                </div>
                
            </div>          
        </div>
    )
}

export default FileForm;