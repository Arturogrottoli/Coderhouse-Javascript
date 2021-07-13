console.log("Desafio 9")

//Creacion de la clase usuario

class Usuario {
    constructor(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        
    }
}

//Creo un array en donde voy a guardar los usuarios creados

const arrayUsuarios = []



//Funcion que toma los elementos del formulario y los guarda en el array

function crearUsuario(e){

    e.preventDefault()

let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

let nuevoUsuario = new Usuario(nombre, apellido, email, password)

arrayUsuarios.push(nuevoUsuario)

localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios))
console.log(arrayUsuarios);
}

//Funcion que imprime los usuarios previamente cargados 

function imprimirUsuarios(e){

    e.preventDefault()
    
    let print = document.getElementById("print")

    arrayUsuarios.forEach(element =>{

        print.innerHTML += `
        
        <div>
        <p>"Los datos ingresados son los siguientes:"<p>
        <p>${element.nombre}<p>
        <p>${element.apellido}<p>
        <p>${element.email}<p>
        <p>"La contraseña es secreta"<p>
        </div> 

        `
       
    });

}


//Botones que al presionarlos activan las funciones de guardar usuarios e imprimir

let btng = document.getElementById("btng")
btng.addEventListener("click", crearUsuario)

let imprimir = document.getElementById("imprimir")
imprimir.addEventListener("click", imprimirUsuarios)