const seleccion = {
    PIEDRA: 0,
    PAPEL: 1,
    TIJERA: 2,
  };

let puntuacion1 = 0;
let puntuacion2= 0;

const versus_IA = () => {
    eliminarTarjetas();

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

    generarBotonesJugar('jugador 1', 'IA');
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
        <div class="card-footer" id = "footer_${jugadorID}">
            
        </div>
    `;
    
    jugador.innerHTML = contenido;
    console.log(jugador)
    return jugador;
};
const generarBotonesJugar = (jugador1, jugador2) => {
    const posButton = document.getElementById('posButton');

    const row1 = document.createElement('div');
    row1.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col-12');

    const row2 = document.createElement('div');
    row2.classList.add('row');

    const col2 = document.createElement('div');
    col2.classList.add('col-12');

    const jugar = document.createElement('button');
    jugar.classList.add('btn', 'btn-primary', 'w-100');  
    jugar.textContent = 'Jugar'; 

    const finalizar = document.createElement('button');
    finalizar.classList.add('btn', 'btn-danger', 'w-100');  
    finalizar.textContent = 'Finalizar';  

    col1.appendChild(jugar);
    col2.appendChild(finalizar);

    row1.appendChild(col1);
    row2.appendChild(col2);

    posButton.appendChild(row1);
    posButton.appendChild(row2);

    jugar.onclick = () => accionJugador('jugar', jugador1, jugador2);
};



const accionJugador = (accion, jugador1ID, jugador2ID) => {
    
    
    const imagenID1 = `imagen_${jugador1ID}`; // ID de la imagen para el jugador
    const imagenID2 =  `imagen_${jugador2ID}`;
        
    const footerID = `footer_${jugador1ID}`
    const footerB = document.getElementById(footerID)
       
 
    
        // El elemento existe en el DOM, puedes acceder a él y modificar sus propiedades
        switch (accion) {
            case 'jugar':
                console.log(jugador1ID, jugador2ID)

                if(jugador1ID != 'IA'){
                    let buttons = `
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${jugador2ID}', '${imagenID1}', '${imagenID2}')">Piedra</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${jugador2ID}', '${imagenID1}', '${imagenID2}')">Papel</button>
                        <button type="button" class="btn btn-outline-primary" onclick="buttonClicked(this, '${jugador1ID}','${jugador2ID}', '${imagenID1}', '${imagenID2}')">Tijera</button>
                    </div>
                
                    `;
                    
                   footerB.innerHTML = buttons;
                }
                
                
            
            break
            
            
           
        }
};




function buttonClicked(button, jugador1ID, jugador2ID,  imagen1, imagen2) {
    const textoBoton = button.textContent;
    
    console.log(`Jugador: ${jugador1ID} ha pulsado el botón: ${textoBoton}`);
    
     // cogemos todos los botontes del grupo
     const botones = document.querySelectorAll(".btn.btn-outline-primary");

     // Deshabilita todos los botones del grupo
     botones.forEach((boton) => {
         boton.disabled = true;
     });
     
     let img1 = document.getElementById(imagen1);
     let img2 = document.getElementById(imagen2)

     let jugador1opcion;
     let jugador2opcion;

        switch(textoBoton){
            case 'Piedra':
                img1.src = "img/piedra.png"
                jugador1opcion = PIEDRA;
            break;
            case 'Papel':
                img1.src = "img/papel.png"
                jugador1opcion = PAPEL;
            break;
            case 'Tijera':
                img1.src = "img/tijera.png"
                jugador1opcion = TIJERA;
            break;
        }
        
     
     if(jugador2ID == 'IA'){
        const numeroAleatorio = Math.random() * 3;
        const redondeo = Math.floor(numeroAleatorio);
        console.log(redondeo)

        switch(redondeo){
            case 0:
                img2.src = "img/piedra.png"
                jugador2opcion = PIEDRA;
            break;
            case 1:
                img2.src = "img/papel.png"
                jugador2opcion = PAPEL;
            break;
            case 2:
                img1.src = "img/tijera.png"
                jugador2opcion = TIJERA
            break;

        }
        
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



