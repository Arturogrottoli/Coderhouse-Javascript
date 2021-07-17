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

    let idImprimir = document.getElementById("cardsId")

    categoriaTest.forEach(e=>   {

     idImprimir.innerHTML +=  
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



//logica-----------------------------------------------

console.log(Peliculas)
filtrarCategoria()
console.log(deJson)
imprimirProductos()



