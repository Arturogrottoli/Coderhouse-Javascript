scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn){
    const $ScrollBtn = $(btn);
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        //Operador ternario sustituyendo al if{} else{} 
        scrollTop > 400 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
    })

    $ScrollBtn.click(function(){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })
}

//Pasar sin acento

var originalText = "Ciencia Ficción"
var result = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)



