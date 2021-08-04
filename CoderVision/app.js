console.log("Tercer Entrega")

// Entidades---------------------------------------------------------------------

class Pelicula{
    constructor(id, nombre, categoria, director, anio, disponibilidad, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.contenido = contenido;
        this.categoria = categoria;
        this.director = director;
        this.anio = anio;
        this.disponibilidad = disponibilidad;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Variables-----------------------------------------------------------------------

const Peliculas = [
{id:1, nombre:"Jurassic Park",contenido: "Película", categoria:"Ciencia Ficcion",director: "Steven Spielberg", anio: 1993, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626464598/Codevision/1-jurassic_park_ip0yeb.jpg`},
{id:2, nombre:"Breaking Bad",contenido: "Serie", categoria:"Drama",director: "Vince Gillian", anio: 2008, disponibilidad: false,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626455403/Codevision/15-breaking_bad_cxay4g.jpg`},
{id:3, nombre:"Get Out",contenido: "Película",categoria:"Terror",director: "Jason Peele", anio: 2017, disponibilidad: true,precio: 75, imagen: `https://res.cloudinary.com/turi4/image/upload/v1626475690/Codevision/2-get_out_rw989u.jpg`},
{id:4, nombre:"Dark",contenido: "Serie", categoria:"Ciencia Ficcion",director: "Steven Spielberg", anio: 2017, disponibilidad: true,precio: 75,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626475612/Codevision/13-Dark_kti3bn.jpg`},
{id:5, nombre:"Toy Story",contenido: "Película",categoria:"Animacion",director: "Baran bo Odar", anio: 1996, disponibilidad: false,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626464184/Codevision/3-toy_story_qbjzwo.jpg` },
{id:6, nombre:"Game of thrones",contenido: "Serie", categoria:"Ciencia Ficcion",director: "Alan Taylor/Alex Graves", anio: 2011, disponibilidad: true,precio: 100,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626475422/Codevision/14-GOT_cfqbpo.jpg`},
{id:7, nombre:"Die Hard",contenido: "Película",categoria:"Accion",director: "John McTiernan", anio: 1998, disponibilidad: true,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626475518/Codevision/4-die_hard_skel2s.jpg` },
{id:8, nombre:"The Office",contenido: "Serie", categoria:"Comedia",director: "B J Novak/Rainn Wilson", anio: 2005, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626465580/Codevision/16-the_office_xgpd41.jpg`},
{id:9, nombre:"The Hangover",contenido: "Película",categoria:"Comedia",director: "Todd Phillips", anio: 2009, disponibilidad: false,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626465703/Codevision/5-the_hangover_kpi4be.jpg` },
{id:10, nombre:"This is us",contenido: "Serie", categoria:"Drama",director: "Milo Ventimiglia/Griffin Dunne", anio: 2016, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626475159/Codevision/17-this_is_us_t8ckof.jpg`},
{id:11, nombre:"The Godfather",contenido: "Película",categoria:"Drama",director: "Francis Ford Coppola", anio: 1972, disponibilidad: true,precio: 100, imagen: `https://res.cloudinary.com/turi4/image/upload/v1626475344/Codevision/6-the_godfather_vpowix.jpg`},
{id:12, nombre:"Rick and Morty",contenido: "Serie", categoria:"animacion",director: "Dan Harmon", anio: 2013, disponibilidad: false ,precio: 75,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626456856/Codevision/18-rick_and_morty_brolbi.jpg`},
{id:13, nombre:"The Wolf of Wall Street",contenido: "Película",categoria:"Biopic",director: "Martin Scorsese", anio: 2013, disponibilidad: false,precio: 75, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626465846/Codevision/7-the_wolf_gkdeyx.jpg` },
{id:14, nombre:"Luis Miguel",contenido: "Serie", categoria:"Biopic",director: "Humberto Hinojosa/Natalia Beristáin​", anio: 2018, disponibilidad: true, precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458560/Codevision/20-luis_miguel_lnouiy.jpg`},
{id:15, nombre:"Pulp Fiction",contenido: "Película",categoria:"Accion",director: "Quentin Tarantino", anio: 1994, disponibilidad: false,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626475253/Codevision/8-pulp_fiction_a1dq3m.jpg` },
{id:16, nombre:"Okupas",contenido: "Serie", categoria:"Drama",director: "Bruno Stagnaro", anio: 2000, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458560/Codevision/21-okupas_v9hjjl.jpg`},
{id:17, nombre:"Seven",contenido: "Película",categoria:"Drama",director: "David Fincher", anio: 1995, disponibilidad: false,precio: 75, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626466253/Codevision/9-seven_e6xpfl.jpg` },
{id:18, nombre:"Friends",contenido: "Serie", categoria:"Comedia",director: "Kevin Bright/Marta Kauffman", anio: 1994, disponibilidad: true,precio: 100,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458561/Codevision/19-friends_cgvcmv.jpg`},
{id:19, nombre:"Pineapple Express",contenido: "Película",categoria:"Comedia",director: "David Gordon Green", anio: 2008, disponibilidad: true,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626466180/Codevision/10-pineapple_iyanic.jpg` },
{id:20, nombre:"The Purge",contenido: "Serie", categoria:"Accion",director: "James De Monaco", anio: 2021, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458561/Codevision/22-the_purge_cpvng9.jpg`},
{id:21, nombre:"Coco",contenido: "Película",categoria:"Animacion",director: "Adrian Molina", anio: 2017, disponibilidad: true,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626465934/Codevision/11-coco_aaqlps.jpg` },
{id:22, nombre:"Family Guy",contenido: "Serie", categoria:"Animacion",director: "Seth MacFarlane", anio: 1999, disponibilidad: true,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458561/Codevision/23-family_guy_nmnxx2.jpg`},
{id:23, nombre:"Joker",contenido: "Película",categoria:"Accion",director: "Todd Phillips", anio: 2019, disponibilidad: true,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626466066/Codevision/12-joker_msppkz.jpg` },
{id:24, nombre:"The Handmaid's Tale",contenido: "Serie", categoria:"Drama",director: "Bruce Miller", anio: 2017, disponibilidad: false,precio: 50,  imagen:`https://res.cloudinary.com/turi4/image/upload/v1626458561/Codevision/24-the_handmailds_tale_yqebts.jpg`},
];

//Titulo, ahora en Jquery

let titulo = $('#id1').fadeIn(3500);
$('#id1').text("Bienvenid@s a CoderVisión!")




//Funciones-----------------------------------------------------------------------



function saveLocal(){
     let aJson = JSON.stringify(Peliculas)
     localStorage.setItem("Peliculas", aJson)

}

function imprimirProductos(){

    let cardsId = document.getElementById("cardsId")
   
    
    Peliculas.forEach(e=>   {

        cardsId.innerHTML +=   `<div class="card">
                                <img src=${e.imagen} class="card-img-top">
                                <br>
                                <h5 class="card-title"><b>${e.nombre}</b></h5>
                                <p class="card-text">${e.contenido}-${e.categoria} </p>
                                <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
                                </div>`

}) 
}



imprimirProductos()
saveLocal()



function imprimirPelis(){
 
    remover(cardsId);
    let titulo = $('#id1');
    $('#id1').text("Películas").fadeIn(4000)
    let idImprimirPelis = document.getElementById("cardsId");
     
    Peliculas.forEach(e=>  
    {
        
        
        if(e.contenido == "Película"){

            idImprimirPelis.innerHTML +=    
        
            `     
            <div class="card">
                <img src=${e.imagen} class="card-img-top">
                <br>
                <h5 class="card-title"><b>${e.nombre}</b></h5>
                <p class="card-text">${e.contenido}-${e.categoria} </p>
                <a href="#" class="btn btn-primary id="alquilar">Agregar a Lista</a>
                </div>`
        }
    }      )
}



function imprimirSeries(){
 
    remover(cardsId);
    
    let titulo = $('#id1').fadeIn(4000);
    $('#id1').text("Series");
    
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.contenido == "Serie"){

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


function imprimirAccion(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Accion"){

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

function imprimirAnimacion(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Animacion"){

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

function imprimirBiopic(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Biopic"){

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

function imprimirCiencia(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Ciencia Ficcion"){

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

function imprimirComedia(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Comedia"){

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

function imprimirDrama(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Drama"){

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

function imprimirTerror(){
 
    remover(cardsId);
    
    let idImprimirSeries = document.getElementById("cardsId")
    //idImprimirSeries.innerHTML = "";

    Peliculas.forEach(e=>   {

        if(e.categoria == "Terror"){

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


function remover(myNode){

    while(myNode.hasChildNodes())
    {
       myNode.removeChild(myNode.lastChild);
    }
    }


//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn){
    const $ScrollBtn = $(btn);
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        
        //Operador ternario sustituyendo al if{} else{} 
        scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function(){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}



//Si apreto en peliculas me muestra solo las peliculas, idem con las series, ahora hecho con Jquery


let btn1 = $('#btnpelis')
$(btn1).click(imprimirPelis);

let btn2 = $('#btnseries')
$(btn2).click(imprimirSeries);

let btn3 = $('#btnaccion')
$(btn3).click(imprimirAccion);

let btn4 = $('#btnanimacion')
$(btn4).click(imprimirAnimacion);

let btn5 = $('#btnbiopic')
$(btn5).click(imprimirBiopic);

let btn6 = $('#btnciencia')
$(btn6).click(imprimirCiencia);

let btn7 = $('#btncomedia')
$(btn7).click(imprimirComedia);

let btn8 = $('#btndrama')
$(btn8).click(imprimirDrama);

let btn9 = $('#btnterror')
$(btn9).click(imprimirTerror);

//Buscador

const searchbar = document.querySelector('#searchbar');
const searchbutton = document.querySelector('#searchbutton');
const result = document.querySelector('#cardsId')

const searcher = ()=>{
    //console.log(searchbar.value);

    result.innerHTML = '';
    const text = searchbar.value.toLowerCase();
   

    for(let Pelicula of Peliculas){

        
        let nombre = Pelicula.nombre.toLowerCase();
        if(nombre.indexOf(text) !== -1){

            result.innerHTML +=   `<div class="card">
                                <img src=${Pelicula.imagen} class="card-img-top">
                                <br>
                                <h5 class="card-title"><b>${Pelicula.nombre}</b></h5>
                                <p class="card-text">${Pelicula.contenido}-${Pelicula.categoria} $${Pelicula.precio}</p>
                                <a href="#" class="btn btn-primary" id="alquilar">Alquilar</a>
                                </div>`

        }
    }

    if( result.innerHTML === ''){

        swal({
            title: "Error!",
            text: "No se ha encontrado ningun titulo con ese nombre",
            icon: "error",
          });
                                

    }
}

searchbutton.addEventListener('click',searcher)
searchbar.addEventListener('keyup',searcher)

//Seleccion de tarjeta

function alerta(){
    swal({
        title: "Confirmacion!",
        text: "Desea agregar a su lista?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal('Título agregado con éxito', {
            icon: "success",
          });
        } else {
          swal("Accion Cancelada!", {
            icon: "success",
          });
        }
      });
}

let btn10 = $('#cardsId')
$(btn10).click(alerta);



