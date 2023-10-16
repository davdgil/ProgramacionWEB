let puntuacion = 0;
let identificador =0;

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
    let jugador1Tarjeta = crearTarjeta('jugador 1', 'img/idle.png', puntuacion, 1)

    //creamos la tarjeta de la IA
    let jugadorIA_tarjeta = crearTarjeta('IA', 'img/idle.png', puntuacion, 2)

    //añadimos las tarjetas a sus respectivas columnas
    col1.appendChild(jugador1Tarjeta);  
    col2.appendChild(jugadorIA_tarjeta),

    //añadimos las columnas a la fila
    row.appendChild(col1)
    row.appendChild(col2)

    //añadimos la fila al contenedor
    jogo.appendChild(row);

    generarBotonesJugar('jugador 1');
}

const generarBotonesJugar = () => {
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

    jugar.onclick = () => accionJugador('jugar', 'Jugador 1');
};




const crearTarjeta = (jugadorID, imagenURL, puntuacion) => {
    let jugador = document.createElement('div')
    jugador.classList.add('card', 'border-primary', 'm-3', 'w-50', 'h-100', 'mx-auto', 'my-auto')

    let contenido = `
        <div class="card-header">${jugadorID}</div>
        <div class="card-body text-left">
            <img src="${imagenURL}" class="card-img-top" alt="${jugadorID}" id="imagen_${jugadorID}">
            <p class="card-text">${jugadorID}: <span id="puntuacion_${jugadorID}">${puntuacion}</span></p>
        </div>
    `;

    jugador.innerHTML = contenido;

    return jugador;
};


const accionJugador = (accion, jugadorID) => {
    const imagenID = `imagen_${jugadorID}`; // ID de la imagen para el jugador
    const imagen = document.getElementById(imagenID); // Obtener la imagen por su ID

    if (imagen) {
        // El elemento existe en el DOM, puedes acceder a él y modificar sus propiedades
        switch (accion) {
            case 'jugar':
                const userInput = prompt(`Ingrese su acción, ${jugadorID}: piedra, papel o tijera`);
                if (userInput === 'piedra') {
                    imagen.src = 'img/piedra.png'; // Cambiar la fuente de la imagen
                }
                // Resto del código para otras acciones...
                break;

            // Otros casos y acciones...

            default:
                console.error('Acción no válida.');
        }
    } else {
        console.error(`No se encontró un elemento con el id '${imagenID}'.`);
    }
};





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



