const subir = $('#subir');

$(window).on('load', ()=>{
    $(subir).fadeOut();
})

$(window).scroll(function(){
    let minhaPosicao = $(this).scrollTop();
    if(minhaPosicao < 869){
        $(subir).fadeOut(500);
    }else{
        $(subir).fadeIn(500);
    };
});

function rolar(){
    //Rolar suavemente
    let seletor = $(this).attr('href');
    let posicao = $(seletor).offset().top;
    if(window.innerWidth < 740){
        $('HTML, body').animate({scrollTop: posicao - 150}, 1500);
    }
    else{
        $('HTML, body').animate({scrollTop: posicao - 80}, 1500);
    }

    //Fechar menu
    abrir_menu();
};

for(link of links){
   link.onclick = rolar;
}   

subir.on('click', function(){
    $('HTML, body').animate({scrollTop: 0}, 1000);
});