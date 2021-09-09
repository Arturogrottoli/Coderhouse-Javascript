//--FORMULARIO--
"use strict"

//--CLASES--------------------------------------
class Suscriptor {
  constructor(nuevoSuscriptor) {
    this.nombre = nuevoSuscriptor.nombre;
    this.apellido = nuevoSuscriptor.apellido;
    this.email = nuevoSuscriptor.email;
  }
}

//--FUNCIONES--------------------------------------

const crearFormulario = () => {
  $('#formulario')
    .append(`<form class="my-form" id="formularioContacto">
            <div class="form-group">
              <label for="Nombre">Nombre: </label>
              <input id="nombre" type="text" class="form-control" placeholder="Nombre">
            </div>
            <div class="form-group">
              <label for="Apellido">Apellido: </label>
              <input id="apellido" type="text" class="form-control" placeholder="Apellido">
            </div>
            <div class="form-group">
              <label for="email">Email: </label>
              <input id="email" type="email" class="form-control" placeholder="ejemplo@ejemplo.com">
            </div>
            <button id="btnCrearSuscriptor" type="submit" class="button-form btn-primary">Crear Suscripción</button>
          </form>
          `
    )
    .submit((event) => { crearSuscriptor(event) });
};

const imprimirFormulario = () => {
  $('#formulario')
    //.append(crearFormulario())
    .fadeIn(1000);
  //.submit((event) => { crearSuscriptor(event) });
}

const eliminarFormulario = () => {
  $('#formulario').hide();

  //.empty();
}

const validarCampos = (usuario) => {
  if (usuario.nombre == "" || usuario.apellido == "" || usuario.email == "" || !usuario.email.includes("@") || !usuario.email.includes(".com")) {
    return false;
  }
  return true;
}

// Si hay key usuario se carga y se agrega, sino se crea 
const agregarEnStorage = (nuevoSuscriptor) => {
  if (localStorage.getItem("suscripciones")) {
    let suscripcionesStorage = JSON.parse(localStorage.getItem("suscripciones"));
    suscripcionesStorage.push(nuevoSuscriptor);
    localStorage.setItem("suscripciones", JSON.stringify(suscripcionesStorage));
  } else {
    listaDeSuscriptores.push(nuevoSuscriptor);
    localStorage.setItem("suscripciones", JSON.stringify(listaDeSuscriptores));
  }
}

const crearSuscriptor = (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;

  let nuevoSuscriptor = new Suscriptor({
    nombre: nombre,
    apellido: apellido,
    email: email,
  });

  if (validarCampos(nuevoSuscriptor)) {
    agregarEnStorage(nuevoSuscriptor);             // Agrega el usuario al storage
    mostrarMensajeEnModal("Se ha suscripto correctamente.");
    $('#formularioContacto').trigger("reset");  // vacia el formulario
  } else {
    mostrarMensajeEnModal("Los datos ingresados no son correctos.", true);
  }
}

//--VARIABLES--------------------------------------

// Lista de suscripciones
const listaDeSuscriptores = [];