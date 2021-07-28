const URL = "http://hp-api.herokuapp.com/api/characters/students";
const URLPost = "https://jsonplaceholder.typicode.com/posts";
const contenedorCards = $('#container-row');
console.log(contenedorCards);

//Método get() de jQuery
 $.get(URL, function(data, status){
     console.log(data);
     console.log(status);
     if (status === "success"){
         data.forEach(function(personaje){
                     contenedorCards.append(`
                     <div class="col-sm-4">
                         <div class="card">
                         <div class="card-body">
                             <h5 class="card-title">${personaje.name}</h5>
                             <p class="card-text">This person is ${personaje.species}</p>
                             <img src="${personaje.image}" width="250px">
                         </div>
                         </div>
                     </div>
                 `)
     })
                 
     }
 });

//Método ajax() de jQuery
// $.ajax({
//     method: "GET",
//     url: URL
// }).done((data)=> {
//     data.forEach(function(personaje){
//                     contenedorCards.append(`
//                     <div class="col-sm-4">
//                         <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${personaje.name}</h5>
//                             <p class="card-text">This person is ${personaje.species}</p>
//                             <img src="${personaje.image}" width="250px">
//                         </div>
//                         </div>
//                     </div>
//                 `)
//     })   
// }).fail((error)=>{
//     console.error(error)
// }).always(()=>{
//     console.log('Tarea finalizada');
// });

//Método getJSON() de jQuery
// $.getJSON(URL, function(data, status){
//     console.log(data)
//     console.log(status)
//     if (status === "success"){
//         data.forEach(function(personaje){
//                                 contenedorCards.append(`
//                                 <div class="col-sm-4">
//                                     <div class="card">
//                                     <div class="card-body">
//                                         <h5 class="card-title">${personaje.name}</h5>
//                                         <p class="card-text">This person is ${personaje.species}</p>
//                                         <img src="${personaje.image}" width="250px">
//                                     </div>
//                                     </div>
//                                 </div>
//                             `)
//                 })
//     }
// });

//Método fetch de Javascript Vanilla
// fetch(URL)
//     .then(response => response.json())
//     .then(data => data.forEach(function(personaje){
//                             contenedorCards.append(`
//                             <div class="col-sm-4">
//                                 <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${personaje.name}</h5>
//                                     <p class="card-text">This person is ${personaje.species}</p>
//                                     <img src="${personaje.image}" width="250px">
//                                 </div>
//                                 </div>
//                             </div>
//                         `)
//                     })
//     );



/*
const info = {
    nombre: "Gonzalo",
    ciudad: "Rosario",
    edad: 38
};

$.post(URLPost, info, function(data, status){
    console.log(data);
    console.log(status);
    console.log(data.id);
})

*/
