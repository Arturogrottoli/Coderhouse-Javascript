//Variables--------------------------------------------



const deJson = localStorage.getItem("Peliculas")
const Peliculas = JSON.parse(deJson)

let categoriaTest = []
let categoriaActual = prompt("Que categoría querés ver?")

//Titulo, ahora en Jquery

let titulo = $('#id1').fadeIn(3500);
$('#id1').text("Categorías")

//funciones--------------------------------------------
function filtrarCategoria(){

     let categoria = Peliculas.filter( Pelicula => Pelicula.categoria.toLowerCase()  == categoriaActual)
    categoriaTest = categoria
    
}

function imprimirProductos(){

    let cardsId = document.getElementById("cardsId")

    categoriaTest.forEach(e=>   {

        cardsId.innerHTML +=  
      `

     <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">${e.contenido}-${e.categoria} $${e.precio}</p>
            <a href="#" class="btn btn-primary">Alquilar</a>
        </div>
`

})
}

function imprimirPelis(){
 
    remover(cardsId);
    let idImprimirPelis = document.getElementById("cardsId");
     
    Peliculas.forEach(e=>   {
        
        
        if(e.contenido == "Película"){

            idImprimirPelis.innerHTML +=    
        
            `     
            <div class="card">
                <img src=${e.imagen} class="card-img-top">
                <br>
                <h5 class="card-title"><b>${e.nombre}</b></h5>
                <p class="card-text">${e.contenido}-${e.categoria} $${e.precio}</p>
                <a href="#" class="btn btn-primary">Alquilar</a>
            </div>
        
            `
        }
    }      )
}



function imprimirSeries(){
 
    remover(cardsId);
    let idImprimirSeries = document.getElementById("cardsId")
    
    Peliculas.forEach(e=>   {

        if(e.contenido == "Serie"){

        idImprimirSeries.innerHTML +=    
     
     `     
        <div class="card">
            <img src=${e.imagen} class="card-img-top">
            <br>
            <h5 class="card-title"><b>${e.nombre}</b></h5>
            <p class="card-text">${e.contenido}-${e.categoria} $${e.precio}</p>
            <a href="#" class="btn btn-primary">Alquilar</a>
        </div>
    
`
        }
})
}

//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn){
    const $ScrollBtn = $(btn);
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        console.log(scrollTop);
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

//Si apreto en peliculas me muestra solo las peliculas, idem con las series

let btn1 = $('#btnpelis')
$(btn1).click(imprimirPelis);

let btn2 = $('#btnseries')
$(btn2).click(imprimirSeries);

//logica-----------------------------------------------

console.log(Peliculas)
filtrarCategoria()
console.log(deJson)
imprimirProductos()



//Creo una funcion para poder remover los child


function remover(myNode){

    while(myNode.hasChildNodes())
    {
       myNode.removeChild(myNode.lastChild);
    }
    }
    
