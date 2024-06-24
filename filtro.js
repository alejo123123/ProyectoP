const botmaquillaje = document.querySelector('#maqui')
const maquillaje = document.querySelectorAll('#maquillaje')
const unas = document.querySelector('#unas')
const botuna = document.querySelector('#unabot')

    
    if(botuna) {

        botuna.addEventListener('click', function() {

    if (maquillaje.length > 0) {
        maquillaje.forEach(item => {
            item.classList.toggle('hidden')

    })

    } else {
    console.log('sexp')
    }
        })                                                    
    }

    if (botmaquillaje) {

        botmaquillaje.addEventListener('click', function() {
            unas.classList.toggle('hidden')
    }) 
}else {
    console.log('error')
}