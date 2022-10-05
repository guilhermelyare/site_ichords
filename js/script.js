//Variaveis do slider de videos
const video_1 = document.getElementById("video1");
const video_2 = document.getElementById("video2");
const video_3 = document.getElementById("video3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const pass_btn = document.getElementById("second");
const back_btn = document.getElementById("first");
const play_btn = document.getElementById("img_play");
const muted = document.getElementById("muted");
const speaker = document.getElementById("speaker");
var current = 1;

//Variaveis para a animação do conteudo
var media = window.matchMedia("(max-width: 992px)");
var media2 = window.matchMedia("(max-width: 600px)");
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

//Variaveis do pop-up
const bg_phone_pop = document.getElementById("bg_phone_pop-up");
const VideoTarget = document.querySelectorAll('#Video_pop-up');
const pop_up =  document.getElementById("pop-up");
const speaker_pop = document.getElementById('speaker_pop-up');
const muted_pop = document.getElementById('muted_pop-up');
var close_video = 0;

//Variaveis para auxiliar na animação do acervo
const CoverTarget = document.querySelectorAll('#cover');
const AcervoBtnTarget = document.querySelectorAll('#acervo_btn');
var hover = 0;
var out = 0;

// Variveis para o carrousel do acervo
const CoverCarouselTarget = document.querySelectorAll('#cover_carousel');
const CarouselBtnTarget = document.querySelectorAll('#btn_carousel');
var hover_carousel;
var out_carousel;
const first_cover = document.getElementById('first_cover');
var pass=-23.5;
var back=0;

// Funções para animção dos conteudos
function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);//Distanca da barra de sroll para o topo da pagina

    target.forEach(function(element){
        if((windowTop) > element.offsetTop){//distancia de cada elemento que tem a data-anime para o topo da pagina
            element.classList.add(animationClass);
            video_1.muted=true;
            video_2.muted=true;
            video_3.muted=true;
            speaker.style.display = "none";
            muted.style.display = "inline";
            muted.style.transition = "all 400ms";
        }else{
            element.classList.remove(animationClass);
        }
    })

}

animeScroll();

window.addEventListener('scroll', function(){
    animeScroll();
})

//Função para começar video automaticamente ao iniciar a página
function first() { 
    executar1();
    speaker.style.display = "none";
    muted.style.display = "inline";
}


//Funçoes para execução dos videos em slider
function executar1(){
    btn1.style.backgroundColor = '#ffffff';
    btn2.style.backgroundColor = '#ffffff00';
    btn3.style.backgroundColor = '#ffffff00';
    video_1.style.marginLeft = "0px";
    video_1.style.transition = "all 600ms";
    play_btn.style.display = "none";
    pass_btn.style.display = "inline";
    back_btn.style.display = "none";
    video_1.play();
    video_2.pause();
    video_3.pause();
    current = 1;
}

function executar2(){
    video_1.pause();
    video_2.play();
    video_3.pause();
    btn1.style.backgroundColor = '#ffffff00';
    btn2.style.backgroundColor = '#ffffff';
    btn3.style.backgroundColor = '#ffffff00';
    if(media.matches){
        video_1.style.marginLeft = "-281.25px";
    }else{
        video_1.style.marginLeft = "-257.625px";
    }
    video_1.style.transition = "all 600ms";
    play_btn.style.display = "none";
    pass_btn.style.display = "inline";
    back_btn.style.display = "inline";
    current = 2;
}

function executar3(){
    video_1.pause();
    video_2.pause();
    video_3.play();
    btn1.style.backgroundColor = '#ffffff00';
    btn2.style.backgroundColor = '#ffffff00';
    btn3.style.backgroundColor = '#ffffff';
    if(media.matches){
        video_1.style.marginLeft = "-562.5px";
    }else{
        video_1.style.marginLeft = "-515.25px";
    }
    video_1.style.transition = "all 600ms";
    play_btn.style.display = "none";
    pass_btn.style.display = "none";
    back_btn.style.display = "inline";
    current = 3;
}

video_1.onended = function() {
    executar2();
};

video_2.onended = function() {
    executar3();
};

video_3.onended = function() {
    executar1();
};

//Funções dos botões do slider de videos
function pass_video(){
    if (current==1){
        executar2();
    }
    else if  (current==2){
        executar3();
    }
}

function back_video(){
    if (current==2){
        executar1();
    }
    else if (current==3){
        executar2();
    }
}

function play_pause(){
    if (current==1){
        if(video_1.paused){
            executar1();
        }else{
            video_1.pause();
            play_btn.style.display = "inline";
        }
    }
    else if (current==2){
        if(video_2.paused){
            executar2();
        }else{
            video_2.pause();
            play_btn.style.display = "inline";
        }
    }
    else if (current==3){
        if(video_3.paused){
            executar3();
        }else{
            video_3.pause();
            play_btn.style.display = "inline";
        }
    }
}

function mute(){

    if (video_1.muted==true){
        video_1.muted=false;
        video_2.muted=false;
        video_3.muted=false;
        muted.style.display = "none";
        speaker.style.display = "inline";
        speaker.style.transition = "all 400ms";
    }
    else{
        video_1.muted=true;
        video_2.muted=true;
        video_3.muted=true;
        speaker.style.display = "none";
        muted.style.display = "inline";
        muted.style.transition = "all 400ms";
    }

}


//Funções para o pop-up
function close_pop(){
    pop_up.style.display ="none";
    VideoTarget[close_video].style.display = "none";
    VideoTarget[close_video].pause();
    reloadScrollBars();
}


function pop(position){
    close_video = position;
    unloadScrollBars();
    
    if(media.matches){
        bg_phone_pop.style.display = "none";
    }else{
        bg_phone_pop.style.display = "flex";
    }

    if (media2.matches){
        VideoTarget[position].play();
        VideoTarget[position].muted = false;
        speaker_pop.style.display = "none";
        muted_pop.style.display = "none";
    }else{
        VideoTarget[position].style.display = "flex";
        pop_up.style.display ="flex";
        VideoTarget[position].play();
        VideoTarget[position].muted = false;
        speaker_pop.style.display = "inline";
        muted_pop.style.display = "none";
    }
    VideoTarget[position].onended = function(){
        close_pop();
    }
}

function mute_pop(){
    if (VideoTarget[close_video].muted == true){
        VideoTarget[close_video].muted = false;
        speaker_pop.style.display = "inline";
        muted_pop.style.display = "none";
        muted_pop.style.transition = "all 400ms";
    }else{
        VideoTarget[close_video].muted = true;
        speaker_pop.style.display = "none";
        muted_pop.style.display = "inline";
        muted_pop.style.transition = "all 400ms";
    }
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; 
}

//Funções para animação do acervo
function hover_album(hover){
    CoverTarget.forEach(function(element){
        if(element == CoverTarget[hover]){
            element.style.opacity = "1";
            element.style.cursor = "pointer";
            AcervoBtnTarget[hover].style.opacity = "1";
            AcervoBtnTarget[hover].style.cursor = "pointer";
        }else{
            element.style.opacity = "0.5";
        }
    })
    
}

function hoverOut_album(out){
    CoverTarget.forEach(function(element){
        element.style.opacity = "1";
    });
    AcervoBtnTarget.forEach(function(element){
        element.style.opacity = "0.3";
    });
}

// Funções para o carrousel do acervo
function hover_carousel(hover_carousel){
    CoverCarouselTarget.forEach(function(element){
        if(element == CoverCarouselTarget[hover_carousel]){
            element.style.opacity = "1";
            element.style.cursor = "pointer";
            CarouselBtnTarget[hover_carousel].style.opacity = "1";
            CarouselBtnTarget[hover_carousel].style.cursor = "pointer";
        }else{
            element.style.opacity = "0.5";
        }
    })
    
}

function hoverOut_carousel(out_carousel){
    CoverCarouselTarget.forEach(function(element){
        element.style.opacity = "1";
    });
    CarouselBtnTarget.forEach(function(element){
        element.style.opacity = "0.3";
    });
}

function pass_carousel(){
    first_cover.style.marginLeft = pass+"vw";
    if (pass==-117.5){
        pass = pass+23.5;
    }
    pass = pass-23.5;
    back = pass+23.5;
}

function back_carousel(){
    if(back==0){
        back = back-23.5;
        pass = pass-23.5;
    }
    back = back+23.5;
    pass = pass+23.5;
    if(pass==-94){
        back=pass;
    }
    first_cover.style.marginLeft = back+"vw";
}