console.log("Desafio 4")

// Funcion que calcula el promedio de edad de 5 personas que van a recibir la vacuna del Covid-19

//creo la funcion que hace el calculo

function promedioDeEdad(a,b,c,d,e){
    let suma = a+b+c+d+e;
    let promedio = suma/5
    return promedio
}

//Pido mediante prompt las edades a promediar

let edad1 = Number(prompt("Ingresar edad 1 para el promedio"))
let edad2 = Number(prompt("Ingresar edad 2 para el promedio"))
let edad3 = Number(prompt("Ingresar edad 3 para el promedio"))
let edad4 = Number(prompt("Ingresar edad 4 para el promedio"))
let edad5 = Number(prompt("Ingresar edad 5 para el promedio"))

//imprimo mediante una alerta y por consola

alert(promedioDeEdad(edad1,edad2,edad3,edad4,edad5) + " es el promedio de edad de las 5 personas")
console.log(promedioDeEdad(edad1,edad2,edad3,edad4,edad5) + " es el promedio de edad de las 5 personas")

