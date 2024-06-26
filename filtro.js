const botmaquillaje = document.querySelector('#maqui')
const maquillaje = document.querySelectorAll('#maquillaje')
const unas = document.querySelector('#unas')
const botuna = document.querySelector('#unabot')
const botfiltro = document.querySelector('#filtro')
const labialp = document.querySelectorAll('#labial')
const botlabial = document.querySelector('#labot')

    
    if(botuna) {

        botuna.addEventListener('click', function() {

    if (maquillaje.length > 0) {
        unas.classList.remove('hidden')

        maquillaje.forEach(item => {
            item.classList.add('hidden')
        })
        labialp.forEach(item => {
            item.classList.add('hidden')
        
    })

    } else {
    console.log('sexp')
    }
        })                                                    
    }

    if (botmaquillaje) {
        
        botmaquillaje.addEventListener('click', function() {
            unas.classList.add('hidden')
            maquillaje.forEach(item => {
                item.classList.remove('hidden')
            })
            labialp.forEach(item => {
                item.classList.add('hidden')
            })
    
        })
    } 
    else {
    console.log('error') 
}



botlabial.addEventListener('click', function () {
    labialp.forEach(item => {
        item.classList.remove('hidden')
    })
    maquillaje.forEach(item => {
        item.classList.add('hidden')
    unas.classList.add('hidden')
})
})

botfiltro.addEventListener('click', function() { 
    botmaquillaje.classList.toggle('hidden')
    botuna.classList.toggle('hidden')
    botlabial.classList.toggle('hidden')

})




