const botmaquillaje = document.querySelector('#maqui')
const maquillaje = document.querySelectorAll('#maquillaje')
const unas = document.querySelectorAll('#unas')
const botuna = document.querySelector('#unabot')
const botfiltro = document.querySelector('#filtro')
const labialp = document.querySelectorAll('#labial')
const botlabial = document.querySelector('#labot')
const botodo = document.querySelector('#todo')

    
    if(botuna) {

        botuna.addEventListener('click', function() {

    if (maquillaje.length > 0) {

        unas.forEach(item => {
            item.classList.remove('hidden')
        })

        maquillaje.forEach(item => {
            item.classList.add('hidden')
        })

        labialp.forEach(item => {
            item.classList.add('hidden')
        
    })

    } else {
    console.log('error')
    }
        })                                                    
    }

    if (botmaquillaje) {
        
        botmaquillaje.addEventListener('click', function() {

            unas.forEach(item => {
                item.classList.add('hidden')
            })
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


 if (botlabial) {
    botlabial.addEventListener('click', function () {
    labialp.forEach(item => {
        item.classList.remove('hidden')
    })
    maquillaje.forEach(item => {
        item.classList.add('hidden')
    })
    unas.forEach(item => {
    item.classList.add('hidden')
    })
})

 } else {
    console.log('sexo')
 }


 if (botodo) {
    botodo.addEventListener('click', function () {
        labialp.forEach(item => {
            item.classList.remove('hidden')
        })
        maquillaje.forEach(item => {
            item.classList.remove('hidden')
        })
        unas.forEach(item => {
            item.classList.remove('hidden')
        })

    })
 } else {
    console.log('error')
 }

botfiltro.addEventListener('click', function() { 
    botodo.classList.toggle('hidden')
    botmaquillaje.classList.toggle('hidden')
    botuna.classList.toggle('hidden')
    botlabial.classList.toggle('hidden')

})




