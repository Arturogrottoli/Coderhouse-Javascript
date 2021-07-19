console.log("Desafio 6 Complementario")

// Mismo array de peliculas que el desafio 6

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

let peli1 = new Pelicula("The Godfather","Drama", "Francis Ford Coppola", 1972, true);
let peli2 = new Pelicula("Get Out","Terror", "Jason Peele", 2017, true);
let peli3 = new Pelicula("Toy Story","Animacion", "John Lasseter", 1996, true);
let peli4 = new Pelicula("The Hangover","Comedia", "Todd Phillips", 2009, false);
let peli5 = new Pelicula("Jurassic Park","Ciencia Ficcion", "Steven Spielberg", 1993, true);
let peli6 = new Pelicula("The Wolf of Wall Street","Biopic", "Martin Scorsese", 2013, false);



Peliculas.push(peli1)
Peliculas.push(peli2)
Peliculas.push(peli3)
Peliculas.push(peli4)
Peliculas.push(peli5)
Peliculas.push(peli6)

console.log("Tabla con las peliculas disponibles:")
console.table(Peliculas)

//Puedo ordenar alfabeticamente con la funcion sort y luego imprimir en consola

console.log("Peliculas Ordenadas Alfabeticamente:")

let ordenAlfa = Peliculas.sort(function(a,b){
    if(a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    return 0;
})

console.log(ordenAlfa)


//Tambien puedo recorrer el array compuesto de objetos mediante for each
console.log("Muestro el recorrido del array ordenado:")

Peliculas.forEach(elemento =>{
    console.log(elemento.nombre)
    
})


//Ahora las vuelvo a ordenar, esta vez por año y las imprimo recorriendo un for comun


ordenAlfa = Peliculas.sort(function(a,b){
    if(a.anio > b.anio){
        return 1;
    }
    if(a.anio < b.anio){
        return -1;
    }
    return 0;
})



console.log("Recorro mediante un for comun y ordenadas por año:")
for(i=0; i< Peliculas.length; i++){
    console.log(Peliculas[i])
}

