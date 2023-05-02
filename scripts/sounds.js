const gota = document.getElementById("gota")
const campana = document.getElementById("campana")
const tambor = document.getElementById("tambor")
const slap= document.getElementById("slap")
const cuerda= document.getElementById("cuerda")
const laser=document.getElementById("laser")

//const //debugtext = document.getElementById("debug")

let gotaudio= new Audio ("audio/watersound.mp3")
let campanaudio= new Audio ("audio/Cowbellsound.mp3")
let tamboraudio= new Audio ("audio/tamborsound.mp3")
let slapaudio= new Audio("audio/slapaudio.mp3")
let cuerdaudio = new Audio("audio/guitaronesound.mp3")
let laseraudio= new Audio("audio/laser.mp3")

gota.onclick = function(){
    gotaudio.play()
    //.textContent="gota"
}

campana.onclick= function(){
    campanaudio.play()
    //.textContent="campana"
}

tambor.onclick=function(){
    tamboraudio.play()
    //.textContent="tambor"
}
tambor.ondblclick=function(){
    tamboraudio.pause()
    tamboraudio.currentTime=0
    //.textContent=" "
}

slap.onclick=function(){
    slapaudio.play()
    //.textContent="slap"
}

cuerda.onclick=function(){
    cuerdaudio.play()
}

laser.onclick=function(){
    laseraudio.play()
}

//add event listener si quieres hacer mas cosas
//Voy a seguir usando on click