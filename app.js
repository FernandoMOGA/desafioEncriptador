var buttonCifrar = document.querySelector('.buttonCifrar');
var consola = document.querySelector('.consolaTextarea');
var contenedorMensajes = document.querySelector('.mensajes');
var arreglo = [];
var arregloPrueba = []

buttonCifrar.addEventListener('click', valueConsola);

function valueConsola() {
    arregloPrueba = [...arreglo, consola.value];
    arreglo.push(consola.value);
    console.log(arregloPrueba);

    arregloPrueba.forEach(elemento => {
        var elemento = document.createElement('div');
        elemento.innerHTML = consola.value;
        contenedorMensajes.appendChild(elemento);
    })
    arregloPrueba = [];
    arreglo = [];
}