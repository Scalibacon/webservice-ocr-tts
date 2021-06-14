export function showButtons(){
    const btnStop = document.getElementById('btnStop');
    const btnReplay = document.getElementById('btnReplay');

    btnStop.style.display = 'block';
    btnReplay.style.display = 'block';
}

export function hideButtons(){
    const btnStop = document.getElementById('btnStop');
    const btnReplay = document.getElementById('btnReplay');

    btnStop.style.display = 'none';
    btnReplay.style.display = 'none';
}

export function loadImage(evt){
    let arquivo  = evt.target.files[0];
    let reader = new FileReader();

    if(!isImage(arquivo.name)){
        return;
    }

    reader.onload = function (e) {
        const img = document.getElementById('img');
        img.setAttribute('src', e.target.result)
    };

    reader.readAsDataURL(arquivo);
}

function isImage(filename){
    const ext = filename.split('.').pop().toLowerCase();
    
    if(ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'ico'){
        return true;
    }
    return false;
}