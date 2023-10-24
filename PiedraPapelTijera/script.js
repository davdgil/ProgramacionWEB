let seleccion = {
    PIEDRA: 1,
    PAPEL: 2,
    TIJERA: 3,
  };

let puntuacion1 = 0;
let puntuacion2= 0;

let opcionJugador1;
let opcionJugador2;

let img1
let img2

let jugador_1ID;
let jugador_2ID

const versus_0J = () => {
    eliminarTarjetas();
    eliminarBotones();
    eliminarFinDelJuegoMSG();

    const jogo = document.getElementById('juego');
     
    //creamos la fila
    var row = document.createElement('div');
    row.classList.add('row');

    //creamos col-6
    var col1 = document.createElement('div');
    col1.classList.add('col-6');

    //creamos otra col-6 para la IA
    const col2 = document.createElement('div');
    col2.classList.add('col-6');
     
    //creamos la tarjeta del Jugador 1
    let jugador1Tarjeta = crearTarjeta('IA', 'img/idle.png', puntuacion1)

    //creamos la tarjeta de la IA
    let jugadorIA_tarjeta = crearTarjeta('IA_2', 'img/idle.png', puntuacion2)

    //añadimos las tarjetas a sus respectivas columnas
    col1.appendChild(jugador1Tarjeta);  
    col2.appendChild(jugadorIA_tarjeta),

    //añadimos las columnas a la fila
    row.appendChild(col1)
    row.appendChild(col2)

    //añadimos la fila al contenedor
    jogo.appendChild(row);

    generarBotonesJugar('IA', 'IA_2', 0);
}


const versus_IA = () => {
    eliminarTarjetas();
    eliminarBotones();
    eliminarFinDelJuegoMSG();
    const jogo = document.getElementById('juego');
     
    //creamos la fila
    var row = document.createElement('div');
    row.classList.add('row');

    //creamos col-6
    var col1 = document.createElement('div');
    col1.classList.add('col-6');

    //creamos otra col-6 para la IA
    const col2 = document.createElement('div');
    col2.classList.add('col-6');
     
    //creamos la tarjeta del Jugador 1
    let jugador1Tarjeta = crearTarjeta('jugador 1', 'img/idle.png', puntuacion1)

    //creamos la tarjeta de la IA
    let jugadorIA_tarjeta = crearTarjeta('IA', 'img/idle.png', puntuacion2)

    //añadimos las tarjetas a sus respectivas columnas
    col1.appendChild(jugador1Tarjeta);  
    col2.appendChild(jugadorIA_tarjeta),

    //añadimos las columnas a la fila
    row.appendChild(col1)
    row.appendChild(col2)

    //añadimos la fila al contenedor
    jogo.appendChild(row);

    generarBotonesJugar('jugador 1', 'IA', 0);
}

const versus_2J = () => {
    eliminarTarjetas();
    eliminarBotones();
    eliminarFinDelJuegoMSG();

    const jogo = document.getElementById('juego');
     
    //creamos la fila
    var row = document.createElement('div');
    row.classList.add('row');

    //creamos col-6
    var col1 = document.createElement('div');
    col1.classList.add('col-6');

    //creamos otra col-6 para la IA
    const col2 = document.createElement('div');
    col2.classList.add('col-6');
     
    //creamos la tarjeta del Jugador 1
    let jugador1Tarjeta = crearTarjeta('jugador 1', 'img/idle.png', puntuacion1)

    //creamos la tarjeta de la IA
    let jugador2_tarjeta = crearTarjeta('jugador 2', 'img/idle.png', puntuacion2)

    //añadimos las tarjetas a sus respectivas columnas
    col1.appendChild(jugador1Tarjeta);  
    col2.appendChild(jugador2_tarjeta),

    //añadimos las columnas a la fila
    row.appendChild(col1)
    row.appendChild(col2)

    //añadimos la fila al contenedor
    jogo.appendChild(row);

    generarBotonesJugar('jugador 1', 'jugador 2', 0);
}


const crearTarjeta = (jugadorID, imagenURL, puntuacion) => {
    console.log(jugadorID)
    let jugador = document.createElement('div')
    jugador.classList.add('card', 'border-primary', 'm-3', 'w-50', 'h-100', 'mx-auto', 'my-auto')

    let contenido = `
        <div class="card-header">${jugadorID}</div>
        <div class="card-body text-left">
            <img src="${imagenURL}" class="card-img-top" alt="${jugadorID}" id="imagen_${jugadorID}">
            <p class="card-text">${jugadorID}: <span id="puntuacion_${jugadorID}">${puntuacion}</span></p>
        </div>
        <div class="card-footer text-center" id = "footer_${jugadorID}">
            
        </div>
    `;
    
    jugador.innerHTML = contenido;
    console.log(jugador)
    return jugador;
};
const generarBotonesJugar = (jugador1, jugador2, mod) => {
    eliminarBotones();
    let jugar;
    const posButton = document.getElementById('posButton');

    const row1 = document.createElement('div');
    row1.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col-12');

    const row2 = document.createElement('div');
    row2.classList.add('row');

    const col2 = document.createElement('div');
    col2.classList.add('col-12');

    if(mod == 0){
        jugar = document.createElement('button');
        jugar.classList.add('btn', 'btn-primary', 'w-100');  
        jugar.textContent = 'Jugar'; 
    }else if(mod == 1){
        jugar = document.createElement('button');
        jugar.classList.add('btn', 'btn-secondary', 'w-100');  
        jugar.textContent = 'Revancha'; 
    }else{
        console.log('Error')
    }
    

    const finalizar = document.createElement('button');
    finalizar.classList.add('btn', 'btn-danger', 'w-100');  
    finalizar.textContent = 'Finalizar';  

    col1.appendChild(jugar);
    col2.appendChild(finalizar);

    row1.appendChild(col1);
    row2.appendChild(col2);

    posButton.appendChild(row1);
    posButton.appendChild(row2);

    jugar.onclick = () => accionJugador(jugar.textContent, jugador1, jugador2);
    finalizar.onclick = () => accionJugador('Finalizar', jugador1, jugador2);
};



const accionJugador = (accion, jugador1ID, jugador2ID) => {
    
    
    const imagenID1 = `imagen_${jugador1ID}`; // ID de la imagen para el jugador
    const imagenID2 =  `imagen_${jugador2ID}`;
        
    const footerID1 = `footer_${jugador1ID}`
    const footerB1 = document.getElementById(footerID1)

    const footerID2 = `footer_${jugador2ID}`
    const footerB2 = document.getElementById(footerID2)
       
 
    
        switch (accion) {
            case 'Jugar':
                console.log('Jugadores: ',jugador1ID, jugador2ID)
                console.log(puntuacion1, puntuacion2)

                if(jugador1ID != 'IA'){
                    let buttons = `
                    <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${imagenID1}', '${1}')">Piedra</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${imagenID1}', '${1}')">Papel</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${imagenID1}', '${1}')">Tijera</button>
                    </div>
                
                    `;
                    
                   footerB1.innerHTML = buttons;
                }
                
                if(jugador2ID != 'IA' && jugador2ID != 'IA_2'){
                    let buttons = `
                    <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador2ID}','${imagenID2}', '${2}')">Piedra</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador2ID}','${imagenID2}', '${2}')">Papel</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador2ID}','${imagenID2}', '${2}')">Tijera</button>
                    </div>
                
                    `;
                    
                   footerB2.innerHTML = buttons;
                }

               if (jugador1ID != 'IA' && jugador2ID == 'IA'){
                let buttons = `
                    <div class="btn-group w-100" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary" onclick="vs_IA(this, '${jugador1ID}','${imagenID1}','${jugador2ID}', '${imagenID2}' )">Piedra</button>
                        <button type="button" class="btn btn-outline-primary" onclick="vs_IA(this, '${jugador1ID}','${imagenID1}', '${jugador2ID}', '${imagenID2}')">Papel</button>
                        <button type="button" class="btn btn-outline-primary" onclick="vs_IA(this, '${jugador1ID}','${imagenID1}', '${jugador2ID}', '${imagenID2}')">Tijera</button>
                    </div>
            
                `;
                
               footerB1.innerHTML = buttons;
               }

               if (jugador1ID == 'IA'){
                    IA_vs_IA(jugador1ID, jugador2ID, imagenID1, imagenID2)
                    console.log('IA VS IA')
               }
                
            
            break;
            case 'Revancha':
                eliminarFinDelJuegoMSG();
                opcionJugador1 = null;
                opcionJugador2 = null;


                img1.src = 'img/idle.png'
                img2.src = 'img/idle.png'

                console.log('Revancha entre', jugador1ID, jugador2ID)
                accionJugador('Jugar', jugador1ID, jugador2ID)
            break;

            case 'Finalizar':
               
                eliminarFinDelJuegoMSG();

                const fin = document.getElementById('finDelJuego');
            
                const h1 = document.createElement('h1');
                h1.id = 'titulo'
                if (puntuacion1 > puntuacion2){
                    h1.textContent = `¡Ganador: ${jugador1ID}`;

                }else if (puntuacion1 < puntuacion2){
                    h1.textContent = `¡Ganador: ${jugador2ID}`;

                }else{
                    h1.textContent = `EMPATE`;

                }
               
                const divRowCol = document.createElement('div');
                divRowCol.classList.add('row', 'col-12');
            
    
                divRowCol.appendChild(h1);

                fin.appendChild(divRowCol);
            

                img1.src = 'img/idle.png'
                img2.src = 'img/idle.png'

                puntuacion1 = 0;
                puntuacion2 = 0;

                opcionJugador1 = null;
                opcionJugador2 = null;

                modificarPuntuacion(jugador1ID, puntuacion1)
                modificarPuntuacion(jugador2ID, puntuacion2)

                console.log('FIN', puntuacion1, puntuacion2)

                generarBotonesJugar(jugador1ID, jugador2ID, 0)

                break;
         
        }
};




function buttonClicked(button, jugadorID, imagen,  turno) {

    let textoBoton = button.textContent;
    
        // Deshabilita solo los botones del jugador que hizo la elección
    const botones = button.parentElement.querySelectorAll(".btn.btn-outline-primary");

    botones.forEach((boton) => {
        boton.disabled = true;
    });
    
    if(turno == 1){
        img1 = document.getElementById(imagen);
        jugador_1ID = jugadorID;
        console.log(jugador_1ID)
        switch (textoBoton){
            case 'Piedra':             
                opcionJugador1 = seleccion.PIEDRA;
            break;
            case 'Papel': 
                opcionJugador1 = seleccion.PAPEL;
            break;
            case 'Tijera':
                opcionJugador1 = seleccion.TIJERA;
            break;
        }
    }else if(turno == 2){
        img2 = document.getElementById(imagen)
        jugador_2ID = jugadorID;

        switch (textoBoton){
            case 'Piedra':
                opcionJugador2 = seleccion.PIEDRA;
            break;
            case 'Papel':
                opcionJugador2 = seleccion.PAPEL;
            break;
            case 'Tijera':
                opcionJugador2 = seleccion.TIJERA;
            break;
        }
    }
    console.log('Opcion: ' ,opcionJugador1, opcionJugador2)


    calcularLogica(jugador_1ID, jugador_2ID);
    
}

const IA_vs_IA = (jugador1, jugador2, imagen1, imagen2) =>{
    img1 = document.getElementById(imagen1);
    img2 = document.getElementById(imagen2)

    const numeroAleatorio = Math.floor(Math.random() * 3);
    console.log('Num ale IA1', numeroAleatorio);

        switch (numeroAleatorio) {
            case 0:
                img1.src = "img/piedra.png";
                opcionJugador1 = seleccion.PIEDRA;
                break;
            case 1:
                img1.src = "img/papel.png";
                opcionJugador1 = seleccion.PAPEL;
                break;
            case 2:
                img1.src = "img/tijera.png";
                opcionJugador1 = seleccion.TIJERA;
                break;
        }

        const numeroAleatorio2 = Math.floor(Math.random() * 3);
        console.log('Num ale IA2',numeroAleatorio2);

        switch (numeroAleatorio2) {
            case 0:
                img2.src = "img/piedra.png";
                opcionJugador2 = seleccion.PIEDRA;
                break;
            case 1:
                img2.src = "img/papel.png";
                opcionJugador2 = seleccion.PAPEL;
                break;
            case 2:
                img2.src = "img/tijera.png";
                opcionJugador2 = seleccion.TIJERA;
                break;
        }

        calcularLogica(jugador1, jugador2)
}

//JUGADOR CONRA IA

const vs_IA = (button, jugador1, imagen1, jugador2, imagen2) =>{
    let textoBoton = button.textContent;
    
    const botones = button.parentElement.querySelectorAll(".btn.btn-outline-primary");

    botones.forEach((boton) => {
        boton.disabled = true;
    });

    img1 = document.getElementById(imagen1);
    img2 = document.getElementById(imagen2)

        switch (textoBoton){
            case 'Piedra':  
                img1.src = "img/piedra.png";           
                opcionJugador1 = seleccion.PIEDRA;
            break;
            case 'Papel': 
                img1.src = "img/papel.png";
                opcionJugador1 = seleccion.PAPEL;
            break;
            case 'Tijera':
                img1.src = "img/tijera.png";
                opcionJugador1 = seleccion.TIJERA;
            break;
        }

        const numeroAleatorio = Math.floor(Math.random() * 3);
        console.log(numeroAleatorio);

        switch (numeroAleatorio) {
            case 0:
                img2.src = "img/piedra.png";
                opcionJugador2 = seleccion.PIEDRA;
                break;
            case 1:
                img2.src = "img/papel.png";
                opcionJugador2 = seleccion.PAPEL;
                break;
            case 2:
                img2.src = "img/tijera.png";
                opcionJugador2 = seleccion.TIJERA;
                break;
        }

        calcularLogica(jugador1, jugador2);
}

const calcularLogica = (jugadorID1, jugadorID2) => {
    if(opcionJugador1 && opcionJugador2 != null){

        eliminarBotones();
        generarBotonesJugar(jugadorID1, jugadorID2, 1);

         //Logica del juego
        if (opcionJugador1 == opcionJugador2){
            switch(opcionJugador1){
                case seleccion.PIEDRA:
                    img1.src = 'img/piedra.png'
                    img2.src = 'img/piedra.png'
                break;
                case seleccion.PAPEL:
                    img1.src = 'img/papel.png'
                    img2.src = 'img/papel.png'
                break;
                case seleccion.TIJERA:
                    img1.src = 'img/tijera.png'
                    img2.src = 'img/tijera.png'
                break;
            }
        }else if (opcionJugador1 == seleccion.PIEDRA && opcionJugador2 == seleccion.PAPEL){
            img1.src = 'img/piedra.png'
            img2.src = 'img/papel_win.png'

            puntuacion2++;
            modificarPuntuacion(jugadorID2, puntuacion2)
            

        }else if(opcionJugador1 == seleccion.PIEDRA && opcionJugador2 == seleccion.TIJERA){
            img1.src = 'img/piedra_win.png';
            img2.src = 'img/tijera.png';
            
            puntuacion1++;
            modificarPuntuacion(jugadorID1, puntuacion1)
            console.log('Gana jugador 1')

        }else if(opcionJugador1 == seleccion.PAPEL && opcionJugador2 == seleccion.PIEDRA){
            img1.src = 'img/papel_win.png';
            img2.src = 'img/piedra.png';
            
            puntuacion1++;
            modificarPuntuacion(jugadorID1, puntuacion1)
            console.log('Gana jugador 1')

        }else if (opcionJugador1 == seleccion.PAPEL && opcionJugador2 == seleccion.TIJERA){
            img1.src = 'img/papel.png'
            img2.src = 'img/tijera_win.png'

            puntuacion2++;
            modificarPuntuacion(jugadorID2, puntuacion2)
            console.log('Gana jugador 2')
            
        }else if (opcionJugador1 == seleccion.TIJERA && opcionJugador2 == seleccion.PIEDRA){
            img1.src = 'img/tijera.png'
            img2.src = 'img/piedra_win.png'

            puntuacion2++;
            modificarPuntuacion(jugadorID2, puntuacion2)
            console.log('Gana jugador 2')
        }else if (opcionJugador1 == seleccion.TIJERA && opcionJugador2 == seleccion.PAPEL){
            img1.src = 'img/tijera_win.png';
            img2.src = 'img/papel.png';
            
            puntuacion1++;
            modificarPuntuacion(jugadorID1, puntuacion1)
            console.log('Gana jugador 1')
        }


    }
}

const modificarPuntuacion = (jugadorID, nuevaPuntuacion) => {
    const puntuacionID = `puntuacion_${jugadorID}`;
    const puntuacionElement = document.getElementById(puntuacionID);
    const jugarButton = document.getElementById('jugarButton');
    if (puntuacionElement) {
        puntuacionElement.textContent = nuevaPuntuacion;
    }


};


const eliminarFinDelJuegoMSG = () => {
    const eliminarMSG = document.getElementById('finDelJuego')

    if (eliminarMSG.hasChildNodes()){
        while(eliminarMSG.firstChild){
            eliminarMSG.removeChild(eliminarMSG.firstChild);
        }
        console.log('Mensaje eliminado')
    }
}


const eliminarTarjetas = () => {
    const contenedorTarjetas = document.getElementById('juego'); // Reemplaza 'juego' con el ID de tu contenedor

    // Verifica si hay tarjetas antes de intentar eliminarlas
    if (contenedorTarjetas.hasChildNodes()) {
        // Elimina cada tarjeta del contenedor
        while (contenedorTarjetas.firstChild) {
            contenedorTarjetas.removeChild(contenedorTarjetas.firstChild);
        }
        console.log('Tarjetas eliminadas.');
    } else {
        console.log('No hay tarjetas para eliminar.');
    }
};

const eliminarBotones = () =>{
    const contenedorBotones = document.getElementById('posButton');

    if (contenedorBotones.hasChildNodes()){
        while (contenedorBotones.firstChild){
            contenedorBotones.removeChild(contenedorBotones.firstChild);
        }
        console.log("Botones eliminados")
    }
}

