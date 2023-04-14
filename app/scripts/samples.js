const bateria = document.getElementById("bateria");
const piano = document.getElementById("piano");
const guitar = document.getElementById("guitar")
const bajo = document.getElementById("bajo")
const banjo = document.getElementById("banjo")

const debug = document.getElementById("debug")

const bateryAudio = new Audio("audio/baterysample.mp3");
const pianoAudio = new Audio("audio/pianosample.mp3")
const guitarAudio= new Audio("audio/guitarsample.mp3")
const bajoAudio = new Audio("audio/bajosample.mp3")
const banjoAudio = new Audio("audio/banjosample.mp3")


bateria.onclick=function(){

    debug.textContent="bateria selected"
    bateryAudio.play();
    
}
piano.onclick=function(){

    debug.textContent="piano selected"
    pianoAudio.play();

}

guitar.onclick=function(){
    debug.textContent="guitar selected"
    guitarAudio.play()
}

bajo.onclick= function(){
    debug.textContent="Bajo selecionado"
    bajoAudio.play()
}
banjo.onclick= function(){
    debug.textContent="banjo selecionado"
    banjoAudio.play()
}