var buttonCifrar = document.querySelector('.buttonCifrar');
var consola = document.querySelector('.consolaTextarea');
var contenedorMensajes = document.querySelector('.mensajes');
var arreglo = [];
var arregloPrueba = [];

buttonCifrar.addEventListener('click', valueConsola);

function valueConsola() {
    arregloPrueba = [...arreglo, consola.value];
    arreglo.push(consola.value);

    arregloPrueba.forEach(elementoTexto => {
        var id = Date.now();

        // Crear el contenedor principal con un id único
        var contenedor = document.createElement('div');
        contenedor.id = 'contenedor_' + id;
        contenedor.classList.add('mensaje');

        var parrafo = document.createElement('p');
        parrafo.textContent = elementoTexto;
        contenedor.appendChild(parrafo);

        var enlaceBorrar = document.createElement('p');
        enlaceBorrar.classList.add('mensajeBorrar');
        enlaceBorrar.textContent = 'Borrar';
        enlaceBorrar.addEventListener('click', function () {
            borrarElemento(id);
        });
        contenedor.appendChild(enlaceBorrar);
        contenedorMensajes.appendChild(contenedor);
    });

    arregloPrueba = [];
    arreglo = [];
}

function borrarElemento(id) {
    var contenedor = document.getElementById('contenedor_' + id);
    if (contenedor) {
        contenedor.parentNode.removeChild(contenedor);
    }
}