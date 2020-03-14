const menu_sanduiche = document.querySelector('.menu_sanduiche');
const barrinha = document.getElementsByClassName('barrinha');
const menu = document.getElementsByClassName('menu_links');
const links = document.getElementsByClassName('links');

function abrir_menu(){

    if(menu_sanduiche.innerHTML == 'X'){
        menu_sanduiche.innerHTML = '<div class="barrinha"></div><div class="barrinha"></div><div class="barrinha"></div>';
        menu[0].style.top = '-700px';
        menu[0].style.opacity = '0';
    }else{
        menu_sanduiche.innerHTML = 'X';
        menu[0].style.top = '-31px';
        menu[0].style.opacity = '1';
    }
}

menu_sanduiche.onclick = abrir_menu;

for(link of links){
    link.onclick = abrir_menu;
}
