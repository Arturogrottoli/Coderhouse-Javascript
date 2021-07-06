console.log("Desafio 3")

// Concatenador de palabras con While, termina ingresando la palabra exit

let palabra = prompt("Ingrese una palabra");

let palabraSalida = prompt("Ingrese exit si quiere terminar el programa")

console.log(palabra);

while (palabraSalida != "exit") {
    
            
            let concatenada = prompt("Ingrese una palabra para concatenar")
            palabra = palabra + " " + concatenada;
            console.log(palabra);
            palabraSalida = prompt("Ingrese exit si quiere terminar el programa")
           
    }
    
    alert(`El programa ha finalizado, la palabra concatenada es ${palabra}`);
    console.log(`El programa ha finalizado, la palabra concatenada es ${palabra}`);

//Finaliza con un alerta y mostrando el mismo mensaje por consola




