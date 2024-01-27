var buttonCifrar = document.querySelector('.buttonCifrar');
var buttonDecifrar = document.querySelector('.buttonDecifrar');
var consola = document.querySelector('.consolaTextarea');
var contenedorMensajes = document.querySelector('.mensajes');
var menu = document.querySelector('.icon-menu');
var arreglo = [];
var arregloPrueba = [];

buttonCifrar.addEventListener('click', valueConsola);
buttonDecifrar.addEventListener('click', valueConsola);

function valueConsola(e) {
    var valorConsola = consola.value.split(' ').join('');
    if (valorConsola === "") {
        alert("No puedes mandar mensajes vacíos");
        return;
    }

    function tieneCaracteresEspeciales(texto) {
        return /^[a-zA-Z0-9 ]*$/.test(texto);
    }

    if (!tieneCaracteresEspeciales(consola.value)) {
        alert("El mensaje no puede contener caracteres especiales");
        return;
    }

    function tieneMayusculas(texto) {
        return /[A-Z]/.test(texto);
    }

    if (tieneMayusculas(consola.value)) {
        alert("No puede contener letras mayúsculas");
        return;
    }

    var mensajeUso;
    if (e.target.classList.contains("buttonCifrar")) {
        mensajeUso = modificarCadena(consola.value);
    } else if (e.target.classList.contains("buttonDecifrar")) {
        mensajeUso = decodificarCadena(consola.value);
    }

    arregloPrueba = [...arreglo, mensajeUso];
    arreglo.push(mensajeUso);

    arregloPrueba.forEach(elementoTexto => {
        var id = Date.now();
        var contenedor = document.createElement('div');
        contenedor.id = 'contenedor_' + id;
        contenedor.classList.add('mensaje');

        var parrafo = document.createElement('p');
        parrafo.textContent = elementoTexto;
        contenedor.appendChild(parrafo);

        var newDiv = document.createElement('div');
        contenedor.appendChild(newDiv);

        var enlaceBorrar = document.createElement('p');
        enlaceBorrar.classList.add('mensajeBorrar');
        enlaceBorrar.textContent = 'Borrar';
        enlaceBorrar.addEventListener('click', function () {
            borrarElemento(id);
        });

        var enlaceCopiar = document.createElement('p');
        enlaceCopiar.classList.add('mensajeCopiar');
        enlaceCopiar.textContent = 'Copiar';

        newDiv.appendChild(enlaceBorrar);
        newDiv.appendChild(enlaceCopiar);
        contenedorMensajes.appendChild(contenedor);
    });

    arregloPrueba = [];
    arreglo = [];
    consola.value = "";
}

function borrarElemento(id) {
    var contenedor = document.getElementById('contenedor_' + id);
    if (contenedor) {
        contenedor.parentNode.removeChild(contenedor);
    }
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('mensajeCopiar')) {
        var contenedorMensaje = e.target.closest('.mensaje');
        if (contenedorMensaje) {
            var textoACopiar = contenedorMensaje.querySelector('p').textContent;

            var textareaTemporal = document.createElement('textarea');
            textareaTemporal.value = textoACopiar;
            document.body.appendChild(textareaTemporal);

            textareaTemporal.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('No se pudo copiar al portapapeles:', err);
            } finally {
                document.body.removeChild(textareaTemporal);
            }
        }
    }
});

var buttonReglas = document.querySelector('.reglasTitle');
var reglasContenedor = document.querySelector('.reglasContenido');
menu.addEventListener('click', buMenu);
buttonReglas.addEventListener('click', mostrarReglas);

function buMenu() {
    burgerMenu.classList.toggle('display');
    reglasContenedor.classList.add('display');
}

function mostrarReglas() {
    reglasContenedor.classList.toggle('display');
    burgerMenu.classList.add('display');
}

var burgerMenu = document.querySelector('.burgerMenu');
burgerMenu.addEventListener('mouseleave', saliste);
reglasContenedor.addEventListener('mouseleave', saliste);

function saliste(e) {
    e.target.classList.add('display');
}

function modificarCadena(inputString) {
    let nuevoString = inputString.replace(/e/g, 'enter');
    nuevoString = nuevoString.replace(/i/g, 'imes');
    nuevoString = nuevoString.replace(/a/g, 'ai');
    nuevoString = nuevoString.replace(/o/g, 'ober');
    nuevoString = nuevoString.replace(/u/g, 'ufat');
    return nuevoString;
}

function decodificarCadena(inputString) {
    let nuevoString = inputString.replace(/enter/g, 'e');
    nuevoString = nuevoString.replace(/imes/g, 'i');
    nuevoString = nuevoString.replace(/ai/g, 'a');
    nuevoString = nuevoString.replace(/ober/g, 'o');
    nuevoString = nuevoString.replace(/ufat/g, 'u');
    return nuevoString;
}











