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

//Titulo, escrito en Jquery con animacion

let titulo = $('#id1').fadeIn(3500);
$('#id1').text("Bienvenid@s a CoderVisión!")

//Funciones-----------------------------------------------------------------------

function imprimirCards() {

    let cardsId = document.getElementById("cardsId")
    
    fetch('archivos.json').then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
        ).then(res => {
            console.log(res.status, res.data);
            
                 
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

function imprimirPelis() {

    remover(cardsId);
    let titulo = $('#id1');
    $('#id1').text("Películas").fadeIn(4000)
    let idImprimirPelis = document.getElementById("cardsId");

    Peliculas.forEach(e => {


        if (e.contenido == "Película") {

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

function imprimirSeries() {

    remover(cardsId);

    let titulo = $('#id1').fadeIn(4000);
    $('#id1').text("Series");

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.contenido == "Serie") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML += `<div  id =${e.id} class="card"  >
                                         <img src=${e.imagen} class="card-img-top" onclick="comenzarReproduccion('${e.trailer}')">
                                         <br>
                                         <h5 class="card-title"><b>${e.nombre}</b></h5>
                                         <p class="card-text">${e.contenido}-${e.categoria}</p>
                                         <a href="#" class="btn btn-primary"  onclick= "agregarALista('${e.id}')">Agregar a mi lista</a>
                                         </div>`
        }
    })
}


function imprimirAccion() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //

    Peliculas.forEach(e => {

        if (e.categoria == "Accion") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML += `<div class="card">
                                          <img src=${e.imagen} class="card-img-top">
                                          <br>
                                          <h5 class="card-title"><b>${e.nombre}</b></h5>
                                          <p class="card-text">${e.contenido}-${e.categoria} </p>
                                          <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
                                          </div>`
        }
    })
}

function imprimirAnimacion() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Animacion") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>
`
        }
    })
}

function imprimirBiopic() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Biopic") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>`
        }
    })
}

function imprimirCiencia() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Ciencia Ficcion") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>
`
        }
    })
}

function imprimirComedia() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Comedia") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>`
        }
    })
}

function imprimirDrama() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Drama") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>`
        }
    })
}

function imprimirTerror() {

    remover(cardsId);

    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e => {

        if (e.categoria == "Terror") {

            //innerHTML = -> .html()        Jquery

            idImprimirSeries.innerHTML +=

                `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} </p>
            <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
            </div>`
        }
    })
}


//Creo una funcion para poder remover los child


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

        //Operador ternario sustituyendo al if{} else{} 
        scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function () {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}

//Si apreto en peliculas me muestra solo las peliculas, idem con las series, ahora hecho con Jquery


let btninicio = $('#btninicio')
$(btninicio).click(imprimirCards);

let btnpelis = $('#btnpelis')
$(btnpelis).click(imprimirPelis);

let btnseries = $('#btnseries')
$(btnseries).click(imprimirSeries);

let btnaccion = $('#btnaccion')
$(btnaccion).click(imprimirAccion);

let btnanimacion = $('#btnanimacion')
$(btnanimacion).click(imprimirAnimacion);

let btnbiopic = $('#btnbiopic')
$(btnbiopic).click(imprimirBiopic);

let btnciencia = $('#btnciencia')
$(btnciencia).click(imprimirCiencia);

let btncomedia = $('#btncomedia')
$(btncomedia).click(imprimirComedia);

let btndrama = $('#btndrama')
$(btndrama).click(imprimirDrama);

let btnterror = $('#btnterror')
$(btnterror).click(imprimirTerror);

//Buscador

const searchbar = document.querySelector('#searchbar');
const searchbutton = document.querySelector('#searchbutton');
const result = document.querySelector('#cardsId')

const searcher = () => {
    //console.log(searchbar.value);

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

//Seleccion de tarjeta,Agregar peliculas a Mi Lista


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


let btnmilista = $('#btnmilista')
$(btnmilista).click(imprimirLista);

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
    
