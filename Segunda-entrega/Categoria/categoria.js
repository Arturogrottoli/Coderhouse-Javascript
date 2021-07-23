//Variables--------------------------------------------



const deJson = localStorage.getItem("Peliculas")
const Peliculas = JSON.parse(deJson)

let categoriaTest = []
let categoriaActual = prompt("Que categoria queres ver?")



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
     
    Peliculas.forEach(e=>  
    {
        
        
        if(e.contenido == "Pelicula"){

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

//Si apreto en peliculas me muestra solo las peliculas, idem con las series

let btn1 = document.getElementById("btnpelis")
btn1.addEventListener("click", imprimirPelis)

let btn2 = document.getElementById("btnseries")
btn2.addEventListener("click", imprimirSeries)

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
    
