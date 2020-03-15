const form = document.querySelector('.form form');
const container = document.querySelector('.exibicao');
let colunas = [];

//Impedir a página de dar refresh
form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

//Remover grid
function remover(evento){
    container.removeChild(evento.target);
}

//Adicionar coluna
document.getElementById('adicionar').addEventListener('click', ()=>{
    const tam = document.getElementById('tamCol');

    let coluna;

    switch (Number(tam.value)){
        case 1:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-1');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 2:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-2');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 3:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-3');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 4:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-4');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 5:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-5');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 6:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-6');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 7:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-7');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 8:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-8');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 9:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-9');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 10:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-10');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 11:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-11');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        case 12:
            coluna = document.createElement('div');
            coluna.classList.add('coluna-12');
            colunas.push(coluna);
            container.appendChild(coluna);
        break;
        default:
            alert("Valor digitado é inválido");
        break;
    }

    tam.focus();
    tam.value = "";

    for(col of colunas){
        col.onclick = remover;
    }
});

//Adiconar alinhamento
function alinhar(item){
    switch (item){
        case "default":
            container.style.justifyContent = "space-between";
        break;
        case "centro":
            container.style.justifyContent = "center";
        break;
        case "esquerda":
            container.style.justifyContent = "flex-start";
        break;
        case "direita":
            container.style.justifyContent = "flex-end";
        break;
        default:
            container.style.justifyContent = "space-between";
        break;
    }
};

document.getElementById('limpar').addEventListener('click', ()=>{
    container.innerHTML = "";
    colunas = [];
});