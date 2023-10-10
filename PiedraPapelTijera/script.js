

const versus_IA = () => {
    const jogo = document.getElementById('juego');
     
    const jugador1 = document.createElement('div');
    jugador1.classList.add('jugador1', 'm-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Título de la tarjeta';  // Título de la tarjeta

    const cardContent = document.createElement('p');
    cardContent.classList.add('card-text');
    cardContent.textContent = 'Contenido de la tarjeta';  // Contenido de la tarjeta

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);

    jugador1.appendChild(cardBody);  // Se cambió card a jugador1

    jogo.appendChild(jugador1);
}
