const menuBtn = document.querySelector('#menu');
const menu = document.getElementsByClassName('menu_links');
const links = document.getElementsByClassName('links');
let contaClique = 1;

function abrir_menu(){

    if(contaClique == 0){
        menuBtn.style.color = '#333';
        menuBtn.style.backgroundColor = '#bbb';
        menu[0].style.top = '-700px';
        menu[0].style.opacity = '0';
        contaClique = 1;
    }else{
        menuBtn.style.color = '#bbb';
        menuBtn.style.backgroundColor = '#333';
        menu[0].style.top = '-31px';
        menu[0].style.opacity = '1';
        contaClique = 0;
    }
}

menuBtn.onclick = abrir_menu;