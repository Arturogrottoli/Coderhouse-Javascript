console.log("Entrega Final - CoderVision!")

// Entidades---------------------------------------------------------------------

class Pelicula {
    constructor(id, nombre, contenido, categoria, director, anio, disponibilidad, trailer, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.contenido = contenido;
        this.categoria = categoria;
        this.director = director;
        this.anio = anio;
        this.disponibilidad = disponibilidad;
        this.trailer = trailer;
        this.imagen = imagen;
    }
}

//Variables-----------------------------------------------------------------------

let Peliculas = [];
let Lista = [];
let btninicio = $('#btninicio')
let btnpelis = document.getElementById("btnpelis")
let btnseries = document.getElementById("btnseries")
let btnmilista = $('#btnmilista')
let btnaccion = document.getElementById("btnaccion")
let btnanimacion = document.getElementById("btnanimacion")
let btnbiopic = document.getElementById("btnbiopic")
let btnciencia = document.getElementById("btnciencia")
let btncomedia = document.getElementById("btncomedia")
let btndrama = document.getElementById("btndrama")
let btnterror = document.getElementById("btnterror")
let btnformulario = document.getElementById("btnformulario")

//Titulo, escrito en Jquery con animacion

let titulo = $('#id1').fadeIn(3500);
$('#id1').text("Bienvenid@s a CoderVisión!")


//Funciones-----------------------------------------------------------------------

//Llamo a mis titulos en el archivo json e imprimo todas las tarjetas

function imprimirCards() {

    let cardsId = document.getElementById("cardsId")

    $('#id1').text("Bienvenid@s a CoderVisión!")

    remover(cardsId);
    
    fetch('archivos.json').then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
        ).then(res => {
                       
                 
        res.data.forEach(e => {
        Peliculas.push(e)
        cardsId.innerHTML += `<div  id =${e.id} class="card"  >
                                <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                <br>
                                <h5 class="card-title"><b>${e.nombre}</b></h5>
                                <p class="card-text">${e.contenido}-${e.categoria}</p>
                                <a href="#" class="btn btn-primary"  onclick= "agregarALista('${e.id}')">Agregar a mi lista</a>
                                </div>`
    })
}))
}


function saveLocal() {
    let aJson = JSON.stringify(Peliculas)
    localStorage.setItem("Peliculas", aJson)
}



imprimirCards()
saveLocal()

//Funcion para poder mostrar solo las peliculas o solo las series

function imprimirContenido(tipo) {

    remover(cardsId);
  
    let idImprimirPelis = document.getElementById("cardsId");
  
    if (tipo == "Película" || tipo == "Serie") {

      $('#id1').text(tipo)

      Peliculas.forEach(e => {
        if (e.contenido == tipo) {
          idImprimirPelis.innerHTML += `<div  id =${e.id} class="card"  >
                                                <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                                <br>
                                                <h5 class="card-title"><b>${e.nombre}</b></h5>
                                                <p class="card-text">${e.contenido}-${e.categoria}</p>
                                                <a href="#" class="btn btn-primary"  onclick= "agregarALista('${e.id}')">Agregar a mi lista</a>
                                                </div>`
        }
      })
    }  

      }

//Funcion para mostrar solo la categoria elegida    

function imprimirCategoria(tipo) {

    remover(cardsId);
  
    let idImprimirPelis = document.getElementById("cardsId");
  
    if (tipo == "Terror" || tipo == "Drama" || tipo == "Accion" || tipo == "Animacion" || tipo == "Comedia"|| tipo == "Biopic"|| tipo == "Ciencia Ficcion") {

      $('#id1').text(tipo)

      Peliculas.forEach(e => {
        if (e.categoria == tipo) {
          idImprimirPelis.innerHTML += `<div  id =${e.id} class="card"  >
                                                <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                                <br>
                                                <h5 class="card-title"><b>${e.nombre}</b></h5>
                                                <p class="card-text">${e.contenido}-${e.categoria}</p>
                                                <a href="#" class="btn btn-primary"  onclick= "agregarALista('${e.id}')">Agregar a mi lista</a>
                                                </div>`
        }
      })
    }  

      }

//Creo una funcion para poder remover los child, poder borrar todas las tarjetas para los diferentes filtros


function remover(myNode) {

    while (myNode.hasChildNodes()) {
        myNode.removeChild(myNode.lastChild);
    }
}


//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn) {
    const $ScrollBtn = $(btn);

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function () {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}

//Cada boton tiene asignado un filtro en particular

$(btninicio).click(imprimirCards);
btnpelis.onclick = () => {imprimirContenido("Película")};
btnseries.onclick = () => {imprimirContenido("Serie")};
btnaccion.onclick = () => {imprimirCategoria("Accion")};
btnanimacion.onclick = () => {imprimirCategoria("Animacion")};
btnbiopic.onclick = () => {imprimirCategoria("Biopic")};
btnciencia.onclick = () => {imprimirCategoria("Ciencia Ficcion")};
btncomedia.onclick = () => {imprimirCategoria("Comedia")};
btndrama.onclick = () => {imprimirCategoria("Drama")};
btnterror.onclick = () => {imprimirCategoria("Terror")};
btnformulario.onclick = () => {imprimirFormulario()};
$(btnmilista).click(imprimirLista);

//Buscador

const searchbar = document.querySelector('#searchbar');
const searchbutton = document.querySelector('#searchbutton');
const result = document.querySelector('#cardsId')

const searcher = () => {
    
    result.innerHTML = '';
    const text = searchbar.value.toLowerCase();

    for (let Pelicula of Peliculas) {

        let nombre = Pelicula.nombre.toLowerCase();
        if (nombre.indexOf(text) !== -1) {

            result.innerHTML += `<div  id =${Pelicula.id} class="card"  >
                                  <img src=${Pelicula.imagen} class="card-img-top" onclick="comenzarReproduccion('${Pelicula.trailer}')">
                                  <br>
                                  <h5 class="card-title"><b>${Pelicula.nombre}</b></h5>
                                  <p class="card-text">${Pelicula.contenido}-${Pelicula.categoria}</p>
                                  <a href="#" class="btn btn-primary"  onclick= "agregarALista('${Pelicula.id}')">Agregar a mi lista</a>
                                  </div>`

        }
    }

    if (result.innerHTML === '') {

        swal({
            title: "Error!",
            text: "No se ha encontrado ningun titulo con ese nombre",
            icon: "error",
        });


    }
}

searchbutton.addEventListener('click', searcher)
searchbar.addEventListener('keyup', searcher)


//Reproduccion de titulos (En este caso al no tener base de datos reproduzco su trailer de youtube)

let comenzarReproduccion = (idReproducir) => {
    let botonReproduc = Peliculas.filter(e => e.trailer == idReproducir)
    window.location.href = (idReproducir)
}

//Seleccion de tarjeta y agregar titulos a Mi Lista


let agregarALista = (idLista) => {

    swal("Quiere agregar el titulo a su lista?", {
        buttons: {
            cancel: "Cancelar",
            agregar: {
                text: "Agregar",
                value: "agregar",
            },

        },
    })
        .then((value) => {
            switch (value) {


                case "agregar":
                    swal("Ok!", "Titulo agregado a la lista", "success");
                    //Meter un if para que no suba titulos repetidos  
                    let tituloEnlistado = Peliculas.filter(e => e.id == idLista)
                    
                    if(tituloEnlistado[0].disponibilidad ==true){
                    Lista.push(tituloEnlistado[0])
                    tituloEnlistado[0].disponibilidad = false;
                    console.log(tituloEnlistado[0])
                    console.log(Lista)
                    break;}
                    
                    else{
                        swal("Error", "El titulo ya está en tu lista", "error");
                        break;}

                    default:
                    swal("cancelado!", "No se agregó el titulo", "error");
            }
        });
}

//imprime las peliculas agregadas a la lista

function imprimirLista() {

    if (Lista == '') {
        swal({
            title: "Error!",
            text: "No hay elementos agregados a la lista",
            icon: "error",
        });
        remover(cardsId);

        let titulo = $('#id1');
        $('#id1').text("Mi Lista").fadeIn(4000)
    } else {

        remover(cardsId);

        let titulo = $('#id1');
        $('#id1').text("Mi Lista").fadeIn(4000)

        let idImprimirLista = document.getElementById("cardsId")


        Lista.forEach(e => {



            idImprimirLista.innerHTML += `<div  id =${e.id} class="card"  >
                                    <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                    <br>
                                    <h5 class="card-title"><b>${e.nombre}</b></h5>
                                    <p class="card-text">${e.contenido}-${e.categoria}</p>
                                    <a href="#" class="btn btn-primary"  onclick= "quitarDeLista('${e.id}')">Quitar de mi Lista</a>
                                    </div>  `


        })
    }
}




//Quita las peliculas que no quiero tener mas en la lista

    let quitarDeLista = (idLista) => {

        swal("Quiere quitar el titulo de su lista?", {
            buttons: {
                cancel: "Cancelar",
                quitar: {
                    text: "Quitar",
                    value: "quitar",
                },
    
            },
        })
            .then((value) => {
                switch (value) {
    
    
                    case "quitar":
                          
                        let tituloQuitado = Lista.filter(e => e.id == idLista)
                        
                        if(tituloQuitado[0].disponibilidad ==false){
                        Lista.pop(tituloQuitado[0])
                        tituloQuitado[0].disponibilidad ==true
                        console.log(tituloQuitado[0])
                        swal("Ok!", "Titulo quitado de la lista", "success");
                        
                        remover(cardsId)

                        let idImprimirLista = document.getElementById("cardsId")
                        Lista.forEach(e => {

                                idImprimirLista.innerHTML += `<div  id =${e.id} class="card"  >
                                                        <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                                        <br>
                                                        <h5 class="card-title"><b>${e.nombre}</b></h5>
                                                        <p class="card-text">${e.contenido}-${e.categoria}</p>
                                                        <a href="#" class="btn btn-primary"  onclick= "quitarDeLista('${e.id}')">Quitar de mi Lista</a>
                                                        </div>  `
                            }
                        )
                        console.log(Lista)
                        break;}
                            
                    default:
                        swal("cancelado!", "No se quitó el titulo", "error");
                }
            });
    }
    
   

//Funcion Formulario, utilizo una API llamada formspree


function imprimirFormulario() {

    remover(cardsId);
    let titulo = $('#id1');
        $('#id1').text("Dejanos tu mensaje")
    
        let idImprimirPelis = document.getElementById("cardsId");
        idImprimirPelis.innerHTML += `
                <section class="contact">
                <div id="formulario" class="u-wrapper">
                <div class="contact-content">
                <form id="form" action="https://formspree.io/f/mgernele" method="POST" class="form">
                  <label for="name" class="formu">Nombre Completo <span>*</span></label>
                  <input name="name" required type="text" id="name" placeholder="nombre">
                  <label for="email" class="formu">Correo electrónico <span>*</span></label>
                  <input name="email" type="text" id="email" required placeholder="nombre@gmail.com">
                  <label for="message" class="formu">Mensaje</label>
                  <textarea id="message" name="message" id="" cols="30" rows="10"></textarea>
                  <button id="botonenviar" type="submit" class="btn primary full">enviar mensaje</button>
                </form>
                <a href="mailto:arturogrottoli@gmail.com" id="idform"></a>
                </div>
                </div>
                </section>`
                
                
                
}
  
       
//Funcion para tener menu lateral en pantalla con menor resolucion
        
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar .ul1 .items').classList.toggle('show');
});


document.querySelector('.cancel-btn').addEventListener('click', () => {
    document.querySelector('.navbar .ul1 .items').classList.toggle('show');
});


