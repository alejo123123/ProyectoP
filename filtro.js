const botmaquillaje = document.querySelector('#maqui')
const maquillaje = document.querySelectorAll('#maquillaje')
const unas = document.querySelector('#unas')
const botuna = document.querySelector('#unabot')
const botfiltro = document.querySelector('#filtro')

    
    if(botuna) {

        botuna.addEventListener('click', function() {

    if (maquillaje.length > 0) {
        unas.classList.remove('hidden')
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
            maquillaje.forEach(item => {
                item.classList.remove('hidden')
    
        })
    }) 
}else {
    console.log('error') 
}

botfiltro.addEventListener('click', function() { 
    botmaquillaje.classList.toggle('hidden')
    botuna.classList.toggle('hidden')

})

