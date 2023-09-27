const add = () => {
    const texto = document.getElementById('text1').value;

    const tareaContainer = document.createElement('div');

    var label = document.createElement('label');
    label.textContent = texto;

    var completarBtn = document.createElement('button');
    completarBtn.textContent = 'Completar';

    var eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';

    tareaContainer.appendChild(label);
    tareaContainer.appendChild(completarBtn);
    tareaContainer.appendChild(eliminarBtn);

    eliminarBtn.addEventListener('click', () => {
        tareaContainer.remove()
    })

    // Agrega la tarea al contenedorLabel
    var contenedor = document.getElementById('labelContainer');
    contenedor.appendChild(tareaContainer);
}
