//Variables--------------------------------------------

const deJson = localStorage.getItem("Peliculas")
const Peliculas = JSON.parse(deJson)

let categoriaTest = []
let categoriaActual = prompt("Que categoria queres ver?")



//funciones--------------------------------------------
function filtrarCategoria(){

     let categoria = Peliculas.filter( Pelicula => Pelicula.categoria == categoriaActual)
    categoriaTest = categoria
    
}

function imprimirProductos(){

    let idImprimir = document.getElementById("cardsCategoria")

    categoriaTest.forEach(e=>   {

     idImprimir.innerHTML +=   `

    <div class="col-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">${e.categoria}</p>
            <p class="card-text">$${e.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
</div>
`

})
}

//logica-----------------------------------------------

console.log(Peliculas)
filtrarCategoria()
console.log(deJson)
imprimirProductos()
