let button = document.getElementById("searchbtn")
let UNDO = document.getElementById("delete")
let search = document.getElementById("audiosearch").value


let defaultsearch = document.getElementById("default")
let samplestext = document.getElementById("samples")
let soundstext = document.getElementById("sounds")

let searchresult = search.toLowerCase()

button.onclick = function(){
    
    let search = document.getElementById("audiosearch").value
    let searchresult = search.toLowerCase()

    switch(searchresult){
        case "loops":
            samplestext.style.backgroundColor = "lightgreen"
            soundstext.style.backgroundColor=""
            defaultsearch.textContent = " "
        break;

        case "sonidos":
            soundstext.style.backgroundColor="lightgreen"
            samplestext.style.backgroundColor=""
            defaultsearch.textContent = " "

        break;
        
        default:
            defaultsearch.textContent="No se ha encontrado"
            samplestext.style.backgroundColor = ""
            soundstext.style.backgroundColor= ""
            
        break;
    }


}

UNDO.onclick= function(){
        samplestext.style.backgroundColor = ""
        soundstext.style.backgroundColor=""
        //document.getElementById("bateria").style.backgroundColor = ""
        defaultsearch.textContent=" "
}


