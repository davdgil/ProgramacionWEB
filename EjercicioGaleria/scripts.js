let cont = 0;
let img = 0;
const fotos = ["images/moto01.jpeg", "images/moto02.jpeg", "images/moto03.jpeg"]


const prev = () =>{
    cont --;
    if(cont < 0){
        cont = fotos.length -1;

    }

    document.getElementById("image").src = fotos[cont];
};

const next = () =>{
    cont ++
    if(cont >= fotos.length){
        cont = 0;
    }

    document.getElementById("image").src = fotos[cont];
}



