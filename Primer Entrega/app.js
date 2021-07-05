console.log("Primer entrega")

// Entidades---------------------------------------------------------------------

class Pelicula{
    constructor(nombre, categoria, director, anio, disponibilidad, precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.director = director;
        this.anio = anio;
        this.disponibilidad = disponibilidad;
        this.precio = precio;
    }
}

//Variables-----------------------------------------------------------------------

const Peliculas = [];

//Funciones-----------------------------------------------------------------------



function saveLocal(){
     let aJson = JSON.stringify(Peliculas)
     localStorage.setItem("Peliculas", aJson)

}

function imprimirProductos(){

    let idImprimir = document.getElementById("cardsId")

    Peliculas.forEach(e=>   {

     idImprimir.innerHTML +=   `

    <div class="col-3">
    <div class="card" style="cardsCategory">
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

let peli1 = new Pelicula("Jurassic Park","Ciencia Ficcion", "Steven Spielberg", 1993, true, 50);
let peli2 = new Pelicula("Get Out","Terror", "Jason Peele", 2017, true, 75);
let peli3 = new Pelicula("Toy Story","Animacion", "John Lasseter", 1996, true, 100);
let peli4 = new Pelicula("The Hangover","Comedia", "Todd Phillips", 2009, false, 100);
let peli5 = new Pelicula("The Godfather","Drama", "Francis Ford Coppola", 1972, true, 100);
let peli6 = new Pelicula("The Wolf of Wall Street","Biopic", "Martin Scorsese", 2013, false, 75);
let peli7 = new Pelicula("Pulp Fiction","Accion", "Quentin Tarantino", 1994, false, 50);
let peli8 = new Pelicula("Die Hard","Accion", "John McTiernan", 1998, true, 50);
let peli9 = new Pelicula("Seven","Drama", "David Fincher", 1995, false, 75);
let peli10 = new Pelicula("Pineapple Express","Comedia", "David Gordon Green", 2008, true, 50);
let peli11 = new Pelicula("Coco","Animacion", "Adrian Molina", 2017, true, 100);
let peli12 = new Pelicula("Joker","Accion", "Todd Phillips", 2019, true, 100);

//Agregar productos al array----------------------------------------------------------

Peliculas.push(peli1)
Peliculas.push(peli2)
Peliculas.push(peli3)
Peliculas.push(peli4)
Peliculas.push(peli5)
Peliculas.push(peli6)
Peliculas.push(peli7)
Peliculas.push(peli8)
Peliculas.push(peli9)
Peliculas.push(peli10)
Peliculas.push(peli11)
Peliculas.push(peli12)

imprimirProductos()
saveLocal()

//La parte de agregar peliculas la dejo aca pendiente por si mas adelante me sirve para agregarla

function agregarPelis(){
    let quiereAgregar = prompt(`Quiere agregar una pelicula al catalogo?\n 1-Si\n 2-No`)
    
    if(quiereAgregar==1){
    let nombre = prompt("Nombre")
    let categoria = prompt("Categoria")
    let director = prompt("Director")
    let anio = Number(prompt("Anio"))
    let disponibilidad = prompt("Disponibilidad")
    
    let peliNueva = new Pelicula(nombre,categoria,director,anio,disponibilidad);
    Peliculas.push = peliNueva
    alert("Su pelicula fue agregada a la lista")}
    else if(quiereAgregar==2){
        alert("Puede observar su catalogo en la consola")
    }else{
        alert("El numero introducido no es correcto")
    }
}

//agregarPelis()


