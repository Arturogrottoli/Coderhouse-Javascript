console.log("Desafio 5")

// Creacion de Objeto

//Creo un objeto que va a ser el menú de una rotiseria, las diferentes comidas que tiene, si hay disponibilidad de las mismas y el precio de cada una

//Si la rotiseria debe enviar el pedido por delivery el precio aumenta un 15% (Metodo)

class Comida{
    constructor(nombre, disponibilidad, precio){
    this.nombre = nombre;
    this.disponibilidad = disponibilidad;
    this.precio = precio;

    }

delivery() {    
    
    let envio = this.precio * 1.15
    return envio
}
}

//Cargo los distintos elementos que componen el menu de la rotiseria

const Comida1 = new Comida("Empanadas", "Si", 80);
const Comida2 = new Comida("Pizza", "Si", 500);
const Comida3 = new Comida("Hamburguesa", "No", 450);
const Comida4 = new Comida("Milanesa", "Si", 600);

alert("Bienvenidos a rotiseria CoderHouse!")

//Solicito un numero para elegir la comida y luego mediante un if pregunto si es necesario enviarla por delivery o no

let pedido = Number(prompt("Ingrese un numero para hacer su pedido:\n 1-Empanadas \n 2-Pizza \n 3-Hamburguesa \n 4-Milanesa"))

if(pedido==1){
    let conDelivery = confirm(`Usted ha pedido ${Comida1.nombre} quiere que se la enviemos por delivery? `)
    
    if(conDelivery==true){
        
        alert("El costo total del pedido con el envio es de $" + Comida1.delivery())
    }else{
        alert(`El costo total del pedido es de $${Comida1.precio} y debe venir a retirarlo al local `)}
    }else if(pedido==2){
        let conDelivery = confirm(`Usted ha pedido ${Comida2.nombre} quiere que se la enviemos por delivery? `)
        
        if(conDelivery==true){
            
            alert("El costo total del pedido con el envio es de $" + Comida2.delivery())
        }else{
            alert(`El costo total del pedido es de $${Comida2.precio} y debe venir a retirarlo al local `)}
        }else if(pedido==3){
            let conDelivery = confirm(`Usted ha pedido ${Comida3.nombre} quiere que se la enviemos por delivery? `)
            
            if(conDelivery==true){
                
                alert("El costo total del pedido con el envio es de $" + Comida3.delivery())
            }else{
                alert(`El costo total del pedido es de $${Comida3.precio} y debe venir a retirarlo al local `)}
            }else if(pedido==4){
                let conDelivery = confirm(`Usted ha pedido ${Comida4.nombre} quiere que se la enviemos por delivery? `)
                
                if(conDelivery==true){
                    
                    alert("El costo total del pedido con el envio es de $" + Comida4.delivery())
                }else{
                    alert(`El costo total del pedido es de $${Comida4.precio} y debe venir a retirarlo al local `)}
                }else if(pedido > 4) {
                    alert(`El numero ingresado no es valido, debe estar entre el 1 y el 4 `)
                                                          

}
 

