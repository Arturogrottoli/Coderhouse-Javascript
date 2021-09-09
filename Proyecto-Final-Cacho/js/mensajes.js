//--MENSAJES--
"use strict"

//--FUNCIONES--------------------------------------

const mostrarMensaje = (texto) => {
  $('#mensaje')
    .empty()
    .append(texto)
    .slideDown(150);
}

const eliminarMensaje = () => {
  $('#mensaje')
    .hide()
    .empty();
}
