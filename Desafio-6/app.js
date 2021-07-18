console.log("Desafio 6")

// Voy a intentar hacer un arrays de peliculas, como si estuvieran en un servicio de streaming
//Primero comienzo con una clase, que muestre las caracteristicas de las peliculas

class Pelicula{
    constructor(nombre, categoria, director, anio, disponibilidad){
        this.nombre = nombre;
        this.categoria = categoria;
        this.director = director;
        this.anio = anio;
        this.disponibilidad = disponibilidad;
    }
}

//creo el array y voy nombrando las peliculas que lo van a componer

const Peliculas = [];

let peli1 = new Pelicula("Jurassic Park","Ciencia Ficcion", "Steven Spielberg", 1993, true);
let peli2 = new Pelicula("Get Out","Terror", "Jason Peele", 2017, true);
let peli3 = new Pelicula("Toy Story","Animacion", "John Lasseter", 1996, true);
let peli4 = new Pelicula("The Hangover","Comedia", "Todd Phillips", 2009, false);
let peli5 = new Pelicula("The Godfather","Drama", "Francis Ford Coppola", 1972, true);
let peli6 = new Pelicula("The Wolf of Wall Street","Biopic", "Martin Scorsese", 2013, false);

//los agrego a la libreria con .push (Se me habia ocurrido hacerlo con for pero en la clase Julian dijo que por ahora los metamos asi que despues vamos a ver maneras mas dinamicas)

Peliculas.push(peli1)
Peliculas.push(peli2)
Peliculas.push(peli3)
Peliculas.push(peli4)
Peliculas.push(peli5)
Peliculas.push(peli6)

//Puedo hacer una funcion que me agregue peliculas que se suman al catalogo

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

agregarPelis()

//Luego imprimo las peliculas que tengo disponibles

console.log("El listado de peliculas disponibles es el siguiente:")
console.table(Peliculas)




//Se puede filtrar para ver peliculas nuevas, digamos que sean posteriores al año dosmil

console.log("Peliculas Nuevas:")
const pelisNuevas = Peliculas.filter(Pelicula => Pelicula.anio > 2000)
console.log(
    `Las peliculas posteriores al 2000 del catalogo son ${pelisNuevas.map(
      (item) => item.nombre
    )}`
  );

//tambien puedo aplicar otro filtro y elegir que me muestre las peliculas de una determinada categoria

console.log("La categoria elegida tiene las peliculas:")

let elegir = prompt("Que categoria quiere mirar?")

console.log(Peliculas.filter(Pelicula => Pelicula.categoria == elegir))

