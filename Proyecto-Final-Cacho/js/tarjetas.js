//--TARJETAS / CARDS--
"use strict"

//--FUNCIONES--------------------------------------

const crearTarjeta = (espectaculo, idTarjetaEspectaculo, idButtonTarjetaEspectaculo, esCarrito = false) => {
  const tipoEspectaculo = espectaculo.tipo.toLowerCase();
  let entradas = '<div class="agotado"><strong> Agotado </strong></div>';
  if (esCarrito || espectaculo.stockEntradas > 0) {
    const cantidadEntradas = esCarrito ? espectaculo.cantidad : `<input type="number" id="${espectaculo.id}_cantidad" name="cantidad" min="0" max="${espectaculo.obtenerStock}" value="${espectaculo.cantidad || 0}">`;
    const cantidadClasses = esCarrito ? '' : ' d-flex flex-column';
    entradas = `<div class="cantidad ${cantidadClasses}">
          <label for="cantidadEntradas">Entradas:</label>
          ${cantidadEntradas}
        </div>
        <button id="${idButtonTarjetaEspectaculo}" class="btn btn-primary"></button>`;
  }
  return `<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-5 ${esCarrito && 'carrito'}" id="${idTarjetaEspectaculo}">
            <div class="card p-3 bg-white rounded" style="width: 100%;">
              <img src="${espectaculo.imagen}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title text-center">${espectaculo.nombre}</h5>
                <p class="card-text text-center ${tipoEspectaculo}">${tipoEspectaculo}</p>
                <p class="card-text text-center precio"><strong>PRECIO: $${espectaculo.precio}</strong></p>
                <div class="d-flex justify-content-between flex-row">
                  ${entradas}
                </div>
              </div>
            </div>
          </div>`;
}

const imprimirTarjeta = (espectaculo, carrito) => {
  // Creo Tarjeta
  const idTarjetaEspectaculo = `espectaculo_${espectaculo.id}`;
  const idButtonTarjetaEspectaculo = `button_${idTarjetaEspectaculo}`;

  // Busco la lista, creo la tarjeta html y la incluyo en la lista
  const tarjetaEspectaculo = crearTarjeta(espectaculo, idTarjetaEspectaculo, idButtonTarjetaEspectaculo);
  $('#cardsId').append(tarjetaEspectaculo);

  // Busca el boton, le agrega el texto y la funcionalidad para el click
  $(`#${idButtonTarjetaEspectaculo}`)
    .text('Agregar a mi carrito')
    .click(() => { agregarAlCarrito(espectaculo, carrito) });
}

const imprimirTarjetaCarrito = (espectaculos, carrito, itemCarrito) => {
  // Crea Tarjeta de carrito
  const idTarjetaEspectaculo = `espectaculo_${itemCarrito.id}`;
  const idButtonTarjetaEspectaculo = `button_${idTarjetaEspectaculo}`;

  const tarjetaEspectaculo = crearTarjeta(itemCarrito, idTarjetaEspectaculo, idButtonTarjetaEspectaculo, true);
  $('#cardsId').append(tarjetaEspectaculo);

  $(`#${idButtonTarjetaEspectaculo}`)
    .html('<i class="fas fa-trash"></i>')
    .attr('class', 'btn boton-carrito')
    .click(() => { eliminarDelCarrito(espectaculos, carrito, itemCarrito) });
}

const eliminarTarjetas = () => {
  $('#cardsId').empty()
  $('#cardsId').removeClass('search');
}

const eliminarLaTarjeta = (itemCarrito) => {
  // Elimina la card del HTML
  const idTarjetaEspectaculo = `espectaculo_${itemCarrito.id}`;
  $(`#${idTarjetaEspectaculo}`).remove();   // Borra el elemento seleccionado
}

const resetearVista = () => {
  scrollTop();                    // Se posiciona en la parte superior
  eliminarTarjetas();             // Se eliminan las tarjetas
  eliminarMensaje();              // Se elimina el contenido del mensaje superior
  eliminarBotonesPagoCarrito();   // Se eliminan botones del carrito
  eliminarCarousel();             // Se elimina carousel
  eliminarFormulario();           // Se elimina formulario
  eliminarTitulo();               // Se elimina titulo
  $('#cardsId').hide();           // Se ocultan las tarjetas
}

const imprimirTarjetasFiltradas = (espectaculos, tipo, carrito, busqueda = '') => {
  resetearVista();

  if (tipo === "INICIO") {                     // Si recibe INICIO imprimo todas las tarjetas
    imprimirCarousel();
    espectaculos.forEach(espectaculo => {
      imprimirTarjeta(espectaculo, carrito);
    });
    fadeInTarjetas();
  } else if (tipo === "CARRITO") {             // Si recibo CARRITO, imprimo la lista del carrito
    // IMPRIMIR TARJETAS DE CARRITO
    if (carrito.length === 0) {
      // Mensaje de carrito vacío
      mostrarMensaje(`No posee elementos en el carrito`);
    } else {                                   // Si recibo otro tipo y coincide con las tarjetas, se imprimen las tarjetas de ese tipo
      mostrarTitulo("Carrito");
      imprimirBotonesPagoCarrito(espectaculos, carrito);  // IMPRIMIR BOTONES DE PAGO
      carrito.forEach(itemCarrito => {
        imprimirTarjetaCarrito(espectaculos, carrito, itemCarrito);
      });
      fadeInTarjetas();
    }
  } else if (tipo === "SUBSCRIBITE") {
    mostrarTitulo("Subscripción");
    imprimirFormulario();
  } else if (tipo === "BUSQUEDA") {
    buscador(espectaculos, carrito, busqueda);
  } else {
    const titulo = arregloMenu.find(m => m.tipo === tipo).texto;
    mostrarTitulo(titulo);                   // Muestra el resto de tipos
    const espectaculoFiltrados = espectaculos.filter(espectaculo => espectaculo.tipo === tipo);
    espectaculoFiltrados.forEach(espectaculo => {
      imprimirTarjeta(espectaculo, carrito);
    });
    fadeInTarjetas();
  }
}
