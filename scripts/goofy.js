const coche = document.getElementById("coche")
const pato = document.getElementById("pato")
const oldspice = document.getElementById("oldspice")
const metal = document.getElementById("metal")
const oldcoche = document.getElementById("oldcoche")
const pedo = document.getElementById("pedo")

let cocheaudio = new Audio("audio/coche.mp3")
let patoaudio = new Audio("audio/pato.mp3")
let oldspiceaudio = new Audio("audio/oldspice.mp3")
let metalaudio = new Audio("audio/metalpipe.mp3")
let oldcocheaudio= new Audio("audio/cocheviejo.mp3")
let pedoaudio = new Audio("audio/fart.mp3")

coche.onclick=function(){
    cocheaudio.play()
}

pato.onclick=function(){
    patoaudio.play()
}

oldspice.onclick=function(){
    oldspiceaudio.play()
}

metal.onclick=function(){
    metalaudio.play()
}

oldcoche.onclick=function(){
    oldcocheaudio.play()
}

pedo.onclick=function(){
    pedoaudio.play()
}