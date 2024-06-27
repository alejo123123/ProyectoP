const numero = document.querySelector('#numero')
const local = document.querySelector('#local')
const boton = document.querySelector('#copy')
const boton2 = document.querySelector('#copy2')

function copiartexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar texto: ', err);
    });
}


boton.addEventListener('click', function () {
    copiartexto(numero.textContent)
    boton.textContent = 'copiado'
    setTimeout( function() {
        boton.textContent = 'copiar'
    },3000)
        
})


boton2.addEventListener('click', function () {
    copiartexto(local.textContent)
    boton2.textContent = 'copiado'
    setTimeout( function() {
        boton2.textContent = 'copiar'
    },3000)
        
})