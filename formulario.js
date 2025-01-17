var formulario = document.querySelector('form'); //form es una etiqueta, no un id.

formulario.onsubmit = function (e) {
  e.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add('error');
  }
  if (edad < 18 || edad > 120) {
    e.classList.add('error');
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

//Eliminé código que agregaba un botón de Eliminar, que no funcionaba por estar fuera de una tarjete de invitados

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === 'ar') {
    nacionalidad = 'Argentina';
  } else if (nacionalidad === 'mx') {
    nacionalidad = 'Mexicana';
  } else if (nacionalidad === 'vnzl') {
    nacionalidad = 'Venezolana';
  } else if (nacionalidad === 'per') {
    nacionalidad = 'Peruana';
  }

  var lista = document.getElementById('lista-de-invitados'); //No existia el id

  var elementoLista = document.createElement('div');
  elementoLista.classList.add('elemento-lista');
  lista.appendChild(elementoLista);

  //Borré código duplicado de creación de tarjeta de invitados---------------------------------------------------

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement('span');
    var inputNombre = document.createElement('input');
    var espacio = document.createElement('br');
    spanNombre.textContent = descripcion + ': ';
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento('Nombre', nombre);
  crearElemento('Edad', edad);
  crearElemento('Nacionalidad', nacionalidad);

  var botonBorrar = document.createElement('button');
  botonBorrar.textContent = 'Eliminar invitado';
  botonBorrar.id = 'boton-borrar';
  var corteLinea = document.createElement('br');
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}
