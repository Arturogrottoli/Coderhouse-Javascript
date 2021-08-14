//Funcion Formulario, utilizo una API llamada formspree

const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}

//demas botones



//Creo una funcion para poder remover los child


function remover(myNode){

  while(myNode.hasChildNodes())
  {
     myNode.removeChild(myNode.lastChild);
  }
  }


//Si apreto en peliculas me muestra solo las peliculas, idem con las series, ahora hecho con Jquery


let btn1 = $('#btnpelis')
$(btn1).click(imprimirPelis);

let btn2 = $('#btnseries')
$(btn2).click(imprimirSeries);

let btn3 = $('#btnaccion')
$(btn3).click(imprimirAccion);

let btn4 = $('#btnanimacion')
$(btn4).click(imprimirAnimacion);

let btn5 = $('#btnbiopic')
$(btn5).click(imprimirBiopic);

let btn6 = $('#btnciencia')
$(btn6).click(imprimirCiencia);

let btn7 = $('#btncomedia')
$(btn7).click(imprimirComedia);

let btn8 = $('#btndrama')
$(btn8).click(imprimirDrama);

let btn9 = $('#btnterror')
$(btn9).click(imprimirTerror);
