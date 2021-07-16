console.log("Desafio 4 Complementario")

// Creo una funcion que calcula el IVA de un producto y se lo suma para que sepamos su valor final y otra que calcula el valor para pagar el producto en 3 cuotas sin interes

//creo la funcion que hace los calculos

function calcularIva(producto){
    let precioFinal = producto*1.21;
    return precioFinal
}

function tresCuotas(producto){
    let cuotas = ((producto*1.21)/3).toFixed(2);
    return cuotas

}

//Pido mediante prompt el nombre y el precio de costo del producto

let nombreProducto = prompt("Ingrese el nombre del producto")
let producto = Number(prompt("Ingrese el monto del producto"))



//imprimo mediante una alerta el precio final y por consola lo mismo y la posibilidad de pagar en cuotas sin interes

alert(calcularIva(producto) + `$ es el precio de ${nombreProducto} con IVA`)
console.log(calcularIva(producto) + `$ es el precio de ${nombreProducto} con IVA y se puede pagar en 3 cuotas de $`+tresCuotas(producto) +` sin interes`)

