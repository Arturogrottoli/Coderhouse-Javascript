console.log("Desafio 9 Complementario")

// Entidades---------------------------------------------------------------------

class Pelicula{
    constructor(id, nombre, categoria, director, anio, disponibilidad, precio, imagen){
        this.id = id;
        this.nombre = nombre;
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
{id:1, nombre:"Jurassic Park",categoria:"Ciencia Ficcion",director: "Steven Spielberg", anio: 1993, disponibilidad: true,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626098616/1-jurassic_park_ekquyu.jpg`},
{id:2, nombre:"Get Out",categoria:"Terror",director: "Jason Peele", anio: 2017, disponibilidad: true,precio: 75, imagen: `https://res.cloudinary.com/turi4/image/upload/v1626099708/2-get_out_sjxfxq.jpg`},
{id:3, nombre:"Toy Story",categoria:"Animacion",director: "John Lasseter", anio: 1996, disponibilidad: true,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097499/3-toy_story_z5kwg7.jpg` },
{id:4, nombre:"Die Hard",categoria:"Accion",director: "John McTiernan", anio: 1998, disponibilidad: true,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097498/4-die_hard_nhenxi.jpg` },
{id:5, nombre:"The Hangover",categoria:"Comedia",director: "Todd Phillips", anio: 2009, disponibilidad: false,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097503/5-the_hangover_mf6wvc.jpg` },
{id:6, nombre:"The Godfather",categoria:"Drama",director: "Francis Ford Coppola", anio: 1972, disponibilidad: true,precio: 100, imagen: `https://res.cloudinary.com/turi4/image/upload/v1626100326/6-the_godfather_mezqpl.jpg`},
{id:7, nombre:"The Wolf of Wall Street",categoria:"Biopic",director: "Martin Scorsese", anio: 2013, disponibilidad: false,precio: 75, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097498/7-the_wolf_g5zx0a.jpg` },
{id:8, nombre:"Pulp Fiction",categoria:"Accion",director: "Quentin Tarantino", anio: 1994, disponibilidad: false,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097508/8-pulp_fiction_kmqgsh.jpg` },
{id:9, nombre:"Seven",categoria:"Drama",director: "David Fincher", anio: 1995, disponibilidad: false,precio: 75, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097506/9-seven_ug4ufu.jpg` },
{id:10, nombre:"Pineapple Express",categoria:"Comedia",director: "David Gordon Green", anio: 2008, disponibilidad: true,precio: 50, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097506/10-pineapple_gpmrvq.jpg` },
{id:11, nombre:"Coco",categoria:"Animacion",director: "Adrian Molina", anio: 2017, disponibilidad: true,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097504/11-coco_eyfj78.jpg` },
{id:12, nombre:"Joker",categoria:"Accion",director: "Todd Phillips", anio: 2019, disponibilidad: true,precio: 100, imagen:`https://res.cloudinary.com/turi4/image/upload/v1626097505/12-joker_xl4bns.jpg` },
];

let titulo = document.getElementById("id1")
titulo.textContent = `Bienvenid@s a CoderMovies!`


//Funciones-----------------------------------------------------------------------



function saveLocal(){
     let aJson = JSON.stringify(Peliculas)
     localStorage.setItem("Peliculas", aJson)

}

saveLocal()

function imprimirProductos(){
     
    
    
    let idImprimir = document.getElementById("cardsId")
    
    
    Peliculas.forEach(e=>   {


     idImprimir.innerHTML +=    
     
     `

    <div class="col-3">
    <div class="card" style="cardsCategory">
        <div class="card-body">
            <img src=${e.imagen} class="card-img-top">
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">${e.categoria}</p>
            <p class="card-text">$${e.precio}</p>
            <a href="#" class="btn btn-primary">Alquilar</a>
        </div>
    </div>
</div>
`


})
}




function imprimirProductos2(){

    
    let idImprimir = document.getElementById("cardsId")

    
     idImprimir.innerHTML +=    
     
     `

    <div class="col-3">
    <div class="card" style="cardsCategory">
        <div class="card-body">
            <img src=${Peliculas[2].imagen} class="card-img-top">
            <h5 class="card-title">${Peliculas[2].nombre}</h5>
            <p class="card-text">${Peliculas[2].categoria}</p>
            <p class="card-text">$${Peliculas[2].precio}</p>
            <a href="#" class="btn btn-primary">Alquilar</a>
        </div>
    </div>
</div>




<div class="col-3">
<div class="card" style="cardsCategory">
    <div class="card-body">
        <img src=${Peliculas[10].imagen} class="card-img-top">
        <h5 class="card-title">${Peliculas[10].nombre}</h5>
        <p class="card-text">${Peliculas[10].categoria}</p>
        <p class="card-text">$${Peliculas[10].precio}</p>
        <a href="#" class="btn btn-primary">Alquilar</a>
    </div>
</div>
</div>
`

}

//imprimirProductos2()

console.log(Peliculas)





//imprimirProductos()


//La parte de agregar peliculas la dejo aca pendiente por si mas adelante la utilizo

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

//Botones para mayores o menores de 18

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", imprimirProductos)

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", imprimirProductos2)


