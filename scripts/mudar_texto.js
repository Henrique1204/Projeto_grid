const sub_titulos = document.querySelectorAll('.sub_titulo');

function mudarTexto(){
    let numColum;

    if(window.innerWidth > 1319){
        numColum = 80;
        for(i = 0; i < sub_titulos.length; i++){
            numColum += i < 1 ? 0 : 110;
            sub_titulos[i].innerText = `Coluna ${i + 1} - ${numColum}px`;
        }
    }else if(window.innerWidth > 979){
        numColum = 60
        for(i = 0; i < sub_titulos.length; i++){
            numColum += i < 1 ? 0 : 80;
            sub_titulos[i].innerText = `Coluna ${i + 1} - ${numColum}px`;
        }
    }else if(window.innerWidth > 739){
        numColum = 40
        for(i = 0; i < sub_titulos.length; i++){
            numColum += i < 1 ? 0 : 60;
            sub_titulos[i].innerText = `Coluna ${i + 1} - ${numColum}px`;
        }
    }else{
        for(i = 0; i < sub_titulos.length; i++){
            sub_titulos[i].innerText = `Coluna ${i + 1} - 300px`;
        }
    }
}

window.onload = mudarTexto;