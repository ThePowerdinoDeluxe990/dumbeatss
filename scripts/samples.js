const bateria = document.getElementById("bateria");
const piano = document.getElementById("piano");
const guitar = document.getElementById("guitar")
const bajo = document.getElementById("bajo")
const banjo = document.getElementById("banjo")
const stopaudio = document.getElementById("stopaudio")

//const // = document.getElementById("//")

const bateryAudio = new Audio("audio/baterysample.mp3");
const pianoAudio = new Audio("audio/pianosample.mp3")
const guitarAudio= new Audio("audio/guitarsample.mp3")
const bajoAudio = new Audio("audio/bajosample.mp3")
const banjoAudio = new Audio("audio/banjosample.mp3")

bateria.ondblclick= function(){
    bateryAudio.pause();
    bateryAudio.currentTime = 0
    //debug.textContent = ""
}

piano.ondblclick = function(){
    pianoAudio.pause();
    pianoAudio.currentTime = 0
    //.textContent = ""
}

guitar.ondblclick= function(){
    guitarAudio.pause()
    guitarAudio.currentTime=0
    //.textContent = ""
}
bajo.ondblclick= function(){
    bajoAudio.pause()
    bajoAudio.currentTime=0
    //.textContent = ""
}
banjo.ondblclick= function(){
    banjoAudio.pause()
    banjoAudio.currentTime=0
    //.textContent = ""
}


bateria.onclick=function(){

    //.textContent="bateria selected"
    bateryAudio.play();
    
}
piano.onclick=function(){

    //.textContent="piano selected"
    pianoAudio.play();

}

guitar.onclick=function(){
    //.textContent="guitar selected"
    guitarAudio.play()
}

bajo.onclick= function(){
    //.textContent="Bajo selecionado"
    bajoAudio.play()
}
banjo.onclick= function(){
    //.textContent="banjo selecionado"
    banjoAudio.play()
}

stopaudio.onclick = function(){
    bateryAudio.pause();
    bateryAudio.currentTime = 0

    pianoAudio.pause();
    pianoAudio.currentTime = 0

    guitarAudio.pause()
    guitarAudio.currentTime = 0

    bajoAudio.pause()
    bajoAudio.currentTime = 0

    banjoAudio.pause()
    banjoAudio.currentTime = 0

    //.textContent = ""
}

